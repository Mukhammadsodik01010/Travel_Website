import { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Message:</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
      {messageSent && (
        <p className="success-message">
          Thank you! Your message has been sent.
        </p>
      )}
    </div>
  );
}
