import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import axios from "axios";
import AvailableFood from "../pages/Available-Food/AvailableFood";

export const router =createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path: '/available-foods',
                loader: ()=>axios(`${import.meta.env.VITE_server}/available-foods`),
                Component: AvailableFood
            }
        ]
    }
])