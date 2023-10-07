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
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/public/cards.json"),
      },
      {
        path: "/activities",
        element: <Activities></Activities>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
