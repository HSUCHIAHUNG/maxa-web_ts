// import React from "react";
import Routes from "./router";
// import axios from "axios";
import Guest from "./pages/Guest/Guest";

function App() {
  // const [post, setPost] = React.useState(null);

  // function createPost() {
  //   axios
  //     .get('https://taitungttgo.cbsdinfo.com.tw/service/api/AllToken/GetAuthCode')
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  return (
    <>
      {/* <div>{post}</div>
      <button onClick={createPost}>Create Post</button> */}
      <Routes />
      <Guest />
    </>
  );
}

export default App;
