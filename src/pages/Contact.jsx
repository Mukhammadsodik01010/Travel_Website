import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // normally you'd call an API here; for lab we just show success message
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>If you have questions or suggestions, please send us a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input required type="text" placeholder="Your name" />

        <label>Email</label>
        <input required type="email" placeholder="you@example.com" />

        <label>Message</label>
        <textarea required rows="5" placeholder="Write your message..." />

        <button type="submit" className="btn">
          Send
        </button>
      </form>

      {sent && (
        <div className="success-message">
          Thank you — your message was sent!
        </div>
      )}
    </div>
  );
}
