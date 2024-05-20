import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import WhoWeAre from './sections/WhoWeAre';

function App() {
  return (
    <div className='relative w-full h-full'>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
    </div>
  );
}

export default App;
