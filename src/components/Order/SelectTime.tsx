// react原生方法
import React from "react";
// redux
import { useSelector } from "react-redux";
import { orderActions } from "../../stores/order";
import { RootState, useAppDispatch } from "../../stores/index";
// ui kit
import {
  Button,
  Divider,
  Form,
  Table,
  TableColumnProps,
} from "@arco-design/web-react";

interface SelectTimeProps {
  className?: string;
}

interface SelectTimeData {
  id: string;
  startStation: string;
  endStation: string;
  seats: string;
  Vehicles: string;
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

const SelectTime: React.FC<SelectTimeProps> = () => {
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

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  /** @func login表單提交 */
  const loginSubmit = (value: object) => {
    console.log(value);
    // redux(切換tab全域狀態)
    dispatch(orderActions.switchTab("selectSeats"));
  };

  // 控制訂車階段顯示
  const isOpen = () => (bookingStage !== "selectTime" ? "hidden" : "block");
  // 劃位階段顯示
  const selectSeatIsOpen = () =>
    bookingStage !== "selectSeats" ? "hidden" : "block";

  // 選擇資料
  const setSelectData = (
    _selectedRowKeys: (string | number)[],
    selectedRows: SelectTimeData[],
    selectItem: string
  ) => {
    // 新資料存到Redux
    selectedRows.forEach((row) => {
      dispatch(orderActions.setTimeData([selectItem, row]));
    });
  };

  return (
    <>
      {isOpen() === "block" && (
        <Form
          form={form}
          autoComplete="on"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          onSubmit={loginSubmit}
          className={`${isOpen()}`}
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
                onClick={() =>
                  dispatch(orderActions.switchTab("selectStation"))
                }
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
      )}
      {/* 畫位階段顯示已選擇車次列表 */}
      {selectSeatIsOpen() === "block" && (
        <div>
          <Divider
            style={{
              borderBottomStyle: "dashed",
              margin: "16px 0",
            }}
          />
          <div className={`pb-[16px]`}>
            <p className={`text-[#4E5969] pb-[8px]`}>去程班次</p>
            <Table
              scroll={{
                x: 630,
              }}
              columns={columns}
              data={[bookingData.timeData.startTime]}
              rowKey="id"
              pagination={false}
              className={`w-full`}
            />
          </div>
          <div>
            <p className={`text-[#4E5969] pb-[8px]`}>回程班次</p>
            <Table
              scroll={{
                x: 630,
              }}
              columns={columns}
              data={[bookingData.timeData.endTime]}
              rowKey="id"
              pagination={false}
              className={`w-full`}
            />
          </div>
          <Divider
            style={{
              borderBottomStyle: "dashed",
              margin: "16px 0",
            }}
          />
        </div>
      )}
    </>
  );
};

export default SelectTime;
