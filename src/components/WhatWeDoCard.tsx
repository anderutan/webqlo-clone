import { type Services } from '../shares/types';
import ReactPlayer from 'react-player';

const WhatWeDoCard = ({
  service,
  description,
  link,
  video,
  fromColor,
  viaColor,
}: Services) => {
  return (
    <div className='w-[90%] max-w-[450px] md:justify-self-center'>
      <ReactPlayer
        url={video}
        playing
        loop
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
      <a href={link}>
        <h4
          className={`text-xl mb-2 font-bold bg-gradient-to-r ${fromColor} from-10% ${viaColor} via-30% to-black to-70% bg-clip-text text-transparent`}
        >
          {service}
        </h4>
        <p className='mb-4'>{description}</p>
      </a>
    </div>
  );
};

export default WhatWeDoCard;
