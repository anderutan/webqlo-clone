import MetaLogo from '../assets/mbp-badge-no-hover.webp';
import GoogleLogo from '../assets/PartnerBadgeClickable.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='py-6 border-t-2 text-sm '>
      <div className='custom-container relative'>
        <button
          href='#'
          className='flex gap-1 items-center text-base px-4 py-2 text-white bg-indigo-800 hover:bg-indigo-400 absolute -top-16 right-0 '
        >
          <IoMdMail />
          Subscribe!
        </button>
      </div>
      <div className='custom-container'>
        <div className='flex gap-5 justify-center md:justify-start'>
          <a href='#'>Terms and Conditions</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Refund Policy</a>
        </div>
        <div className='flex flex-col items-center gap-2 pt-5 md:grid md:grid-cols-3 md:pt-0'>
          <div className='flex gap-5 md:col-start-2 md:justify-self-center'>
            <a href='#'>
              <FaFacebookF className='h-7 text-[#999] hover:text-text-primary' />
            </a>
            <a href='#'>
              <FaInstagram className='h-7 w-5 text-[#999] hover:text-text-primary' />
            </a>
            <a href='#'>
              <FaLinkedinIn className='h-7 w-5 text-[#999] hover:text-text-primary' />
            </a>
          </div>
          <div className='flex items-center gap-3 md:col-start-3 md:justify-self-end'>
            <p>Partners with:</p>
            <a href='#'>
              <img
                src={MetaLogo}
                alt='Facebook Partner Logo'
                className='w-16'
              />
            </a>
            <a href='#'>
              <img
                src={GoogleLogo}
                alt='Google Partner Logo'
                className='w-16'
              />
            </a>
          </div>
          <p className='md:col-start-1 md:row-start-1'>
            Copyright © 2024 WEBQLO Sdn. Bhd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
