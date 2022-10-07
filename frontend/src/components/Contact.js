import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contactForm">
      <div class="mb-3">
        <label for="FormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="FormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="FormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="FormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </section>
  );
}

export default Contact;
