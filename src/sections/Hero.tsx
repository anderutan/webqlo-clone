import { Carousel } from 'flowbite-react';
import banner1 from '../assets/main-banner-1.webp';
import banner2Mb from '../assets/main-banner-2-mobile.webp';
import banner2Dt from '../assets/main-banner-2-desktop.webp';
import banner3Mb from '../assets/main-banner-3-mobile.webp';
import banner3Dt from '../assets/main-banner-3-desktop.webp';
import banner4 from '../assets/main-banner-4.webp';

const Hero = () => {
  return (
    <section className='pt-16 h-[600px] bg-[#FAFAFA] '>
      <Carousel slide={false}>
        <div className='w-full custom-container flex flex-col items-center gap-20'>
          <img src={banner1} alt='webqlo-banner-1' />
          <div className='px-4 flex flex-col gap-5 items-center'>
            <h3 className='text-3xl text-center font-bold leading-10 bg-gradient-to-r from-blue-500 from-10% to-pink-500 to-60% bg-clip-text text-transparent'>
              Download Free Report in 60 Secs
            </h3>
            <a href='#'>Download Now</a>
          </div>
        </div>
        <div className='w-full custom-container'>test 2</div>
        <div className='w-full custom-container'>test 3</div>
        <div className='w-full custom-container'>test 4</div>
      </Carousel>
    </section>
  );
};

export default Hero;
