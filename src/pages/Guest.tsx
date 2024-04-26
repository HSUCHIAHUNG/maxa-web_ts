import { createPortal } from "react-dom";
import { Form, Input, Button } from "@arco-design/web-react";
import Logo from "../assets/images/header/header_text.svg";
import { useSelector } from "react-redux";
import { authActions } from "../stores/auth.ts";
import { useAppDispatch, RootState } from '../stores/index.ts'

function GuestPage() {
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const guest = useSelector((state: RootState) => state.auth.isGuest);
  const isDialog = () => {
    dispatch(authActions.isDialog());
  };
  return createPortal(
    <section className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[black] bg-opacity-25 ${guest ? 'block' : 'hidden'}`}>
      <div className="w-[320px] h-[580px] p-[16px] bg-[white] rounded-[16px] flex flex-col items-center ">
        <p onClick={isDialog} className="icon-[ri--close-fill] cursor-pointer h-[16px] w-[16px] self-end  "></p>
        <p className={`text-center py-[8px]`}>歡迎登入</p>
        <img src={Logo} alt="Logo" className={`w-[120px] h-[28px] `} />
        <Form
          form={form}
          autoComplete="off"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          onSubmit={(v) => {
            console.log(v);
          }}
          className={`pt-[45px]`}
        >
          <FormItem
            label="註冊信箱"
            field="name"
            required
            rules={[
              {
                required: true,
                validator(value, cb) {
                  if (value !== "hahaha") {
                    return cb("必填");
                  }

                  return cb();
                },
              },
            ]}
          >
            <Input placeholder="請輸入信箱" />
          </FormItem>
          <FormItem label="密碼" field="nme" required>
            <Input.Password placeholder="請輸入密碼" />
          </FormItem>
          <p className={`text-right mb-[8px] text-[#3A57E8]`}>忘記密碼</p>
          <FormItem className={``}>
            <Button
              className={`w-[100%] !bg-[#3A57E8]`}
              type="primary"
              htmlType="submit"
            >
              登入
            </Button>
          </FormItem>
          <div className={`flex justify-center items-center gap-[16px]`}>
            <div className={`h-[1px] w-[72px] bg-[#E5E6EB]`}></div>
            <span className={`text-12px`}>使用快速登入</span>
            <div className={`h-[1px] w-[72px] bg-[#E5E6EB]`}></div>
          </div>
          <div className={`flex gap-[8px] justify-center pt-[16px] pb-[41px]`}>
            <div
              className={` w-[40px] h-[40px] bg-[#F2F3F5] p-[10px] flex justify-center items-center rounded-[100px] `}
            >
              <span className="icon-[bi--line] w-[24px] h-[24px] text-[#4E5969]"></span>
            </div>
            <div
              className={` w-[40px] h-[40px] bg-[#F2F3F5] p-[10px] flex justify-center items-center rounded-[100px] `}
            >
              <span className="icon-[bi--google] w-[24px] h-[24px] text-[#4E5969]"></span>
            </div>
          </div>
          <div className={`flex justify-center text-[12px] gap-[1px]`}>
            <p>還沒有帳號嗎？</p>
            <p className={`text-[#3A57E8]`}>點此註冊</p>
          </div>
          <div className={`flex justify-center text-[12px] gap-[1px]`}>
            <p>註冊或登入代表您已同意</p>
            <p className={`text-[#3A57E8]`}>使用者條款</p>
            <p>與</p>
            <p className={`text-[#3A57E8]`}>隱私權條款</p>
          </div>
        </Form>
      </div>
    </section>,
    document.getElementById("modal")!
  );
}

export default GuestPage;
