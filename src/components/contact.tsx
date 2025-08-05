import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set timeout to show message after 50 seconds
    const timeout = setTimeout(() => {
      setStatus('Request timed out. Please try again later.');
    }, 50000); // 50 seconds timeout

    emailjs
      .send(
        'service_rhxp41k', // Replace with your EmailJS service ID
        'template_d28cva6', // Replace with your EmailJS template ID
        formData,
        'gto9KOJs26agcZv6n' // Replace with your EmailJS user ID
      )
      .then(
        (response: { status: any; text: any; }) => {
          clearTimeout(timeout); // Clear timeout on success
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error: any) => {
          clearTimeout(timeout); // Clear timeout on failure
          console.log('FAILED...', error);
          setStatus('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
          <form onSubmit={sendEmail} className="shadow-lg p-4 rounded-lg bg-light">
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
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
            {status && <p className="mt-3 text-center text-success">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;