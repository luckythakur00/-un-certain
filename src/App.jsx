import { useLayoutEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import FindYourFit from './components/FindYourFit';
import Header from './components/Header';
import Help from './components/Help';
import Hero from './components/Hero';
import MeetUncertain from './components/MeetUncertain';
import OurFounder from './components/OurFounder';

function App() {
  const [showReactSite, setShowReactSite] = useState(false);

  useLayoutEffect(() => {
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;

    if (isTablet) {
      setShowReactSite(true);
    } else {
      window.location.href = 'https://rhythmkukreja05.wixsite.com/website';
    }
  }, []);

  if (!showReactSite) return null;

  return (
    <div className='relative'>
      <Header />
      <div className='mt-20'>
        <Hero />
        <MeetUncertain />
        <Help />
        <FindYourFit />
        <OurFounder />
        <Contact />
      </div>
    </div>
  );
}

export default App;