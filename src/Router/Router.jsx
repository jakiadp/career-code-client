import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

export default Router;