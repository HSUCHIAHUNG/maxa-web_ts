import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("@/pages/Home.tsx"));
const ErrorPage = lazy(() => import("@/pages/Error.tsx"));
const ParnerPage = lazy(() => import("@/pages/Parner"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: (
          <Suspense fallback={"loading"}>
            <HomePage />
          </Suspense>
        ),
        path: "",
        // exact: true,
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
