import { Steps } from "@arco-design/web-react";
import OrderDetails from "../../components/common/OrderDetails";

function PassengerData() {
  // ui kit
  const Step = Steps.Step;

  return (
    <>
      <div className={` max-w-[900px] m-[0_auto] px-[12px] `}>
        <div className={`xl:flex xl:justify-center`}>
          <Steps
            type="dot"
            current={3}
            className={`hidden pt-[32px] pb-[20px] xl:w-[900px] md:flex `}
          >
            <Step title="1. 選擇日期與票數" className={`!text-[14px]`} />
            <Step title="2. 閱讀契約" />
            <Step title="3. 填寫資料" />
            <Step title="4. 付款" />
          </Steps>
        </div>
        <div
          className={`flex flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px] `}
        >
          {/* 訂單明細 */}
          <OrderDetails />
          <div>
            <div
              className={`py-[20px] px-[16px] border border-[#E5E6EB] border-solid rounded-[16px] md:px-[60px] md:py-[40px] `}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassengerData;
