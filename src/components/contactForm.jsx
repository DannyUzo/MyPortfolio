import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqoojvb");
  if (state.succeeded) {
      return <p>Your message has been sent</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <h3>Get in touch</h3>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="What's you web address?"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message'>
        Message
      </label>
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
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}