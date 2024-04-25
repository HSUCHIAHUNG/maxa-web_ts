import React from "react";
import { Input, Menu } from "@arco-design/web-react";
import { useState } from "react";
import headerText from "@/assets/images/header/header_text.svg";
import memberIcon from "@/assets/images/header/memberAvatar.svg";

interface isOpenType {
  search: boolean;
  list: boolean;
  memberList: boolean;
  langue: boolean;
  cart: boolean;
}

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState({
    search: false,
    list: false,
    memberList: false,
    langue: false,
    cart: false,
  });
  const { search, list, memberList, langue, cart } = isOpen;

  // ui kit
  const InputSearch = Input.Search;
  const MenuItem = Menu.Item;
  const SubMenu = Menu.SubMenu;

  const toggleOpen = (key: keyof isOpenType) => {
    setOpen((prev: isOpenType) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const changeSearch = () => {
    if (isOpen.memberList) toggleOpen("memberList");
    if (isOpen.list) toggleOpen("list");
    toggleOpen("search");
  };

  const changeList = () => {
    if (isOpen.memberList) toggleOpen("memberList");
    toggleOpen("list");
  };

  const changeLangueList = () => {
    if (isOpen.memberList) toggleOpen("memberList");
    if (isOpen.cart) toggleOpen("cart");

    toggleOpen("langue");
  };

  const changeMemberList = () => {
    if (isOpen.list) toggleOpen("list");
    if (isOpen.langue) toggleOpen("langue");
    if (isOpen.cart) toggleOpen("cart");
    toggleOpen("memberList");
  };

  const changeCartList = () => {
    if (isOpen.memberList) toggleOpen("memberList");
    if (isOpen.langue) toggleOpen("langue");
    toggleOpen("cart");
  };
  return (
    <>
      <section className="relative bg-[#fff] w-[100%] h-[56px] py-[14px] px-[12px] md:pl-[20px] md:pr-[32px] flex justify-between items-center">
        <div className={`flex gap-[4px] items-center ${search && "hidden"}`}>
          <span className="icon-[solar--box-minimalistic-bold-duotone] w-[24px] h-[24px] text-[#4E5969]"></span>
          <img src={headerText} alt="MAXA" className="w-[66px] h-[14px]" />
          <InputSearch
            className={` w-[265px] h-[32px] hidden md:block `}
            placeholder="搜尋行程"
          />
        </div>

        {/* 手機版 */}
        <div className={`flex gap-[24px] ${search && "hidden"}`}>
          <span
            onClick={changeSearch}
            className={`icon-[solar--magnifer-bold-duotone] md:hidden w-[24px] h-[24px] text-[#4E5969] cursor-pointer hover:text-[#3A57E8] ${
              search && "hidden"
            }`}
          ></span>
          <div onClick={changeList} className="md:hidden group">
            <span
              className={`icon-[solar--hamburger-menu-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer ${
                list && "text-[#3A57E8]"
              }`}
            ></span>
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px]  ${
                list ? "block" : "hidden"
              }`}
            ></div>
          </div>
          <div onClick={changeLangueList} className=" group hidden md:block ">
            <span className="icon-[solar--earth-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8]"></span>
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] ${
                langue ? "block" : "hidden"
              }`}
            ></div>
          </div>
          <div onClick={changeCartList} className={`group hidden md:block `}>
            <span
              className={`icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer text-[#4E5969] group-hover:text-[#3A57E8]`}
            ></span>
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] ${
                cart ? "block" : "hidden"
              }`}
            ></div>
          </div>
          <div onClick={changeMemberList}>
            <img
              src={memberIcon}
              alt="會員"
              className={` w-[24px] h-[24px] cursor-pointer ${
                list && "text-[#3A57E8]"
              }`}
            />
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] ${
                memberList ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
        {/* 手機版搜尋框 */}
        <div
          className={`w-[100%] flex justify-end items-center gap-[12px] ${
            search ? "block" : "hidden"
          }`}
        >
          <span
            onClick={changeSearch}
            className={`icon-[solar--arrow-left-outline] w-[24px] h-[24px] text-[#4E5969]`}
          ></span>
          <InputSearch
            className={` w-[265px] h-[32px] `}
            placeholder="搜尋行程"
          />
        </div>
      </section>
      {/* 電腦版切換語系選單 */}
      <div
        className={`menu-demo ${
          langue ? "block" : "hidden"
        } absolute z-[999] w-[100%] md:w-[124px] md:h-[80px] top-[56px] md:top-[60px] md:right-[120px]`}
      >
        <Menu
          className={` `}
          // defaultOpenKeys={["25"]}
          // defaultSelectedKeys={["0_1"]}
        >
          <MenuItem key="25" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span>繁體中文</span>
            </div>
          </MenuItem>
          <MenuItem key="26" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span>English</span>
            </div>
          </MenuItem>
        </Menu>
      </div>
      {/* 手機版隱藏選單 */}
      <div
        className={`menu-demo ${
          list ? "block" : "hidden"
        } absolute z-[999] w-[100%] top-[56px]`}
      >
        <Menu
          style={{ width: "100%", height: "100%" }}
          // defaultOpenKeys={["0"]}
          // defaultSelectedKeys={["0_1"]}
        >
          <MenuItem key="a" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span
                className={`icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer text-[#4E5969] group-hover:text-[#3A57E8]`}
              ></span>
              <span>購物車</span>
            </div>
          </MenuItem>
          <MenuItem key="b" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span className="icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8]"></span>
              <span>訂單查詢</span>
            </div>
          </MenuItem>
          <SubMenu
            key="c"
            title={
              <div className=" flex items-center gap-[16px]">
                <span className="icon-[solar--earth-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer"></span>
                <span>切換語言</span>
              </div>
            }
          >
            <MenuItem key="0_0">繁體中文</MenuItem>
            <MenuItem key="0_1">English</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      {/* 手機版會員選單 */}
      <div
        className={`menu-demo ${
          memberList ? "block" : "hidden"
        } absolute z-[999] w-[100%] md:w-[20%] top-[56px] md:top-[60px] md:right-[20px]`}
      >
        <Menu
          className={` `}
          // defaultOpenKeys={["25"]}
          // defaultSelectedKeys={["0_1"]}
        >
          <MenuItem key="25" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span className="icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer text-[#4E5969] group-hover:text-[#3A57E8]"></span>
              <span>帳號管理</span>
            </div>
          </MenuItem>
          <MenuItem key="26" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span className="icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8]"></span>
              <span>訂單管理</span>
            </div>
          </MenuItem>
          <MenuItem key="27" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span className="icon-[solar--user-id-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8]"></span>
              <span>常用旅客</span>
            </div>
          </MenuItem>
          <MenuItem key="28" className={`group`}>
            <div className=" flex items-center gap-[16px]">
              <span className="icon-[solar--logout-3-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8]"></span>
              <span>登出</span>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Header;
