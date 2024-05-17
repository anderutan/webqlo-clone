import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../assets/webqlo-logo.webp';
import routes from '../shares/routes';
import MenuItem from './MenuItem';
import { RouteItem } from '../shares/types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='absolute top-0 left-0 right-0'>
      <div className='laptop:hidden w-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-white flex items-center py-1 px-4 z-10'>
        <Hamburger toggled={isOpen} size={25} toggle={setIsOpen} />
        <a href='#' className='mx-auto'>
          <img src={logo} alt='Webqlo logo' className='h-9' />
        </a>
      </div>
      {isOpen && (
        <div className='w-full h-screen bg-zinc-950 px-12 pt-5 flex flex-col'>
          {routes.map((route) => (
            <MenuItem {...route} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
