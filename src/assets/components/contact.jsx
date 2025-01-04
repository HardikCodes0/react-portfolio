import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mjkkprzq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:batrahardik09@gmail.com">batrahardik09@gmail.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <a href="tel:7827860651">+91 7827860651</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
