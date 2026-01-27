import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import StudentForm from "./Components/pages/StudentForm";
import StudentDetails from "./Components/pages/StudentDetails";


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <StudentForm />
                },
                {
                    path: "students",
                    element: <StudentDetails />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default App;