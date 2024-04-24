import React from "react";
import headerText from "@/assets/images/header/header_text.svg";

const Header: React.FC = () => {
  return (
    <section className="bg-[#fff] w-[100%] h-[56px] px-[20px] flex justify-between items-center">
      <div className="flex gap-[4px] ">
        <span className="icon-[solar--box-minimalistic-bold-duotone] w-[24px] h-[24px] text-[#4E5969]"></span>
        <img src={headerText} alt="MAXA" />
      </div>
      <div className=" flex items-center gap-[24px] ">
        <span className="icon-[solar--earth-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer	 hover:text-[#3A57E8]"></span>
        <span className="icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer text-[#4E5969] hover:text-[#3A57E8]"></span>
        <span className="icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer	 hover:text-[#3A57E8]"></span>
        <button className="text-[#fff] bg-[#3A57E8] p-[5px_16px] rounded-[100px] ">
          登入/註冊
        </button>
      </div>
    </section>
  );
};

export default Header;
