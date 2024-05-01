// react原生方法
import React from "react";
// redux
import { useSelector } from "react-redux";
import { orderActions } from "../../stores/order";
import { RootState, useAppDispatch } from "../../stores/index";
// ui kit
import {
  Form,
  Button,
  Divider,
  Select,
  DatePicker,
} from "@arco-design/web-react";

interface selectStationProps {
  className?: string;
}

const SelectStation: React.FC<selectStationProps> = ({ className }) => {
  // redux(方法調用)
  const dispatch = useAppDispatch();
  // redux(tab狀態)
  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const options = [
    {
      label: "one",
      value: 0,
    },
    {
      label: "two",
      value: 1,
    },
    {
      label: "three",
      value: 2,
    },
  ];

  /** @func login表單提交 */
  const loginSubmit = (value: object) => {
    // redux(切換tab全域狀態)
    dispatch(orderActions.switchTab("selectTime"));
    dispatch(orderActions.setStationData(["stationData", value]));
  };

  // 控制訂車階段顯示
  const isOpen = () => (bookingStage !== "selectStation" ? "hidden" : "block");

  return (
    <>
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={loginSubmit}
        className={` ${className}`}
      >
        <div className={`md:flex md:gap-[20px] md:w-[420px] `}>
          <FormItem label="選擇起點" field="startStation" required>
            <Select placeholder="選擇起點" options={options} allowClear />
          </FormItem>
          <FormItem label="選擇迄點" field="endStation" required>
            <Select placeholder="選擇迄點" options={options} allowClear />
          </FormItem>
        </div>
        <div className={`md:flex md:gap-[20px] md:w-[420px]`}>
          <FormItem
            label="去程日期"
            field="startDate"
            rules={[{ required: true }]}
          >
            <DatePicker placeholder="選擇去程日期" className={`w-full`} />
          </FormItem>
          <FormItem
            label="回程日期"
            field="endDate"
            rules={[{ required: true }]}
          >
            <DatePicker placeholder="選擇回程日期" className={`w-full`} />
          </FormItem>
        </div>

        <Divider
          className={isOpen()}
          style={{
            borderBottomStyle: "dashed",
            margin: "16px 0",
          }}
        />
        <FormItem className={`m-0`}>
          <Button
            className={`w-[100%] !bg-[#3A57E8] !m-0 ${isOpen()}`}
            type="primary"
            htmlType="submit"
          >
            下一步，查詢班次
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default SelectStation;
