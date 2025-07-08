// import { useEffect } from 'react';
// import './App.css';
// import Contact from './components/Contact';
// import FindYourFit from './components/FindYourFit';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Help from './components/Help';
// import Hero from './components/Hero';
// import MeetUncertain from './components/MeetUncertain';
// import OurFounder from './components/OurFounder';
// import Testimonial from './components/Testimonial';

// function App() {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className='relative'>
//       <Header />
//       <div className='mt-16 md:mt-20'>
//         <Hero />
//         <MeetUncertain />
//         <Help />
//         <FindYourFit />
//         <OurFounder />
//         <Testimonial />
//         <Contact />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;






import { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import FindYourFit from './components/FindYourFit';
import Footer from './components/Footer';
import Header from './components/Header';
import Help from './components/Help';
import Hero from './components/Hero';
import MeetUncertain from './components/MeetUncertain';
import OurFounder from './components/OurFounder';
import Testimonial from './components/Testimonial';
import HeroImage from './assets/Image2.jpeg'; // Step 2: Import your main hero image for the social media tag
import { Helmet } from 'react-helmet';

function App() {

  // Step 3: Define the single, authoritative SEO metadata for your homepage
  const pageTitle = "(un)certain: Personalized Mentorship for Student Success";
  const pageDescription = "At (un)certain, we believe every student deserves a mentor. Discover your strengths and make confident decisions with our personalized guidance. Start with a free consultation.";
  const canonicalUrl = "https://uncertain.in/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative'>
      {/* Step 4: Add the single Helmet component here. This will now control the entire page title. */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={HeroImage} /> {/* Use the imported hero image */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="(un)certain" />
      </Helmet>

      {/* The rest of your UI remains exactly the same */}
      <Header />
      <div className='mt-16 md:mt-20'>
        <Hero />
        <MeetUncertain />
        <Help />
        <FindYourFit />
        <OurFounder />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;