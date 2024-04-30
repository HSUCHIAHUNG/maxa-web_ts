// react原生方法
import React, { ReactNode } from "react";
// redux
import { useSelector } from "react-redux";
import { orderActions } from "../../stores/order";
import { useAppDispatch, RootState } from "../../stores/index";

interface TabProps {
  children?: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  // redux
  const dispatch = useAppDispatch();
  const switchTab = () => {
    dispatch(orderActions.switchTab("oneWayticket"));
  };
  const order = useSelector((state: RootState) => state.order.tab);
  console.log(order);

  return (
    <>
      {/* tab標題 */}
      <div className={` flex gap-[8px] py-[20px] md:pt-[40px] xl:pt-[60px]`}>
        <span
          className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
        ></span>
        <p className={`text-[16px] md:text-[20px]`}>選擇日期與票數</p>
      </div>
      <div>
        <ul className={`flex  gap-[4px] `}>
          <li
            onClick={switchTab}
            className={`px-[16px] py-[7px] border border-solid border-[#E5E6EB]`}
          >
            單程票
          </li>
          <li
            className={`px-[16px] py-[7px] border border-solid border-[#E5E6EB]`}
          >
            來回票
          </li>
        </ul>
        <div
          className={`border border-solid border-[#E5E6EB] rounded-[0_0_8px_8px] `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Tab;
