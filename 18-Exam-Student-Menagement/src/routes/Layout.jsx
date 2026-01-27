import { Outlet } from "react-router-dom"
import Navbar from "../Components/UI/Navbar"
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default Layout