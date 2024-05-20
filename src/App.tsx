import Navbar from './components/Navbar';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import OurClient from './sections/OurClient';
import WhatWeDo from './sections/WhatWeDo';
import WhoWeAre from './sections/WhoWeAre';

function App() {
  return (
    <div className='relative w-full h-full'>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <OurClient />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
