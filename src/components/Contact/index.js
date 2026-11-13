import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/mnqgopvp";
const EMAIL = "mpt789@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    setStatus("SENDING");

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => setStatus("ERROR"));
  }

  return (
    <section className="section" id="hire">
      <div className="wrap hire-grid">
        <div className="contact-copy">
          <h2>Hire / Contact</h2>
          <p>
            Looking for a freelance developer to build a focused, ad-free tool
            or site? Email me, use the form, or find me on GitHub and LinkedIn.
          </p>
          <ul className="contact-list">
            <li>
              Email:{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/MarcusTravis"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/MarcusTravis
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/marcustravis"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/marcustravis
              </a>
            </li>
          </ul>
        </div>
        <form className="form" onSubmit={handleSubmit} method="POST">
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              placeholder="Tell me about the project and how to reach you."
            />
          </label>
          {status === "SUCCESS" ? (
            <p className="form-status success">
              Thanks — your message was sent.
            </p>
          ) : (
            <button className="btn btn-primary" type="submit" disabled={status === "SENDING"}>
              {status === "SENDING" ? "Sending…" : "Send message"}
            </button>
          )}
          {status === "ERROR" && (
            <p className="form-status error">
              The form didn&apos;t send. Please email me at {EMAIL} instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
