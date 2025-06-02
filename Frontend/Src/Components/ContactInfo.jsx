import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h2>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Our Location</h3>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">San Francisco, CA 94105</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <FaPhone className="text-green-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600 text-sm mt-1">Mon-Fri: 9am-5pm</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <FaEnvelope className="text-purple-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600">info@example.com</p>
            <p className="text-gray-600">support@example.com</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start">
          <div className="bg-amber-100 p-3 rounded-full mr-4">
            <FaClock className="text-amber-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Contact Us
        </button>
      </div>
    </div>
 


        <h3 className="font-semibold">Address</h3>
        <p>123 Main Street, City</p>
      </div>
      {/* Add other contact info */}
    </div>
  );
};

export default ContactInfo;