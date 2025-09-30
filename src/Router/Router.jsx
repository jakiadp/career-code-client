import { createBrowserRouter } from "react-router"
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const Router = createBrowserRouter([
  {
    index: true,
    Component: Root,
    children:[
      {
        path:'/',
        Component:Home,
      },
      {
        path:'/signIn',
        Component:SignIn,

      },
      {
        path:"/signUp",
        Component:SignUp
      },

    ]
  },
]);

export default Router;