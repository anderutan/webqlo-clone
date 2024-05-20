import WhatWeDoCard from '../components/WhatWeDoCard';
import whatWeDoList from '../shares/what-we-do';

const WhatWeDo = () => {
  return (
    <section className='w-full custom-container pt-20 pb-28'>
      <h2 className='text-text-primary text-center text-xl font-bold'>
        WHAT WE DO
      </h2>
      <div className='w-full max-md:flex max-md:flex-col max-md:items-center md:grid md:grid-cols-2 '>
        {whatWeDoList.map((service, index) => (
          <WhatWeDoCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
