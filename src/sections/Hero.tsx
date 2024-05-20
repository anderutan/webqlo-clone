import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Carousel, Flowbite } from 'flowbite-react';
import banner1 from '../assets/main-banner-1.webp';
import banner2Mb from '../assets/main-banner-2-mobile.webp';
import banner2Dt from '../assets/main-banner-2-desktop.webp';
import banner3Mb from '../assets/main-banner-3-mobile.webp';
import banner3Dt from '../assets/main-banner-3-desktop.webp';
import banner4 from '../assets/main-banner-4.webp';
import Button from '../components/Button';
import useWindowDimensions from '../shares/useWindowDimensions';

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
  const { width } = useWindowDimensions();
  return (
    <section className='pt-12 h-[600px] bg-[#f6f2f9]'>
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slide={false}>
          {/* Banner 1 */}
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
          {/* Banner 2 */}
          <div
            className='w-full h-full'
            style={{
              background: `url(${width < 1025 ? banner2Mb : banner2Dt})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className=' flex flex-col justify-center items-center gap-7 mt-10 text-center text-white px-5 tablet:h-full tablet:mt-0 tablet:w-2/5 tablet:items-start tablet:text-left tablet:ml-auto tablet:mr-36'>
              <h3 className='text-xl uppercase sm:text-2xl tablet:text-3xl'>
                <span className='text-2xl font-bold sm:text-3xl tablet:text-4xl'>
                  360° Data-Driven
                </span>
                <br />
                Digital Marketing Solutions
              </h3>
              <p className='text-lg sm:text-xl tablet:text-2xl'>
                We are experts in providing creative solutions backed by
                data-driven insights.
              </p>
              <Button
                name='Discover More'
                link='#'
                style='bg-white text-black border-[#284b8b] shadow-[3px_3px_0_0_#ffffff]'
              />
            </div>
          </div>
          {/* Banner 3 */}
          <div
            className='w-full h-full'
            style={{
              background: `url(${width < 1025 ? banner3Mb : banner3Dt})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className=' flex flex-col justify-center items-center gap-7 mt-10 text-center text-[#294995] px-5 tablet:h-full tablet:mt-0 tablet:w-2/5 tablet:items-start tablet:text-left tablet:mr-auto tablet:ml-36'>
              <h3 className='text-xl uppercase sm:text-2xl tablet:text-3xl'>
                <span className='text-2xl font-bold sm:text-3xl tablet:text-4xl'>
                  Social Media
                </span>
                <br />
                Intelligence
              </h3>
              <p className='text-lg sm:text-xl tablet:text-2xl'>
                Power your digital marketing effort with Adqlo, our proprietary
                social media intelligence platform.
              </p>
              <Button name='Discover More' link='#' style='border-[#46d2f0]' />
            </div>
          </div>
          {/* Banner 4 */}
          <div className='w-full h-full  bg-[#101113] flex justify-center items-center'>
            <div className='relative'>
              <img
                src={banner4}
                alt='webqlorians-banner'
                className='w-full max-w-[980px] max-h-[567px] relative py-10 sm:pb-20'
              />
              <div className='absolute left-3 -bottom-10 sm:bottom-10'>
                <h3 className='mb-5 text-xl text-white sm:text-2xl'>
                  MEET THE <br />
                  <span className='text-3xl font-semibold sm:text-4xl'>
                    #WEBQLORIANS
                  </span>
                </h3>
                <Button
                  name='Discover More'
                  link='#'
                  style='bg-white text-black border-[#101113] shadow-[3px_3px_0_0_#ffffff]'
                />
              </div>
            </div>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
};

export default Hero;
