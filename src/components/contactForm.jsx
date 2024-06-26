import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Message } from "./contactMessage";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqoojvb");
  if (state.succeeded) {
    return <Message />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Get in touch</h2>
      <div className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="What's your name?"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="infoWrapper">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="What's your web address?"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="infoWrapper">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="What do you want to say?"
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </div>
    </form>
  );
};
