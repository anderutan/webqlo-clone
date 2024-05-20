import IDMVideo from '../assets/video/Integrated_Digital_Marketing.mp4';
import SMMVideo from '../assets/video/Social_Media_Marketing.mp4';
import PMVideo from '../assets/video/Performance_Marketing_Home.mp4';
import SMIVideo from '../assets/video/Social_Media_Intelligence.mp4';
import WDDVideo from '../assets/video/Website_Development.mp4';
import AIVideo from '../assets/video/Big_Data_Analytics.mp4';
import { type Services } from './types';

const whatWeDoList: Services[] = [
  {
    service: 'Integrated Digital Marketing',
    description:
      'We seamlessly integrate  360° channels in your marketing campaigns, ensuring a strategic and smooth customer journey.',
    link: '#',
    video: IDMVideo,
    fromColor: 'from-blue-500',
    viaColor: 'via-fuchsia-500',
  },
  {
    service: 'Social Media Marketing',
    description:
      'We specialize in growing your brand across all social media in Malaysia like Facebook, Instagram, TikTok, and more.',
    link: '#',
    video: SMMVideo,
    fromColor: 'from-rose-700',
    viaColor: 'via-fuchsia-500',
  },
  {
    service: 'Performance Marketing',
    description:
      'Measure every action, from clicks to leads to sales. Achieve remarkable results in your performance marketing journey with us.',
    link: '#',
    video: PMVideo,
    fromColor: 'from-blue-400',
    viaColor: 'via-blue-800',
  },
  {
    service: 'Social Media Intelligence',
    description:
      "Unlock the power of data with our proprietary social media analytics. We delve into the 'why' behind the numbers, crafting successful digital marketing solutions for your brand.",
    link: '#',
    video: SMIVideo,
    fromColor: 'from-blue-500',
    viaColor: 'via-fuchsia-500',
  },
  {
    service: 'Web Design & Development',
    description:
      'Web design company in Malaysia crafting world-class websites for brands. Let us create your stunning, responsive, and SEO-optimized online presence.',
    link: '#',
    video: WDDVideo,
    fromColor: 'from-orange-400',
    viaColor: 'via-purple-900',
  },
  {
    service: 'AI & Data Science',
    description:
      'Adqlo - Our proprietary AI and data technology provides bespoke business analytics. Tap into our  360° analytics for accelerated growth.',
    link: '#',
    video: AIVideo,
    fromColor: 'from-blue-500',
    viaColor: 'via-fuchsia-500',
  },
];

export default whatWeDoList;
