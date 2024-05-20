import clientList from '../shares/our-client-logo';
import useWindowDimensions from '../shares/useWindowDimensions';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OurClient = () => {
  const { width } = useWindowDimensions();
  const groups = [];
  for (let i = 0; i < clientList.length; i += 10) {
    groups.push(clientList.slice(i, i + 10));
  }

  return (
    <section className='w-full custom-container pt-12 pb-16 lg:pt-20 lg:pb-28'>
      <h2 className='py-8 text-center text-2xl font-bold md:text-3xl'>
        OUR CLIENTS
      </h2>
      {width > 768 ? (
        <div className='grid grid-cols-5 gap-3'>
          {clientList.map((client, index) => (
            <div className='p-2 aspect-[2/1]' key={index}>
              <img src={client.logo} alt={client.client} />
            </div>
          ))}
        </div>
      ) : (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          renderIndicator={CustomIndicator}
        >
          {groups.map((group, index) => (
            <div key={index} className='flex flex-wrap justify-center pb-12'>
              <div className='flex flex-wrap justify-center gap-5'>
                {group.map((client, idx) => (
                  <div key={idx} className='w-[40%] max-h-[100px]'>
                    <img src={client.logo} alt={client.client} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default OurClient;

const CustomIndicator = (onClickHandler, isSelected, index, label) => {
  const defStyle = {
    marginLeft: 10,
    color: '#869791',
    cursor: 'pointer',
    fontSize: '40px',
    lineHeight: 0,
  };
  const style = isSelected
    ? { ...defStyle, color: '#90a4e4' }
    : { ...defStyle };

  return (
    <span
      style={style}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role='button'
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    >
      •
    </span>
  );
};
