import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const ErrorPage = lazy(() => import("@/pages/Error"));
const ParnerPage = lazy(() => import("@/pages/Home/Parner"));
const MemberCenterPage = lazy(() => import("../layout/MemberLayout"));
const EditPasswordPage = lazy(() => import("../pages/Guest/EditPassword"));
const OrderPage = lazy(() => import("../pages/Order/Order"));
const ProductDetailPage = lazy(() => import("../pages/Order/ProductDetail"));
const ContractPage = lazy(() => import("../pages/Order/Contract"));
const PassengerDataPage = lazy(() => import("../pages/Order/PassengerData"));
const CartPages = lazy(() => import("../pages/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      // 首頁
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      // 會員中心
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MemberCenterPage />
          </Suspense>
        ),
        path: "/memberCenter",
      },
      // 合作夥伴
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ParnerPage />
          </Suspense>
        ),
        path: "/parner",
      },
      // 註冊登入(密碼更改)
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditPasswordPage />
          </Suspense>
        ),
        path: "/editPassword",
      },
      // 行程產品
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderPage />
          </Suspense>
        ),
        path: "/order",
      },
      // 行程產品細節
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
          </Suspense>
        ),
        path: "order/:productDetail",
      },
      // 購買契約
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContractPage />
          </Suspense>
        ),
        path: "/contract",
      },
      // 乘客資料
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PassengerDataPage />
          </Suspense>
        ),
        path: "/passengerData",
      },
      // 乘客資料
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CartPages />
          </Suspense>
        ),
        path: "/cart",
      },
    ],
  },
]);

export default router;
