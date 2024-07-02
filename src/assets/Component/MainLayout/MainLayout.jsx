import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <OutLet />
            <Footer />
        </div>
    );
};

export default MainLayout;