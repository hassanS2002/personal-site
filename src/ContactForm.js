import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formState, setFormState] = useState({ status: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ status: 'Form submitted!' });
  };

  return (
    <>
      {!!formState.status && <div>Current form status is: {formState.status}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
