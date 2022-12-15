import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", email: "", body: "" },
  });

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <section className="contactForm">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-2">
          <input
            type="name"
            className="form-control rounded-0"
            id="FormControlInput1"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-0"
            id="FormControlInput"
            placeholder="Email adresse "
            {...register("email")}
          />
        </div>
        <div className="mb-3 ">
          <textarea
            className="form-control rounded-0"
            id="FormControlTextarea1"
            rows="3"
            placeholder="Type your message here"
            {...register("body")}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Contact
        </button>
      </form>
    </section>
  );
};

export default Contact;
