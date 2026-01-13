import Navbar from "../components/Ui/Navbar"
import Home from "../components/Ui/Home"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default Layout