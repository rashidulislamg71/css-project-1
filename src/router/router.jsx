import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import App from './../App';

const routers = createBrowserRouter([
    {
        
        element: <App />,
        
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default routers;