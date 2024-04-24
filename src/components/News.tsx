import React from "react";
import arrow from "@/assets/images/homePage/arrow.svg";

interface NewsProps {
  url: string;
  title: string;
  date: string;
}

const Carousel: React.FC<NewsProps> = (props) => {
  return (
    <div className="relative w-[100%] md:max-w-[370px] ">
      <img
        src={props.url}
        alt={props.title}
        key={props.title}
        className=" w-[100%] h-[160px] rounded-[8px] object-cover"
      />
      <div className=" w-[100%] absolute bottom-0 flex justify-between items-center px-[16px] pb-[9px] text-[#fff]">
        <div className=" text-[16px] ">
          <p>{props.title}</p>
          <p>{props.date}</p>
        </div>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Carousel;
