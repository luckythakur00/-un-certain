import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#8B0000] text-white font-sans p-8 md:p-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-x-8 gap-y-10">
          <div className="flex-shrink-0">
            <img src={logo} alt="Uncertain Logo" className='h-14 w-auto' />
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-3">Info</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+919910125735" className="text-lg hover:underline">+91 99101 25735</a>
                </li>
                <li>
                  <a href="mailto:info@uncertain.com" className="text-lg hover:underline">info@uncertain.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-3">Follow</h3>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/company/un-certain/" target='_blank' rel="noopener noreferrer" className=" text-lg md:text-xl hover:underline">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61577753199080" target='_blank' rel="noopener noreferrer" className=" text-lg md:text-xl hover:underline">Facebook</a></li>
                <li><a href="https://www.instagram.com/uncertain.in" target='_blank' rel="noopener noreferrer" className=" text-lg md:text-xl hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <a href='#contact' className="inline-block border border-white px-10 py-3 rounded hover:bg-white hover:text-[#8B0000] transition-colors duration-300">Get in touch!</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex justify-between items-center text-sm text-white/60">
          <span>© {new Date().getFullYear()} (un)certain. All Rights Reserved.</span>
          <button onClick={scrollToTop} aria-label="Scroll to top" className="cursor-pointer border border-white/50 rounded-full p-3 hover:bg-white hover:text-[#8B0000] transition-colors duration-300"><FaArrowUp /></button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;