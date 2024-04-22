import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("../components/Home.tsx"));
const ErrorPage = lazy(() => import("../components/Error.tsx"));


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
    ],
  },
]);

export default router;
