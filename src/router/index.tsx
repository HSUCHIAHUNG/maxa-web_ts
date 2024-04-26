import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("@/pages/Home.tsx"));
const ErrorPage = lazy(() => import("@/pages/Error.tsx"));
const ParnerPage = lazy(() => import("@/pages/Parner"))
const MemberPage = lazy(() => import("../layout/MemberLayout"))
const AccountPage = lazy(() => import("../pages/Member/Account"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={"loading"}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "memberPage",
        element: (
          <Suspense fallback={"loading"}>
            <MemberPage />
          </Suspense>
        ),
        children: [
          {
            path: 'account',
            element: (
              <Suspense fallback={"loading"}>
                <AccountPage />
              </Suspense>
            ),
          }
        ]
      },
      {
        element: (
          <Suspense fallback={"loading"}>
            <ParnerPage />
          </Suspense>
        ),
        path: "parner",
      },
    ],
  },
]);

export default router;
