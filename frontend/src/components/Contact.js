import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contactForm">
      <form>
        <div class="mb-2">
          <input
            type="name"
            class="form-control rounded-0"
            id="FormControlInput1"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control rounded-0"
            id="FormControlInput"
            placeholder="Email adresse "
          />
        </div>
        <div class="mb-3 ">
          <textarea
            class="form-control rounded-0"
            id="FormControlTextarea1"
            rows="3"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button type="submit" class="btn">
          Confirm identity
        </button>
      </form>
    </section>
  );
}

export default Contact;
