// react原生方法
import React from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// import { orderActions } from "../../stores/order";
import { RootState } from "../../stores/index";
// 匯入組件
import Banner from "../../components/Carousel";
import ColorButton from "../../components/common/ColorButton";
import SelectStation from "../../components/Order/selectStation";
import SelectTime from "../../components/Order/SelectTime";

// ui kit
import { Breadcrumb } from "@arco-design/web-react";
import { Carousel } from "@arco-design/web-react";
import BorderBox from "../../components/common/BorderBox";
import { Steps } from "@arco-design/web-react";
import { Tabs, Typography } from "@arco-design/web-react";

const ProductDetail: React.FC = () => {
  // redux(方法調用)
  // const dispatch = useAppDispatch();
  // redux(切換tab全域狀態)
  // const switchTab = (tab: string) => {
  //   dispatch(orderActions.switchTab(tab));
  // };
  // redux(tab狀態)
  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );
  // ui kit
  const BreadcrumbItem = Breadcrumb.Item;
  const TabPane = Tabs.TabPane;
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
      <div className="xl:w-[760px]">
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
        {/* 標題 */}
        <div className={` flex gap-[8px] py-[20px] md:pt-[40px] xl:pt-[60px]`}>
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px] md:text-[20px]`}>選擇日期與票數</p>
        </div>
        <Tabs defaultActiveTab="1" type="card-gutter" className={``}>
          <TabPane key="1" title="單程票">
            <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
          </TabPane>
          <TabPane key="2" title="來回票">
            <Typography.Paragraph>
              {/* 1. 選擇站點、日期 */}
              <SelectStation></SelectStation>
              {/* 2. 選擇去回程時間 */}
              <SelectTime></SelectTime>
            </Typography.Paragraph>
          </TabPane>
        </Tabs>
      </div>
      {/* 商品說明 */}
      <div>
        {/* 標題 */}
        <div
          className={`flex items-center gap-[8px] py-[20px] md:pt-[40px] xl:pt-[60]`}
        >
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px]`}>商品說明</p>
        </div>
        <p className=" text-[13px] leading-snug">
          綠世界曾多次榮獲〔優良農場體驗評鑑
          第１名〕，更保留了天然的原始森林及美麗湖泊，全園皆使用節能減碳的綠建築，不需冷氣即能冬暖夏涼，採用生態工法使雨水能重覆循環、滋養大地，園內並復育許多瀕臨絕種的台灣特有種，如：台灣萍蓬草、台灣山羌等，許多國內外學者都曾蒞臨觀摩。
        </p>
        <div className={`flex gap-[8px] pt-[20px]`}>
          <p>￮</p>
          <p className={`text-[16px]`}>日月潭纜車</p>
        </div>
        <p className={`pt-[8px] pl-[20px]`}>
          全長約1877.15公尺，跨越海拔1044公尺的卜吉山，來回車程時間約16分鐘，讓您輕鬆悠遊日月潭，能夠俯瞰日月潭360度的湖光山色，若水氣充足，還有機會見到霧濛濛如仙境般的夢幻奇景。保證讓您飽覽美景、盡收眼底，是來訪日月潭不可錯過的旅遊方式。
        </p>
        <div className={`flex gap-[8px] pt-[20px]`}>
          <p>￮</p>
          <p className={`text-[16px]`}>日月潭纜車</p>
        </div>
        <p className={`pt-[8px] pl-[20px]`}>
          全長約1877.15公尺，跨越海拔1044公尺的卜吉山，來回車程時間約16分鐘，讓您輕鬆悠遊日月潭，能夠俯瞰日月潭360度的湖光山色，若水氣充足，還有機會見到霧濛濛如仙境般的夢幻奇景。保證讓您飽覽美景、盡收眼底，是來訪日月潭不可錯過的旅遊方式。
        </p>
        <div className={`flex gap-[8px] pt-[20px]`}>
          <p>￮</p>
          <p className={`text-[16px]`}>日月潭纜車</p>
        </div>
        <p className={`pt-[8px] pl-[20px]`}>
          全長約1877.15公尺，跨越海拔1044公尺的卜吉山，來回車程時間約16分鐘，讓您輕鬆悠遊日月潭，能夠俯瞰日月潭360度的湖光山色，若水氣充足，還有機會見到霧濛濛如仙境般的夢幻奇景。保證讓您飽覽美景、盡收眼底，是來訪日月潭不可錯過的旅遊方式。
        </p>
        <div className={`pt-[20px]`}>
          <img
            className=" h-[200px] rounded-2xl md:h-[420px]"
            src="https://via.placeholder.com/1720x420"
          />
          <p className={`text-[16px] pt-[4px]`}>
            時尚城中城線｜高鐵左營站往返墾丁巴士，輕鬆直達國境之南
          </p>
        </div>
        <div className={`pt-[20px]`}>
          <img
            className=" h-[200px] rounded-2xl md:h-[420px]"
            src="https://via.placeholder.com/1720x420"
          />
          <p className={`text-[16px] pt-[4px]`}>
            綠世界生態農場｜採用生態工法使雨水能重覆循環、滋養大地，園內並復育許多瀕臨絕種的台灣特有種，如：台灣萍蓬草、台灣山羌等，許多國內外學者都曾蒞臨觀摩。
          </p>
        </div>
        <div className={`pt-[20px]`}>
          <img
            className=" h-[200px] rounded-2xl md:h-[420px]"
            src="https://via.placeholder.com/1720x420"
          />
          <p className={`text-[16px] pt-[4px]`}>
            豐后線｜中社觀光花市，中社自產栽植的各種花卉任君採，全年皆有繽紛花海盛開,在花香中洗去所有的煩燥與疲憊，在群花中展現自我的風采!
          </p>
        </div>
        <div
          className={`flex items-center gap-[8px] py-[20px] md:pt-[40px] xl:pt-[60]`}
        >
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px]`}>使用說明</p>
        </div>
        <div className={`flex gap-[8px] pb-[20px]`}>
          <p>￮</p>
          <p className={`text-[16px]`}>
            此為電子憑證(QR Code)，不另外寄送紙本票券。
          </p>
        </div>
        <div className={`flex gap-[8px] pb-[20px]`}>
          <p>￮</p>
          <p className={`text-[16px]`}>
            付款完成後，請至您的信箱收取【付款成功通知信】，憑信件內附之QR
            Code進行核銷；或至網站的【會員中心】→【我的訂單】→【已付款】分頁 →
            點選【查看】內附之 QR Code 進行核銷。
          </p>
        </div>
        <div className={`flex flex-col gap-[8px] pt-[20px]`}>
          <div className={`flex gap-[8px] text-[16px]`}>
            <p>￮</p>
            <p>核銷方式：</p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>
              台灣好行獅山線一日券：上車時前請先向司機出示產品電子憑證(QR
              code)來核銷；若已核銷過，請出示當日核銷畫面供司機確認以享一日票券權益。
            </p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>
              綠世界生態農場：入館前請先至園區剪票口出示產品電子憑證(QR
              code)供工作人員來核銷。
            </p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>
              北埔商圈消費券：至消費券合作店家示產品電子憑證(QR
              code)供工作人員來核銷。
            </p>
          </div>
        </div>
        <div
          className={`flex items-center gap-[8px] pt-[20px] pb-[16px] md:pt-[40px] xl:pt-[60]`}
        >
          <span
            className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
          ></span>
          <p className={`text-[16px]`}>注意事項</p>
        </div>
        <div className={`flex flex-col gap-[8px]`}>
          <div className={`flex gap-[8px]`}>
            <p>￮</p>
            <p className={`text-[16px]`}>系統訂單注意事項：</p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>訂單成立一小時內要完成付款，超過付款期限系統會自動取消訂單。</p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>系統無提供修改訂單功能，如欲變更數量，需退票重訂。</p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>任一商品經兌換使用後，恕不接受退款退費。</p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>
              凡商品未使用，請至「本網站」會員中心→我的訂單(已付款訂單)→申請退款作業。
            </p>
          </div>
          <div className={`flex gap-[8px] text-[16px] pl-[20px]`}>
            <p>￮</p>
            <p>
              如有系統或訂單問題，請於客服時間：週一~週五(不含國定例假日)上午9:00~12:00
              / 下午13:00~17:00(中午休息一小時)，來電03-5910052。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
