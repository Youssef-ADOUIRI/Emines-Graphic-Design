import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contactForm">
      <form>
        <div className="mb-2">
          <input
            type="name"
            className="form-control rounded-0"
            id="FormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-0"
            id="FormControlInput"
            placeholder="Email adresse "
          />
        </div>
        <div className="mb-3 ">
          <textarea
            className="form-control rounded-0"
            id="FormControlTextarea1"
            rows="3"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Confirm identity
        </button>
      </form>
    </section>
  );
}

export default Contact;
