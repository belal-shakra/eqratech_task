import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/guest/Login";
import Register from "./components/guest/Register";
import Profile from "./components/auth/profile/Profile";
import AuthLayout from "./components/layouts/AuthLayout";
import GuestLayout from "./components/layouts/GuestLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/profile"/>
  },

  {
    path:'/',
    element:<AuthLayout />,
    children: [
      {
        path: '/profile',
        element: <Profile />
      },
    ],
  },

  {
    path:'/',
    element:<GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login title="Login" />
      },
      {
        path: '/Register',
        element: <Register title="Register" />
      },
    ],
  },


]);

export default router;