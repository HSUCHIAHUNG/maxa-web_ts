// react原生方法
import React, { useRef } from "react";
// redux
import { useSelector } from "react-redux";
import { orderActions } from "../../stores/order";
import { RootState, useAppDispatch } from "../../stores/index";
// ui kit
import { Button, Form, Table, TableColumnProps } from "@arco-design/web-react";

interface selectTimeProps {
  className?: string;
}

// 訂車時刻title
const columns: TableColumnProps[] = [
  {
    title: "班次編號",
    dataIndex: "id",
    fixed: "left",
    width: "58px",
  },
  {
    title: "屏東總圖",
    dataIndex: "startStation",
    width: "58px",
  },
  {
    title: "屏東縣民公園",
    dataIndex: "endStation",
    width: "88px",
  },
  {
    title: "空位數",
    dataIndex: "seats",
    width: "88px",
  },
  {
    title: "車種",
    dataIndex: "Vehicles",
    width: "88px",
  },
];
// 訂車時刻data
const data = [
  {
    id: "001",
    startStation: "09:00",
    endStation: "09:30",
    seats: "5",
    Vehicles: "一般公車",
  },
  {
    id: "002",
    startStation: "09:00",
    endStation: "09:30",
    seats: "5",
    Vehicles: "一般公車",
  },
  {
    id: "003",
    startStation: "09:00",
    endStation: "09:30",
    seats: "5",
    Vehicles: "一般公車",
  },
  {
    id: "004",
    startStation: "09:00",
    endStation: "09:30",
    seats: "5",
    Vehicles: "一般公車",
  },
  {
    id: "005",
    startStation: "09:00",
    endStation: "09:30",
    seats: "5",
    Vehicles: "一般公車",
  },
];

const SelectTime: React.FC<selectTimeProps> = () => {
  // redux(方法調用)
  const dispatch = useAppDispatch();
  // redux(tab狀態)
  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );
  // redux(訂票資訊)
  const bookingData = useSelector(
    (state: RootState) => state.order.bookingData
  );

  // 選擇訂車時間
  const SelectData = useRef({ startTime: {}, endTime: {} });

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  /** @func login表單提交 */
  const loginSubmit = (value: object) => {
    console.log(value);
    // redux(切換tab全域狀態)
    dispatch(orderActions.switchTab("selectTime"));
  };

  // 控制訂車階段顯示
  const isOpen = () => (bookingStage !== "selectTime" ? "hidden" : "block");

  // 選擇資料
  const setSelectData = (
    selectedRowKeys: (string | number)[],
    selectedRows: object,
    selectItem: string
  ) => {
    const selectedItem = selectItem as keyof typeof SelectData.current;
    SelectData.current[selectedItem] = selectedRows;

    // 使用類型断言將 SelectData.current[selectedItem] 斷言為一个数组
    const selectedItemArray = SelectData.current[selectedItem] as object[];
    // 新資料存到Redux
    dispatch(orderActions.setTimeData([selectItem, selectedItemArray[0]]));
    console.log(bookingData);
  };

  return (
    <>
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={loginSubmit}
        className={isOpen()}
      >
        <div className={` md:gap-[20px] `}>
          <FormItem label="選擇去程班次" field="startTime" required>
            <Table
              scroll={{
                x: 630,
              }}
              rowKey="id"
              columns={columns}
              data={data}
              pagination={false}
              hover
              className={`w-full`}
              rowSelection={{
                type: "radio",
                onChange: (selectedRowKeys, selectedRows) =>
                  setSelectData(selectedRowKeys, selectedRows, "startTime"),
              }}
            />
          </FormItem>
          <FormItem label="選擇回程班次" field="endTime" required>
            <Table
              scroll={{
                x: 630,
              }}
              rowKey="id"
              columns={columns}
              data={data}
              pagination={false}
              hover
              className={`w-full`}
              rowSelection={{
                type: "radio",
                onChange: (selectedRowKeys, selectedRows) =>
                  setSelectData(selectedRowKeys, selectedRows, "endTime"),
              }}
            />
          </FormItem>
        </div>
        <div className={`flex flex-col gap-[8px] md:flex-row`}>
          <FormItem className={`m-0 md:w-[180px]`}>
            <Button
              onClick={() => dispatch(orderActions.switchTab("selectStation"))}
              className={`w-[100%] !text-[#4E5969] !bg-[#F2F3F5] !m-0`}
              type="primary"
              htmlType="button"
            >
              上一步，重新查詢班次
            </Button>
          </FormItem>
          <FormItem className={`m-0`}>
            <Button
              className={`w-[100%] !bg-[#3A57E8] !m-0`}
              type="primary"
              htmlType="submit"
            >
              下一步，選擇票種數量與座位
            </Button>
          </FormItem>
        </div>
      </Form>
    </>
  );
};

export default SelectTime;
