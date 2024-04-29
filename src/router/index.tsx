import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const ErrorPage = lazy(() => import("@/pages/Error"));
const ParnerPage = lazy(() => import("@/pages/Home/Parner"));
const MemberPage = lazy(() => import("../layout/MemberLayout"));
const AccountPage = lazy(() => import("../pages/Member/Account"));
const EditPasswordPage = lazy(() => import("../pages/Guest/EditPassword"));
const OrderPage = lazy(() => import("../pages/Order/Order"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/memberPage",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MemberPage />
          </Suspense>
        ),
        children: [
          {
            path: "account",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AccountPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ParnerPage />
          </Suspense>
        ),
        path: "/parner",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditPasswordPage />
          </Suspense>
        ),
        path: "/editPassword",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderPage />
          </Suspense>
        ),
        path: "/order",
      },
    ],
  },
]);

export default router;
