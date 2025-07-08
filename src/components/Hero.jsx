// import Image from '../assets/Image2.jpeg';

// function Hero() {
//   return (
//     <div className='w-full'>
//       <div className='h-8 w-full bg-[#8B0000]'></div>
//       <div id='home' className='w-full flex flex-col lg:flex-row'>
//         <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 lg:space-y-10 bg-white text-[#8B0000] order-2 lg:order-1'>
//           <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>What if every student had a mentor growing up? </h1>
//           <p className='text-base md:text-lg text-[#8B0000]'>They’d know their strengths, understand their options, and make decisions with confidence—not out of comparison, pressure, or fear of missing out.</p>
//           <a href='#contact' className='w-fit px-8 py-3 rounded-full text-base font-semibold bg-[#8B0000] text-white hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all duration-300'>Start with a free consultation</a>
//         </div>
//         <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] order-1 lg:order-2'>
//           <img src={Image} alt="Students collaborating" className='h-full w-full object-cover' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;











// import { Helmet } from 'react-helmet';
// import Image from '../assets/Image2.jpeg';

// function Hero() {
//   return (
//     <>
//       <Helmet>
//         <title>uncertain.in</title>
//         <meta name="description" content="uncertain.in helps students discover their strengths and make confident decisions with personalized mentorship."
//         />
//       </Helmet>
//       <div className='w-full'>
//         <div className='h-8 w-full bg-[#8B0000]'></div>
//         <div id='home' className='w-full flex flex-col lg:flex-row'>
//           <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 lg:space-y-10 bg-white text-[#8B0000] order-2 lg:order-1'>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
//               What if every student had a mentor growing up?
//             </h1>
//             <p className='text-base md:text-lg text-[#8B0000]'>
//               At <strong>Uncertain.in</strong>, we believe every student deserves a mentor growing up. They’d know their strengths, understand their options, and make decisions with confidence—not out of comparison, pressure, or fear of missing out.
//             </p>
//             <a href='#contact' className='w-fit px-8 py-3 rounded-full text-base font-semibold bg-[#8B0000] text-white hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all duration-300'>
//               Start with a free consultation
//             </a>
//           </div>
//           <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] order-1 lg:order-2'>
//             <img src={Image} alt="Students collaborating" className='h-full w-full object-cover' />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero;








import { Helmet } from 'react-helmet';
import Image from '../assets/Image2.jpeg';

function Hero() {
  // Step 2: Define comprehensive SEO metadata for your home page
  const pageTitle = "(un)certain: Personalized Mentorship for Student Success";
  const pageDescription = "At (un)certain, we believe every student deserves a mentor. Discover your strengths and make confident decisions with our personalized guidance. Start with a free consultation.";
  const canonicalUrl = "https://uncertain.in/"; // The root URL for the home page

  return (
    <>
      {/* --- SEO Head Management --- */}
      {/* Step 3: Add the updated Helmet component */}
      <Helmet>
        {/* --- Primary SEO Tags --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* --- Open Graph / Social Media Tags --- */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={Image} /> {/* Use a full, absolute URL to your hero image in production */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="(un)certain" />

        {/* --- Twitter Card Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={Image} /> {/* Use a full, absolute URL */}
      </Helmet>

      {/* --- Your Original UI (Unchanged) --- */}
      <div className='w-full'>
        <div className='h-8 w-full bg-[#8B0000]'></div>
        <div id='home' className='w-full flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 lg:space-y-10 bg-white text-[#8B0000] order-2 lg:order-1'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              What if every student had a mentor growing up?
            </h1>
            <p className='text-base md:text-lg text-[#8B0000]'>
              At <strong>(un)certain</strong>, we believe every student deserves a mentor growing up. They’d know their strengths, understand their options, and make decisions with confidence—not out of comparison, pressure, or fear of missing out.
            </p>
            <a href='#contact' className='w-fit px-8 py-3 rounded-full text-base font-semibold bg-[#8B0000] text-white hover:bg-[#7a0000] hover:scale-105 cursor-pointer transition-all duration-300'>
              Start with a free consultation
            </a>
          </div>
          <div className='w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh] order-1 lg:order-2'>
            <img src={Image} alt="Students collaborating with a mentor" className='h-full w-full object-cover' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;