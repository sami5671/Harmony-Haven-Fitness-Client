import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home.jsx";
import Activities from "./Components/Activities/Activities";
import AboutUs from "./Components/AboutUs/AboutUs";
import ServiceDetails from "./Components/OurAllServices/ServiceDetails";
import Login from "./Components/Providers/Login";
import Register from "./Components/Providers/Register";
import AuthProvider from "./Components/Providers/AuthProvider";
import PrivateRoute from "./Components/Providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    ErrorPage: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ServicesCard/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/public/cards.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/activities",
        element: (
          <PrivateRoute>
            <Activities></Activities>,
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
