
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './routes/Layout'
import Home from './components/Ui/Home'
import TourList from './components/Ui/TourList'
import TourDetails from "./components/Ui/TourDetails"

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