const FROM_ADDRESS = "hello@marcustravis.com";
const FROM_NAME = "Marcus Travis";
const DESTINATION = "mpt789@gmail.com";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildRawEmail({ from, to, replyTo, replyName, subject, text }) {
  const encodedSubject = `=?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
  const reply = replyName
    ? `"${String(replyName).replace(/["\\]/g, "")}" <${replyTo}>`
    : replyTo;
  return [
    `From: ${FROM_NAME} <${from}>`,
    `To: ${to}`,
    `Reply-To: ${reply}`,
    `Subject: ${encodedSubject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
  ].join("\r\n");
}

async function verifyTurnstile(secret, token, ip) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return res.json();
}

export async function onRequestPost({ request, env }) {
  if (!env.TURNSTILE_SECRET) {
    return json({ error: "The contact form is not configured yet." }, 500);
  }

  let payload;
  try {
    payload = await request.json();
  } catch (err) {
    return json({ error: "Invalid request." }, 400);
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  const token = String(payload.token || "").trim();

  if (!name || !email || !message) {
    return json({ error: "Please fill in your name, email, and message." }, 400);
  }
  if (name.length > 200 || email.length > 254 || message.length > 5000) {
    return json({ error: "One of the fields is too long." }, 400);
  }
  if (!isEmail(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }
  if (!token) {
    return json({ error: "Please complete the verification check." }, 400);
  }

  const outcome = await verifyTurnstile(
    env.TURNSTILE_SECRET,
    token,
    request.headers.get("CF-Connecting-IP")
  );
  if (!outcome.success) {
    return json({ error: "Verification failed. Please try again." }, 400);
  }

  const subject = `Website contact from ${name}`;
  const text = `New message from the marcustravis.com contact form.\n\nName: ${name}\nEmail: ${email}\n\n${message}\n`;
  const html = `<p>New message from the marcustravis.com contact form.</p>
<p><strong>Name:</strong> ${escapeHtml(name)}<br />
<strong>Email:</strong> ${escapeHtml(email)}</p>
<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`;

  try {
    await env.EMAIL.send({
      from: { email: FROM_ADDRESS, name: FROM_NAME },
      to: DESTINATION,
      replyTo: { email, name },
      subject,
      text,
      html,
    });
  } catch (err) {
    try {
      const { EmailMessage } = await import("cloudflare:email");
      const raw = buildRawEmail({
        from: FROM_ADDRESS,
        to: DESTINATION,
        replyTo: email,
        replyName: name,
        subject,
        text,
      });
      await env.EMAIL.send(new EmailMessage(FROM_ADDRESS, DESTINATION, raw));
    } catch (fallbackErr) {
      return json({ error: "The form didn't send. Please email me instead." }, 500);
    }
  }

  return json({ ok: true });
}

export async function onRequest({ request, env }) {
  if (request.method === "POST") {
    return onRequestPost({ request, env });
  }
  return json({ error: "Method not allowed." }, 405);
}
