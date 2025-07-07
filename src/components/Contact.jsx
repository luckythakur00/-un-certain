import { FiPhone, FiMail, FiInstagram, FiFacebook, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Alert from './Alert';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: 'info',
    title: '',
    message: '',
  });

  const handleCloseAlert = () => setAlert({ ...alert, show: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCloseAlert();

    if (!firstName || !email || !mobile || !message) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please fill out all required fields to continue.',
      });
      return;
    }
    setSubmitting(true);
    try {
      const userData = {
        access_key: import.meta.env.VITE_MAIL_ACCESS_KEY,
        name: firstName + lastName,
        email: email,
        mobile: mobile,
        message: message
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(userData)
      }).then((res) => res.json());

      if (res.success) {
        setAlert({
          show: true,
          type: 'success',
          title: 'Message Sent!',
          message: 'Thank you for reaching out. We will get back to you shortly.',
        });
      } else {
        alert("Server Error!")
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Submission Failed',
        message: 'Something went wrong on our end. Please try again later.',
      });
    } finally {
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setMessage('');
      setSubmitting(false);
    }
  }

  return (
    <div id='contact' className="bg-gray-50 min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mt-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">Any question or remarks? Just write us a message!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-2/5 bg-[#8B0000] text-white p-8 md:p-12 relative">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-700/50 rounded-full -mb-16 -mr-12"></div>

            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="mb-2 text-red-100">Say something to start a live chat!</p>
            <p className='mb-8 text-sm'>Have questions, concerns, or just need guidance? We're here to support students on their journey — reach out via call, email, or connect with us on social media.</p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FiPhone className="w-6 h-6 mr-4 " />
                <a href="tel:+919910125735" className="block hover:underline">+91 9910125735</a>
              </div>
              <div className="flex items-center">
                <FiMail className="w-6 h-6 mr-4" />
                <a href="mailto:info@uncertain.in" className="block hover:underline">info@uncertain.in</a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-red-500/50 flex space-x-4">
              <a href="https://wa.me/919910125735" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/uncertain.in?igsh=cnQzNTV5azhvZWVy" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FiInstagram /></a>
              <a href="https://www.instagram.com/uncertain.in?igsh=cnQzNTV5azhvZWVy" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FiFacebook /></a>
              <a href="https://www.linkedin.com/company/un-certain/?lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3Bdf3ced32-c118-4aa5-99ab-fe089a52c50d" target='_blank' className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"><FaLinkedin /></a>
            </div>
          </div>

          <div className="w-full lg:w-3/5 bg-white p-8 md:p-12">
            <div className="mb-4">
              {
                alert.show && (
                  <Alert type={alert.type} title={alert.title} message={alert.message} onClose={handleCloseAlert} />
                )
              }
            </div>
            <>
              <form name="contact" netlify hidden>
                <input type="text" name="first-name" />
                <input type="text" name="last-name" />
                <input type="email" name="email" />
                <input type="tel" name="phone-number" />
                <textarea name="message"></textarea>
              </form>

              <form name="contact" netlify onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="first-name" className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="phone-number" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input type="tel" id="phone-number" name="phone-number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Phone" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" placeholder="Write your message.."></textarea>
                </div>
                <div className="text-right">
                  <button type="submit" disabled={submitting} className={`bg-[#8B0000] text-white ${submitting ? 'cursor-auto' : 'cursor-pointer hover:bg-[#730000] hover:scale-105'} font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 transform flex items-center justify-center ml-auto`}>
                    {submitting ? 'Sending...' : 'Send Message'}
                    {!submitting && <FiSend size={18} />}
                  </button>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;