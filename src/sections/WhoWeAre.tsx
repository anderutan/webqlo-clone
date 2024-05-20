import Button from '../components/Button';

const WhoWeAre = () => {
  return (
    <section className='bg-zinc-100 pt-12 pb-16 px-4 flex flex-col items-center lg:pt-20 lg:pb-28'>
      <h2 className='text-xl font-bold py-8 md:text-3xl'>WHO WE ARE</h2>
      <p className='text-center leading-8 pb-16 md:text-2xl md:w-5/6 md:leading-10'>
        We're a full-fledged, data-driven digital marketing agency in Malaysia
        that can meet your business needs through creativity backed with
        insights.
      </p>
      <Button name='Discover More' link='#' />
    </section>
  );
};

export default WhoWeAre;
