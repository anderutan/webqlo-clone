import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../assets/webqlo-logo.webp';
import route from '../shares/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='absolute top-0 left-0 right-0'>
      <div className='laptop:hidden w-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-white flex items-center py-1 px-4 z-10'>
        <Hamburger toggled={isOpen} size={25} toggle={setIsOpen} />
        <img src={logo} alt='Webqlo logo' className='h-9 mx-auto' />
      </div>
      <div className='w-full h-screen bg-zinc-950'></div>
    </div>
  );
};

export default Navbar;
