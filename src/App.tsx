import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import Guest from "./pages/Guest"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Guest/>
    </>
  );
}

export default App;
