import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./Components/UI/Home";
import StudentForm from "./Components/pages/StudentForm";
import StudentDetails from "./Components/pages/StudentDetails";
import ProtectedRoute from "./routes/ProtectedRouts";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "add-student",
                    element: (
                        <ProtectedRoute>
                            <StudentForm />
                        </ProtectedRoute>
                    )
                },
                {
                    path: "students",
                    element: (
                        <ProtectedRoute>
                            <StudentDetails />
                        </ProtectedRoute>
                    )
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default App;