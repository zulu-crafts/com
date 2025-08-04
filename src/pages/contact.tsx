import ContactForm from '../components/contact';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;

