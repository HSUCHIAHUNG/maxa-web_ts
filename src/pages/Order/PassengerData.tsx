import OrderDetails from "../../components/common/OrderDetails";
// ui kit
import { Form, Steps, Checkbox, Input, Select } from "@arco-design/web-react";

function PassengerData() {
  // ui kit
  const Step = Steps.Step;
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const Option = Select.Option;

  // 常用旅客資料
  const options = ['Beijing', 'Shanghai', 'Guangzhou'];

  // 同步更新至會員中心
  function UpdateMemberData(
    val: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(val);
    console.log(event.target.defaultValue);
  }

  // 訂單乘客資料送出
  function loginSubmit(value: object) {
    console.log(value);
  }
  

  return (
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
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={loginSubmit}
        className={`flex flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px] `}
      >
        {/* 訂單明細 */}
        <OrderDetails></OrderDetails>
        <div className={`xl:w-[560px]`}>
          {/* 訂購人資料 */}
          <div
            className={` w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[60px] md:py-[40px] `}
          >
            <div
              className={` flex flex-col w-full mb-[12px]  gap-[12px] md:flex-row md:items-center md:justify-between md:mb-[20px] `}
            >
              <p className={`text-[16px] md:text-[20px] `}>訂購人資料</p>
              <Checkbox
                onChange={UpdateMemberData}
                value="訂購人資料"
                className={`p-0`}
              >
                同步更新至會員中心
              </Checkbox>
            </div>
            <FormItem
              label="姓名"
              field="orderName"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請填寫姓名" allowClear />
            </FormItem>
            <FormItem
              label="身分證或護照號碼"
              field="orderId"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請填寫身分證或護照號碼" allowClear />
            </FormItem>
            <FormItem
              label="電話"
              field="orderphone"
              required
              className={`h-[66px]`}
            >
              <Input
                addBefore={
                  <Select
                    size={"mini"}
                    placeholder="請選擇"
                    style={{ width: 100 }}
                  >
                    <Select.Option value="+886">+886</Select.Option>
                    <Select.Option value="+86">+86</Select.Option>
                  </Select>
                }
                allowClear={true}
                placeholder="請輸入手機號碼"
              />
            </FormItem>
            <FormItem
              label="Email"
              field="orderEmail"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請輸入信箱" />
            </FormItem>
          </div>
          {/* 取票人資料 */}
          <div
            className={` w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[60px] md:py-[40px] `}
          >
            <div
              className={` flex flex-col w-full gap-[12px] md:flex-row md:justify-between md:items-center mb-[12px] md:mb-[20px] `}
            >
              <p className={`text-[16px] md:text-[20px] `}>取票人資料</p>
              <Checkbox
                onChange={UpdateMemberData}
                value="訂購人資料"
                className={`p-0`}
              >
                同步更新至會員中心
              </Checkbox>
            </div>
            <FormItem
              label="選擇常用旅客"
              field="takerFrequentTravelers"
              required
              className={`h-[66px]`}
            >
              <Select
                placeholder="Please select"
                allowClear
              >
                {options.map((option, index) => (
                  <Option key={option} disabled={index === 3} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem
              label="姓名"
              field="takerName"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請填寫姓名" allowClear />
            </FormItem>
            <FormItem
              label="身分證或護照號碼"
              field="takerId"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請填寫身分證或護照號碼" allowClear />
            </FormItem>
            <FormItem
              label="電話"
              field="takerphone"
              required
              className={`h-[66px]`}
            >
              <Input
                addBefore={
                  <Select
                    size={"mini"}
                    placeholder="請選擇"
                    style={{ width: 100 }}
                  >
                    <Select.Option value="+886">+886</Select.Option>
                    <Select.Option value="+86">+86</Select.Option>
                  </Select>
                }
                allowClear={true}
                placeholder="請輸入手機號碼"
              />
            </FormItem>
            <FormItem
              label="Email"
              field="takerEmail"
              required
              className={`h-[66px]`}
            >
              <Input placeholder="請輸入信箱" />
            </FormItem>
          </div>
          
        </div>
      </Form>
    </div>
  );
}

export default PassengerData;
