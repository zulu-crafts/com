import ContactForm from '../components/contact';
import images from '../assets/best-it-service.webp'

const ContactPage = () => {
  return (
    
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="home-image-container">
        <img
          src={images}
          alt="Zulu Crafts Banner"
          className="home-image fade-in"
        />
        <div className="home-image-overlay"></div>
        <div className="home-image-text">
          <h1>Contact Us</h1>
          
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;

