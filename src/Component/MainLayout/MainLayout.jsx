
import { Outlet } from 'react-router-dom';
import Footer from "./Footer/Footer";
import NavBar from './NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;