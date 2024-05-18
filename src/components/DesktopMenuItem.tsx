import { useState } from 'react';
import { type RouteItem } from '../shares/types';
import { MdArrowDropDown } from 'react-icons/md';

const DesktopMenuItem = ({ title, href, subroute }: RouteItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full text-white/50 py-2 ${
          !isOpen && 'hover:text-white'
        } hover:font-medium`}
      >
        <a
          className={`w-full text-sm flex items-center ${
            isOpen && 'font-semibold text-white'
          }`}
          href={href}
        >
          {title}{' '}
          {subroute && (
            <MdArrowDropDown
              className='text-2xl relative'
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </a>
        {subroute && isOpen && (
          <div className='absolute top-[48px] flex flex-col py-2 px-5 z-20 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900'>
            {subroute.map((route) => (
              <a
                href={route.href}
                key={route.title}
                className='py-[10px] text-sm cursor-pointer hover:text-white'
              >
                {route.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DesktopMenuItem;
