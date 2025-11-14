import React from "react";
import Header from "../src/component/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default MainLayout;