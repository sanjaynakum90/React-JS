import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../routes/MainLayout";
import Home from "./component/Home";
import Header from './component/Header';
import About from "./component/About";
import Service from "./component/Service";
import Product from "./component/Product";
import ErrorPage from "./component/ErrorPage";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          elemnet: <Home />
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return (

    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App