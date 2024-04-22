import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


function DefaultLayout() {

  return (
    <>
      <Header title='HeaderProps' />
      <Outlet/>  
      <Footer />
    </>
  );
}

export default DefaultLayout;
