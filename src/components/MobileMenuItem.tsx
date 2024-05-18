import { useState } from 'react';
import { type RouteItem } from '../shares/types';
import { MdArrowDropDown } from 'react-icons/md';

const MobileMenuItem = ({ title, href, subroute }: RouteItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full border-b-2 border-b-neutral-700 text-white/50 pl-6 py-2 last:border-none '>
      <a
        className={`text-lg flex items-center gap-3 ${
          isOpen && 'font-semibold text-white'
        }`}
        href={href}
      >
        {title}{' '}
        {subroute && (
          <MdArrowDropDown
            className='text-3xl'
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </a>
      {subroute && isOpen && (
        <div className='flex flex-col py-2 px-3'>
          {subroute.map((route) => (
            <a
              href={route.href}
              key={route.title}
              className='py-[10px] text-sm cursor-pointer'
            >
              {route.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuItem;
