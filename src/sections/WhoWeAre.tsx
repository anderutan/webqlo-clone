import Button from '../components/Button';

const WhoWeAre = () => {
  return (
    <section className='bg-zinc-100 pt-12 pb-16 flex flex-col items-center '>
      <h2 className='text-xl font-bold py-8 md:text-2xl'>WHO WE ARE</h2>
      <p className='text-center leading-8 pb-16 md:text-xl md:w-3/6 md:leading-10'>
        We're a full-fledged, data-driven digital marketing agency in Malaysia
        that can meet your business needs through creativity backed with
        insights.
      </p>
      <Button name='Discover More' link='#' />
    </section>
  );
};

export default WhoWeAre;
