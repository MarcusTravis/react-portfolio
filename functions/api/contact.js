// Proxies contact form posts to the marcustravis-contact Worker, which
// verifies Turnstile and sends mail via a send_email binding. Pages
// projects cannot declare send_email in wrangler.toml.
export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed." }), {
      status: 405,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
  if (!env.CONTACT) {
    return new Response(
      JSON.stringify({ error: "The contact form is not configured yet." }),
      { status: 500, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }
  return env.CONTACT.fetch(new Request("https://contact.internal/api/contact", request));
}
