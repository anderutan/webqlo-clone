type Props = {
  name: string;
  link: string;
  style?: string;
};

const Button = ({ name, link, style }: Props) => {
  return (
    <a
      href={link}
      className='px-7 py-2 font-bold bg-btn-primary text-white border-b-[3px] border-r-[3px] border-white shadow-[3px_3px_0_0_#1d202f] ease-in-out duration-500 hover:bg-btn-hover hover:text-text-primary hover:shadow-[3px_3px_0_0_#A5B4FC] laptop:px-12'
    >
      {name}
    </a>
  );
};

export default Button;
