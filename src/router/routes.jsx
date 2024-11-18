import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from '../pages/Home'
import New from "../pages/New";
import Offers from "../pages/Offers"
import Dashboard from "../pages/Dashboard"
import Products from "../pages/pagesid/Products";

export const router = createBrowserRouter ([
    {
        path: "/", element: <App />, errorElement: <Error/> , children: [
            {path: '/', element: <Home/>},
            {path: "/new", element: <New/>},
            {path: "/offers", element: <Offers/>},
            {path: "/dashboard", element: <Dashboard/>},
            {path: '/products/:id' , element: <Products/>},
        ]
    },
])