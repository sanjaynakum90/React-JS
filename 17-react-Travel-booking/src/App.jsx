import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Layout from './routes/Layout';
import Home from './components/Ui/Home';
import TourList from './components/Pages/TourList';
import TourDetails from "./components/Pages/TourDetails";
import BookingForm from "./components/Pages/BookingForm";
import ProtectedRoute from "./components/Pages/ProtectedRouts";

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
          path: "tour",
          element: <TourList />
        },
        {
          path: "tour/:id",
          element: <TourDetails />
        },
        {
          path: "booking/:id",
          element: (
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          )
        },
       
      ]
    }
  ]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <RouterProvider router={router} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;