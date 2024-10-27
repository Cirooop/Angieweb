import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from '../pages/Home'
import New from "../pages/New";
import Offers from "../pages/Offers"
import Products from "../pages/Products"
// import Login from "../pages/Login";
import Maintenance from "../components/Maintenance";
export const router = createBrowserRouter ([
    {
        path: "/", element: <App />, errorElement: <Error/> , children: [
            {path: '/', element: <Maintenance />},
            {path: '/home', element: <Home />},
            {path: "/new", element: <New/>},
            {path: "/offer", element: <Offers/>},
            {path: "/products", element: <Products/>},
            // {path:'/login', element: <Login/>}
        ]
    },
])