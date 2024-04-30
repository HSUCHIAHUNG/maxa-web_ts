// react原生方法
import React from "react";
// 引入组件
import Tab from "../../components/Order/Tab";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index"; 

const SelectStation: React.FC = () => { // 修正组件名为首字母大写
  const order = useSelector((state: RootState) => state.order.tab);
    console.log(order);
  return <Tab>123</Tab>;
};

export default SelectStation; // 修正组件名为首字母大写
