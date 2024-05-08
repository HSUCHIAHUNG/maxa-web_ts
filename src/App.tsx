// react原生方法
// import React from "react";
import Routes from "./router";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./stores/index";
// import axios from "axios";
import Guest from "./pages/Guest/Guest";

/** @const 取得Guest頁面dilog開關狀態(全域狀態) */
function App() {
  /** @const 取得dilog開關狀態(全域狀態) */
  const isDialog = useSelector((state: RootState) => state.auth.isDialog);
  /** @const 取得登入狀態(全域狀態) */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  // const [post, setPost] = React.useState(null);

  // function createPost() {
  //   axios
  //     .get('/api/v1')
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  return (
    <>
      <Routes />

      { (isDialog && !auth) && <Guest /> }
    </>
  );
}

export default App;
