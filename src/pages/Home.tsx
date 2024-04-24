import { Carousel } from "@arco-design/web-react";
import Banner from "../components/Carousel";
import News from "../components/News";
import Product from "../components/product";
import PhotoTitle from "../components/PhotoTitle";
import CityCard from "../components/City";

function Home() {
  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  const newsList = [
    {
      url: "https://tabiiro.travel/img/articles/21032501/main.jpg",
      title: "櫻花季優惠來嘍!!",
      date: "活動至 2024/12/26 23;59 止",
    },
    {
      url: "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_144240/20230519001422_pi5Eo/jpg",
      title: "暑假暢玩沖繩",
      date: "活動至 2024/12/26 23;59 止",
    },
    {
      url: "https://pic.amwaynet.com.tw/PR/ishare/article/2023061903d50269c264453eac3e8ce071016b06.jpg",
      title: "暑假暢玩沖繩",
      date: "活動至 2024/12/26 23;59 止",
    },
  ];

  const productList = [
    {
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
    {
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
    {
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
  ];

  const cityList = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
  ];

  return (
    <div>
      <Carousel className={`overflow-x-hidden max-w-[1920px] `} autoPlay={true}>
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>
      <div className=" w-[90%] m-[0_auto] pt-[76px] pb-[120px] ">
        <div className=" w-[100%] max-w-[1200px] m-[0_auto] flex flex-col gap-[80px] ">
          {/* 最新消息 */}
          <div>
            <PhotoTitle text="最新消息" subtitle="Latest News" />
            <div className=" flex gap-[20px] flex-col md:flex-row">
              {newsList.map((newsList) => (
                <News
                  url={newsList.url}
                  title={newsList.title}
                  date={newsList.date}
                />
              ))}
            </div>
          </div>
          {/* 熱門商品 */}
          <div>
            <PhotoTitle text="熱門商品" subtitle="Popular product" />
            <div className=" flex gap-[20px] flex-col md:flex-row ">
              {productList.map((productItem) => (
                <Product
                  url={productItem.url}
                  title={productItem.title}
                  money={productItem.money}
                  tag={productItem.tag}
                />
              ))}
            </div>
          </div>
          {/* 推薦城市 */}
          <div>
            <PhotoTitle text="推薦城市" subtitle="Recommended Cities" />
            <div className="flex gap-[20px] flex-col md:flex-row">
              {cityList.map((cityItem) => (
                <CityCard url={cityItem.url} title={cityItem.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
