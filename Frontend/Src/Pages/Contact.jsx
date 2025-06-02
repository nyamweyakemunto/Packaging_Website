import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-form-section">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <ContactForm />
          </div>
          
          <div className="contact-info-section">
            <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact