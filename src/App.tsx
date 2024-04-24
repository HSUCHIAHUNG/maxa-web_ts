import { RouterProvider } from "react-router-dom";
import router from "./router/index";
// import { useSelector } from "react-redux";
// import { authActions } from "./stores/auth.ts";
// import { useAppDispatch, RootState } from './stores/index.ts'


function App() {
  // const dispatch = useAppDispatch();
  // const auth = useSelector((state: RootState) => state.auth.counter);
  // const add = () => {
  //   dispatch(authActions.increament());
  // };

  return (
    <>
      <RouterProvider router={router} />
      {/* <div>{auth}</div>
      <button onClick={add}>click</button>
      <span
        className="icon-[solar--airbuds-case-minimalistic-linear]"
        style={{ width: 24, height: 24 }}
      ></span> */}
    </>
  );
}

export default App;
