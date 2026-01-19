
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './routes/Layout'
import Home from './components/Ui/Home'
import TourList from './components/Pages/TourList'
import TourDetails from "./components/Pages/TourDetails"
import Auth from "./components/Auth/Auth"

import { Container, Row, Col } from "react-bootstrap"

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
          path:"login",
          element:<Auth/>
        }
      ]
    }
  ])
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <RouterProvider router={router}>

            </RouterProvider>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App