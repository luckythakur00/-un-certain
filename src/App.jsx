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

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative'>
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