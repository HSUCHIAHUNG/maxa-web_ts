// 原生方法
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Input, Menu } from "@arco-design/web-react";
// Icon
import headerText from "@/assets/images/header/header_text.svg";
import memberIcon from "@/assets/images/header/memberAvatar.svg";
import guestIcon from "@/assets/images/header/guest.svg";
// redux
import { useSelector } from "react-redux";
import { authActions } from "../../stores/auth.ts";
import { useAppDispatch, RootState } from "../../stores/index.ts";
import { NavLink } from "react-router-dom";
import IconButton from "../common/IconButton.tsx";

// 選單開關狀態型別
interface IsOpenType {
  search: boolean;
  list: boolean;
  memberList: boolean;
  langue: boolean;
  cart: boolean;
}

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const dialogToggle = () => {
    setOpen((prevState) => ({
      ...prevState,
      search: false,
      list: false,
      memberList: false,
      langue: false,
      cart: false,
    }));
    dispatch(authActions.dialogToggle());
  };
  /** @func 全域狀態auth */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  // 選單開關狀態控制
  const [isOpen, setOpen] = useState<IsOpenType>({
    search: false,
    list: false,
    memberList: false,
    langue: false,
    cart: false,
  });
  const { search, list, memberList, langue, cart } = isOpen;

  /** @func 當前路由方法 */
  const location = useLocation();
  /** @const {string} 當前路由path */
  const currentPathName = location.pathname;

  // ui ki
  const InputSearch = Input.Search;
  const MenuItem = Menu.Item;
  const SubMenu = Menu.SubMenu;

  /** @const {Array} 未登入 */
  const menuList = [
    { id: "1", lable: "購物車", route: "/cart" },
    { id: "2", lable: "訂單查詢", route: "/memberOrder" },
  ];

  /** @const {Array} 會員登入nav */
  const memberMenu = [
    { id: 1, lable: "帳號管理", route: "memberPage/account" },
    { id: 2, lable: "訂單管理", route: "memberPage/guestOrder" },
    { id: 3, lable: "常用旅客", route: "memberPage/FrequentTravelers" },
    { id: 4, lable: "登出", route: "memberPage/logout" },
  ];

  /** @func 會員選單icon動態顯示icon */
  const getIconClassName = (lable: string) => {
    switch (lable) {
      case "帳號管理":
        return "solar--cart-large-minimalistic-bold-duotone";
      case "訂單管理":
        return "solar--clipboard-text-bold-duotone";
      case "常用旅客":
        return "solar--user-id-bold-duotone";
      case "登出":
        return "solar--logout-3-bold-duotone";
      default:
        return "";
    }
  };

  /** @func 選單開關狀態控制方法 */
  const toggleOpen = (key: keyof IsOpenType) => {
    if (isOpen.memberList && key !== "memberList") toggleOpen("memberList");
    if (isOpen.list && key !== "list") toggleOpen("list");
    if (isOpen.cart && key !== "cart") toggleOpen("cart");
    if (isOpen.langue && key !== "langue") toggleOpen("langue");
    if (isOpen.search && key !== "search") toggleOpen("search");

    setOpen((prev: IsOpenType) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <section className="relative bg-[#fff] w-[100%] h-[56px] py-[14px] px-[12px] md:pl-[20px] md:pr-[32px] flex justify-between items-center">
        {/* 左邊maxa logo */}
        <NavLink
          to={"/"}
          className={`flex gap-[4px] items-center ${search && "hidden"}`}
        >
          <span className="icon-[solar--box-minimalistic-bold-duotone] w-[24px] h-[24px] text-[#4E5969]"></span>
          <img src={headerText} alt="MAXA" className="w-[66px] h-[14px]" />
          <InputSearch
            className={` w-[265px] h-[32px] hidden md:block `}
            placeholder="搜尋行程"
          />
        </NavLink>

        {/* 右邊選單按鈕 */}
        <div className={`flex gap-[24px] ${search && "hidden"}`}>
          {/* 手機版搜尋框按鈕 */}
          <span
            onClick={() => toggleOpen("search")}
            className={`icon-[solar--magnifer-bold-duotone] md:hidden w-[24px] h-[24px] text-[#4E5969] cursor-pointer hover:text-[#3A57E8] ${
              search && "hidden"
            }`}
          ></span>
          {/* 手機版選單按鈕 */}
          <IconButton
            toggleOpenFn={() => toggleOpen("list")}
            isOpen={list}
            className="md:hidden group"
            icon="icon-[solar--hamburger-menu-bold-duotone]"
          />
          {/* 電腦版語言按鈕 */}
          <IconButton
            toggleOpenFn={() => toggleOpen("langue")}
            isOpen={langue}
            className=" group hidden md:block"
            icon="icon-[solar--earth-bold-duotone]"
          />
          {/* 電腦版訂單查詢 */}
          <span
            className={`icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] text-[#4E5969] cursor-pointer group-hover:text-[#3A57E8] hidden md:block`}
          ></span>
          {/* 電腦版購物車 */}
          <IconButton
            toggleOpenFn={() => toggleOpen("cart")}
            isOpen={cart}
            className=" group hidden md:block"
            icon="icon-[solar--cart-large-minimalistic-bold-duotone]"
          />
          {/* 手機版會員選單 */}
          <div
            onClick={
              auth ? () => toggleOpen("memberList") : () => dialogToggle()
            }
            className={`${!auth ? "md:hidden" : "md:block"}`}
          >
            <img
              src={auth ? memberIcon : guestIcon}
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
          {/* 電腦版未登入選單 */}
          <div
            onClick={
              auth ? () => toggleOpen("memberList") : () => dialogToggle()
            }
            className={`${
              !auth ? "hidden md:block" : "hidden"
            } w-[95px] h-[32px] rounded-[100px] bg-[#3A57E8] text-center leading-[32px] text-[#fff]`}
          >
            登入/註冊
          </div>
        </div>
        {/* 手機版搜尋框 */}
        <div
          className={`w-[100%] flex justify-end items-center gap-[12px] ${
            search ? "block" : "hidden"
          } `}
        >
          <span
            onClick={() => toggleOpen("search")}
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
        } absolute z-[999] w-[100%] top-[56px] md:hidden`}
      >
        <Menu style={{ width: "100%", height: "100%" }}>
          {menuList.map((menuItem) => (
            <MenuItem key={menuItem.id} className={`group`}>
              <div className=" flex items-center gap-[16px]">
                <span
                  className={`icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer text-[#4E5969] group-hover:text-[#3A57E8]`}
                ></span>
                <span>{menuItem.lable}</span>
              </div>
            </MenuItem>
          ))}
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
      <ul
        className={`${
          memberList ? "block" : "hidden"
        } absolute z-[999] w-[100%] md:w-[20%] top-[56px] md:top-[60px] md:right-[20px] bg-[#fff] px-[8px] py-[4px]`}
      >
        {memberMenu.map((memberRoute) => (
          <NavLink
            to={memberRoute.route}
            key={memberRoute.id}
            className="group p-[9px] block"
          >
            <div className="flex items-center gap-[16px]">
              <span
                className={`icon-[${getIconClassName(
                  memberRoute.lable
                )}] w-[24px] h-[24px] cursor-pointer group-hover:text-[#3A57E8] ${
                  currentPathName === `/${memberRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                } `}
              ></span>

              <span
                className={`group-hover:text-[#3A57E8] ${
                  currentPathName === `/${memberRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                }`}
              >
                {memberRoute.lable}
              </span>
            </div>
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default Header;
