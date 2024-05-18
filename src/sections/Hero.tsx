import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Carousel, Flowbite } from 'flowbite-react';
import banner1 from '../assets/main-banner-1.webp';
import banner2Mb from '../assets/main-banner-2-mobile.webp';
import banner2Dt from '../assets/main-banner-2-desktop.webp';
import banner3Mb from '../assets/main-banner-3-mobile.webp';
import banner3Dt from '../assets/main-banner-3-desktop.webp';
import banner4 from '../assets/main-banner-4.webp';
import Button from '../components/Button';

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    root: {
      leftControl: '',
      rightControl: '',
    },
    indicators: {
      active: {
        off: 'bg-[#869791] hover:bg-[#6f7da9]',
        on: 'bg-[#90a4e4]',
      },
    },
  },
};

const Hero = () => {
  return (
    <section className='pt-12 h-[600px] bg-[#f6f2f9]'>
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slide={false}>
          <div className='w-full custom-container flex flex-col items-center gap-10 sm:gap-0 sm:flex-row-reverse'>
            <img
              src={banner1}
              alt='webqlo-banner-1'
              className='-mt-10 sm:m-0 sm:w-3/5'
            />
            <div className='px-4 flex flex-col gap-3 items-center sm:items-start'>
              <h3 className='text-3xl text-center font-bold leading-10 bg-gradient-to-r from-blue-500 from-10% to-pink-500 to-60% bg-clip-text text-transparent md:text-5xl laptop:w-5/6 laptop:text-6xl sm:text-left sm:leading-tight sm:mb-5'>
                Download Free Report in 60 Secs
              </h3>
              <Button name='Download Now' link='#' />
            </div>
          </div>
          <div className='w-full custom-container'>test 2</div>
          <div className='w-full custom-container'>test 3</div>
          <div className='w-full custom-container'>test 4</div>
        </Carousel>
      </Flowbite>
    </section>
  );
};

export default Hero;
