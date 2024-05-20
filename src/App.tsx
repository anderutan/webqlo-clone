import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';

function App() {
  return (
    <div className='relative w-full h-full'>
      <Navbar />
      <Hero />
      <WhatWeDo />
    </div>
  );
}

export default App;
