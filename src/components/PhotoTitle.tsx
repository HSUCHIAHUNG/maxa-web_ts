import React  from 'react'

interface CarouseProps {
  text: string,
  subtitle: string,
}

const Carousel:React.FC<CarouseProps> = (props) => {
    const { text, subtitle } = props;
    return (
      <div className=' flex gap-[12px] items-center pb-[18px]'>
        <p className=' text-[20px] '>{text}</p>
        <div className='h-[16px] border-r border-solid border-[#E5E6EB]'></div>
        <p className=' text-[14px] text-[#86909C] '>{subtitle}</p>
      </div>
    );
  }

export default Carousel;