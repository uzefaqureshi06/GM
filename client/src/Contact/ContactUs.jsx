import './ContactUs.css';
import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://sheetdb.io/api/v1/rw2kq23fbjto4', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            name: name,
            email: email,
            message: message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-container">
      <h1><span>Contact</span> Us</h1>

      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
