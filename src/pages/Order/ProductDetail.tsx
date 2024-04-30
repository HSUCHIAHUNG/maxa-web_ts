// react原生方法
import React from "react";
import { Link } from "react-router-dom";
// 匯入組件
import Banner from "../../components/Carousel";
import ColorButton from "../../components/common/ColorButton";
import SelectStation from "../../components/Order/selectStation";
// ui kit
import { Breadcrumb } from "@arco-design/web-react";
import { Carousel } from "@arco-design/web-react";
import BorderBox from "../../components/common/BorderBox";
import { Steps } from "@arco-design/web-react";

const ProductDetail: React.FC = () => {
  // ui kit
  const BreadcrumbItem = Breadcrumb.Item;
  const Step = Steps.Step;

  // banner
  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  // 標籤
  const tagList = [
    { tagName: "國旅卡適用" },
    { tagName: "可預約車位" },
    { tagName: "交通票券" },
  ];

  // 乘車路線
  const stationList = [
    { id: 1, station: "屏東總圖", description: "上下車同站點" },
    { id: 2, station: "幸福公園" },
    { id: 3, station: "勝利星村" },
    { id: 4, station: "林森信義路口" },
    { id: 5, station: "屏東轉運站" },
    { id: 6, station: "中央市場" },
    { id: 7, station: "屏東縣民公園" },
    { id: 8, station: "屏東大學民生校區" },
  ];

  return (
    <div
      className={`mx-[12px] mb-[20px] md:mb-[40px] xl:mb-[80px] md:m-[0_auto] md:w-[720px] xl:w-[1200px] `}
    >
      {/* 手機板title */}
      <div className={`flex items-center py-[14px] md:hidden`}>
        <Link
          to={"/order"}
          className={`icon-[iconamoon--arrow-left-2-thin] w-[24px] h-[24px] `}
        ></Link>
        <p className={`m-[0_auto] text-[16px]`}>506A屏市假日觀光公車</p>
      </div>
      {/* 電腦版麵包屑 */}
      <div className={`py-[14px] hidden md:block`}>
        <Breadcrumb
          separator={<span>・</span>}
          className={`hidden md:block pb-[4px]`}
        >
          <BreadcrumbItem>
            <Link to={"/"}>首頁</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={"/order"}>所有商品</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>506A屏市假日觀光公車</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <p className={`text-[20px]`}>
            506A屏市假日觀光公車
            <span className={`text-[14px] text-[#86909C] px-[14px]`}>|</span>
            <span className={`text-[14px] text-[#86909C]`}>
              屏東客運(業者名稱)
            </span>
          </p>
        </div>
      </div>
      {/* banner */}
      <Carousel
        className={`overflow-x-hidden max-w-[1920px] h-[200px] rounded-[16px] md:h-[320px] xl:h-[500px] `}
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>
      {/* 標籤 */}
      <ColorButton tagList={tagList} />
      {/* payment */}
      {/* 商品金額 */}
      <BorderBox className={`rounded-[8px] p-[12px] xl:p-[16px] xl:hidden `}>
        <span
          className={`icon-[solar--bag-4-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
        ></span>
        <div className={`text-[16px] flex justify-between items-end `}>
          <p>商品金額</p>
          <div>
            <div className="text-[12px] text-[#86909C] text-right relative">
              NT${" "}
              <span className="inline-block">
                70
                <span className="absolute border-b border-solid border-[#86909C] w-[48px] right-[-3px] bottom-[8px]"></span>
              </span>
            </div>

            <p>NT$ 50起</p>
          </div>
        </div>
        <div className={`flex gap-[8px]`}>
          <button className={`bg-[#F2F3F5] px-[16px] py-[3px] w-[50%]`}>
            加入購物車
          </button>
          <button
            className={`bg-[#3A57E8] px-[16px] py-[3px] text-[#fff] w-[50%]`}
          >
            立即購買
          </button>
        </div>
      </BorderBox>
      <div className={`md:flex gap-[8px] mb-[20px] md:mb-[40px] xl:mb-[60px] `}>
        {/* 使用方式 */}
        <BorderBox
          className={`rounded-[8px] p-[12px] xl:p-[16px] mt-[8px] md:w-full xl:mt-0 `}
        >
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px] pt-[15px]`}>使用方式</p>
          <p className={`text-[12px] pt-[4px]`}>
            現場請出示電子憑證，於上、下車時感應車機(下車未感應會被鎖卡)
          </p>
        </BorderBox>
        {/* 付款方式 */}
        <BorderBox
          className={`rounded-[8px] p-[12px] xl:p-[16px] mt-[8px] md:w-full xl:mt-0 `}
        >
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px] pt-[15px]`}>付款方式</p>
          <p className={`text-[12px] pt-[4px]`}>信用卡</p>
        </BorderBox>
        {/* 商品金額 (寬度) > 1200 */}
        <BorderBox
          className={`rounded-[8px] p-[12px] w-full hidden xl:block xl:p-[16px]`}
        >
          <span
            className={`icon-[solar--bag-4-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <div className={`text-[16px] flex justify-between items-end `}>
            <p>商品金額</p>
            <div>
              <div className="text-[12px] text-[#86909C] text-right relative">
                NT${" "}
                <span className="inline-block">
                  70
                  <span className="absolute border-b border-solid border-[#86909C] w-[48px] right-[-3px] bottom-[8px]"></span>
                </span>
              </div>

              <p>NT$ 50起</p>
            </div>
          </div>
          <div className={`flex gap-[8px]`}>
            <button className={`bg-[#F2F3F5] px-[16px] py-[3px] w-[50%]`}>
              加入購物車
            </button>
            <button
              className={`bg-[#3A57E8] px-[16px] py-[3px] text-[#fff] w-[50%]`}
            >
              立即購買
            </button>
          </div>
        </BorderBox>
      </div>
      {/* 乘車路線圖 */}
      <div className={`flex items-center gap-[8px] pb-[20px]`}>
        <span
          className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
        ></span>
        <p className={`text-[16px]`}>乘車路線圖</p>
      </div>
      <BorderBox className={`rounded-[8px] p-[16px] md:p-[40px]`}>
        <Steps type="dot" direction="vertical" current={8}>
          {stationList.map((stationItem) => (
            <Step
              key={stationItem.id}
              title={stationItem.station}
              className={`text-16px`}
              description={stationItem.description && stationItem.description}
            />
          ))}
        </Steps>
      </BorderBox>
      {/* 選擇日期與票數 */}
      <SelectStation></SelectStation>
    </div>
  );
};

export default ProductDetail;
