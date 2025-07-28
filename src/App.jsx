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
import { Helmet } from 'react-helmet';

function App() {

  // const pageTitle = "(un)certain: Personalized Mentorship for Student Success";
  // const pageDescription = "uncertain.in. Mentorship for students aged 11–18. Helping them grow academically, emotionally, and personally — with real guidance, one conversation at a time.";
  const pageTitle = "(un)certain – India’s First Student Mentorship Community (Ages 11–18)";
  const pageDescription = "(un)certain is a mentorship-first community that guides students aged 11–18 through academics, extracurriculars, and portfolio-building. Weekly 1:1 sessions, real exposure, and support that actually works.";
  const canonicalUrl = "https://uncertain.in/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative'>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={<Hero />} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="(un)certain" />
      </Helmet>

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