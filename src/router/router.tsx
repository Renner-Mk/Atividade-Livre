import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Artigo } from "../pages/About";
import { Feed } from "../pages/Feed";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artigo",
        element: <Artigo />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
    ],
  },
]);
