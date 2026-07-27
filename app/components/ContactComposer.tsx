"use client";

import { FormEvent, useState } from "react";

export default function ContactComposer() {
  const [status, setStatus] = useState("");

  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setStatus("Your email app is opening. If it does not open, use the email address shown on this page.");
    window.location.href = `mailto:anchorchurchlc1@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={composeEmail}>
      <label>
        <span>Your name</span>
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label>
        <span>Email address</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label>
        <span>How can we help?</span>
        <textarea name="message" rows={6} required />
      </label>
      <button className="button button-dark" type="submit">Open email message <span aria-hidden="true">↗</span></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
