import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from '../assets/software-companies-SA.jpg';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: '' });

    const timeout = setTimeout(() => {
      setIsSending(false);
      setStatus({ type: 'error', message: 'Request timed out. Please try again later.' });
    }, 15000);

    emailjs
      .send('service_rhxp41k', 'template_d28cva6', formData, 'gto9KOJs26agcZv6n')
      .then(
        () => {
          clearTimeout(timeout);
          setIsSending(false);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          clearTimeout(timeout);
          setIsSending(false);
          setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
      );
  };

  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="home-image-container">
        <img src={Image} alt="Zulu Crafts Banner" className="home-image fade-in" />
        <div className="home-image-overlay"></div>
        <div className="home-image-text">
          <h1>Get to Know Us..</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <section id="contact" className="contact-container py-5 about-container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h2 className="text-center mb-4">Contact Me</h2>
            <form onSubmit={sendEmail} className="contact-form shadow-lg p-4 rounded-lg bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status.type && (
                <p
                  className={`mt-3 text-center ${status.type === 'success' ? 'text-success' : 'text-danger'}`}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

