import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../assets/webqlo-logo.webp';
import { motion } from 'framer-motion';
import useWindowDimensions from '../shares/useWindowDimensions';
import routes from '../shares/routes';
import MobileMenuItem from './MobileMenuItem';
import DesktopMenuItem from './DesktopMenuItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <nav className='fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-white z-30'>
      <div className='w-full flex items-center py-1 px-4 z-10 laptop:px-11 laptop:justify-between'>
        {width < 1280 && (
          <Hamburger toggled={isOpen} size={25} toggle={setIsOpen} />
        )}
        <a href='#' className='mx-auto laptop:mx-0'>
          <img src={logo} alt='Webqlo logo' className='h-9' />
        </a>
        <div className='max-laptop:hidden flex gap-10 items-center text-nowrap'>
          {routes.map((route) => (
            <DesktopMenuItem {...route} />
          ))}
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: '-200px' }}
          animate={{ x: '0px' }}
          transition={{ duration: 0.2 }}
          className='w-full h-screen bg-zinc-950 px-12 pt-5 flex flex-col'
        >
          {routes.map((route) => (
            <MobileMenuItem {...route} />
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
