// 元生方法
import React from "react";
// 匯入組件
import Mask from "../common/Mask";
// 匯入圖片
import SeatsBg from "../../assets/images/order/img_bus.png";

const SetSeat: React.FC = () => {
  /** @func 控制diaLog開關(全域狀態) */
  const dialogToggle = () => {
    console.log(123);
  };

  return (
    <>
      <Mask></Mask>
      <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 overflow-auto bg-[#fff] md:left-auto md:w-[368px]">
        <div className=" h-[100vh] w-[298px] md:w-full">
          {/* 開關按鈕 */}
          <div className="flex justify-between w-full px-[16px] py-[12px] ">
            <p>手動劃位</p>
            <p
              onClick={dialogToggle}
              className="icon-[ri--close-fill] cursor-pointer h-[16px] w-[16px] mr-[16px] self-end  "
            ></p>
          </div>
          {/* 公車座位圖內容 */}
          <div className=" relative w-[298px] h-[666px] md:m-[0_auto]">
            <img src={SeatsBg} alt="背景圖" className={``} />
          </div>
          {/* 下方已選擇座位 & 按鈕 */}
        
        </div>
      </div>
    </>
  );
};

export default SetSeat;
