import { FiPhone, FiMail, FiMapPin, FiInstagram, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

  return (
    <div id='contact' className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mt-8 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">Any question or remarks? Just write us a message!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-2/5 bg-[#8B0000] text-white p-8 md:p-12 relative">
            {/* <div className="absolute top-0 left-0 w-48 h-48 bg-red-700/50 rounded-full -mt-20 -ml-20"></div> */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-700/50 rounded-full -mb-16 -mr-12"></div>

            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="mb-8 text-red-100">Say something to start a live chat!</p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FiPhone className="w-6 h-6 mr-4" />
                <a href="tel:+919910125735" className="block hover:underline">+91 9910125735</a>
              </div>
              <div className="flex items-center">
                <FiMail className="w-6 h-6 mr-4" />
                <a href="mailto:info@mysite.com" className="block mt-2 hover:underline">info@mysite.com</a>
              </div>
              <div className="flex items-start">
                <FiMapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <span>M3M Golf Estate, Sector 65,Gurugram, 122102</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-red-500/50 flex space-x-4">
              <a href="https://wa.me/919910125735" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FaWhatsapp /></a>
              <a href="#" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FiInstagram /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 md:p-12">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input type="text" id="first-name" placeholder='First Name' className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last Name" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" placeholder='Email' className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                </div>
                <div>
                  <label htmlFor="phone-number" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" id="phone-number" placeholder="Phone" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" rows="8" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" placeholder="Write your message.."></textarea>
              </div>

              <div className="text-right">
                <button type="submit" className="bg-[#8B0000] text-white cursor-pointer font-bold py-3 px-8 rounded-lg hover:bg-[#730000] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center ml-auto">Send Message<FiSend className="ml-3" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;