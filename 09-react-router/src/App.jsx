import React, { Children, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../routes/MainLayout";
import About from "./component/About";
import Service from "./component/Service";
import ErrorPage from "./component/ErrorPage";
import { Suspense } from 'react';
import ModernLoader from './component/Loading';


const Home = lazy(() => import("./component/Home"))
const Product = lazy(() => import("./component/Product"))



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
      <Suspense fallback={<ModernLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App