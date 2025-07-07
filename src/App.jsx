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

  // Todo:-
  // 1.✅ Add another SVG in the Help Section.
  // 2.✅ Do something about contact page alert. (Remove Alert.jsx and do something else instead).
  // 3.✅ Header Spaceing.
  // 4.✅ Do something about Home Page.
  // 5.✅ Change the Meetuncertain Page and Our Approach Page.
  // 6.✅ Change Footer (Basically Increase the footer size)
  // 7.✅ Add Testimonial in the website
  // 8.✅ Add favicon in the top of search header.
  // 9. Handle the Contact Page, Like If I'm getting an alert for Error and if the user didn't remove it and still fill the form, so after filling the form user isn't able to see the Success form. Check it out once.

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