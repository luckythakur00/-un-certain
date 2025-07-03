// import { FaArrowUp } from 'react-icons/fa';
// import logo from '../assets/logo.jpeg';

// const Footer = () => {

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="bg-[#8B0000] text-white font-sans p-8 md:p-12 lg:p-16">
//       <div className=" mx-auto bg-green-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         <div className="lg:col-span-1">
//           <div className="text-2xl font-bold mb-6">
//             <img src={logo} alt="Logo" className='h-12 w-60' />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-light mb-10 leading-tight">Join The<br />Community!</h2>
//           <a href='#contact' className=" border border-white px-6 py-2 hover:bg-white hover:text-red-800 transition-colors duration-300 rounded">Get in touch!</a>
//         </div>
//         <div>
//           <h3 className="font-bold text-lg mb-4">Info</h3>
//           <a href="tel:+919910125735" className="block hover:underline">+91 99101 25735</a>
//           <a href="mailto:info@mysite.com" className="block mt-2 hover:underline">info@mysite.com</a>
//         </div>
//         {/* <div>
//           <h3 className="font-bold text-lg mb-4">Address</h3>
//           <p className="text-white/90">M3M Golf Estate, Sector 65,<br />Gurugram, 122102</p>
//         </div> */}
//         <div className="flex flex-col justify-between items-start md:items-end">
//           <div>
//             <h3 className="font-bold text-lg mb-4">Follow</h3>
//             <ul className="space-y-2">
//               <li><a href="https://www.linkedin.com/company/un-certain/?lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3Bdf3ced32-c118-4aa5-99ab-fe089a52c50d" target='_blank' className="hover:underline">LinkedIn</a></li>
//               <li><a href="https://www.facebook.com/profile.php?id=61577753199080" target='_blank' className="hover:underline">Facebook</a></li>
//               <li><a href="https://www.instagram.com/uncertain.in?igsh=cnQzNTV5azhvZWVy" target='_blank' className="hover:underline">Instagram</a></li>
//             </ul>
//           </div>
//           <button onClick={scrollToTop} aria-label="Scroll to top" className="mt-8 border border-white/50 rounded-full p-3 hover:bg-white hover:text-red-800 transition-colors"><FaArrowUp /></button>
//         </div>
//       </div>

//       <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/60">© {new Date().getFullYear()} (un)certain. All Rights Reserved.</div>
//     </footer>
//   );
// };

// export default Footer;











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
    <footer className="bg-[#8B0000] text-white font-sans p-8 md:p-12 lg:p-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logo} alt="Uncertain Logo" className='h-12 w-auto' />
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-10 leading-tight">Join The<br />Community!</h2>
            <a href='#contact' className="inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-[#8B0000] transition-colors duration-300">Get in touch!</a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+919910125735" className="hover:underline">+91 99101 25735</a>
              </li>
              <li>
                <a href="mailto:info@mysite.com" className="hover:underline">info@mysite.com</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <div>
              <h3 className="font-bold text-lg mb-4">Follow</h3>
              <ul className="space-y-2 text-left md:text-right">
                <li><a href="https://www.linkedin.com/company/un-certain/" target='_blank' rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61577753199080" target='_blank' rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                <li><a href="https://www.instagram.com/uncertain.in" target='_blank' rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <button onClick={scrollToTop} aria-label="Scroll to top" className="mt-8 border border-white/50 rounded-full p-3 hover:bg-white hover:text-[#8B0000] transition-colors duration-300"><FaArrowUp /></button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/60">© {new Date().getFullYear()} (un)certain. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;