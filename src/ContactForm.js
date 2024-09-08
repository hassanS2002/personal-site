import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

// Initialize EmailJS with your public key
emailjs.init("Frg7m1BAQw4Hd1G3U");

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'port', // Your service ID
      'template_cei1x2w', // Your correct template ID
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: 'siddiquihassan931@gmail.com'
      }
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormState({
        name: '',
        email: '',
        message: '',
        status: 'Message sent successfully!'
      });
    }, (err) => {
      console.log('FAILED...', err);
      setFormState({
        ...formState,
        status: 'Failed to send message. Please try again.'
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your name" 
        name="name" 
        value={formState.name}
        onChange={handleChange}
        required 
        aria-label="Your name" 
      />
      <input 
        type="email" 
        placeholder="Email" 
        name="email" 
        value={formState.email}
        onChange={handleChange}
        required 
        aria-label="Email" 
      />
      <textarea 
        placeholder="Your message" 
        name="message" 
        value={formState.message}
        onChange={handleChange}
        required 
        aria-label="Your message" 
      />
      <button type="submit">Send a message</button>
      {formState.status && (
        <p className={formState.status.includes('successfully') ? 'success' : 'error'}>
          {formState.status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
