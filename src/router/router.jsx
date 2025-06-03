import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import axios from "axios";
import AvailableFood from "../pages/Available-Food/AvailableFood";
import AddFood from "../pages/Add-A-Food/AddFood";
import Register from "../pages/Register";
import Login from "../pages/Login";
import FoodDetails from "../pages/Food-Details/FoodDetails";
import ManageMyFoods from "../pages/Manage-My-Foods/ManageMyFoods";
import Update from "../pages/Manage-My-Foods/Update";

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
                path: 'available-foods',
                loader: ()=>axios(`${import.meta.env.VITE_server}/available-foods`),
                Component: AvailableFood
            },
            {
                path:'add-a-food',
                Component: AddFood
            },
            {
                path: 'register',
                Component: Register
                
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'food/:id',
                loader: ({params})=>fetch(`${import.meta.env.VITE_server}/food/${params.id}`),
                Component: FoodDetails
            },
            {
                path: 'manage-my-food',
                loader: ()=>fetch(`${import.meta.env.VITE_server}/available-foods`),
                Component: ManageMyFoods
            },
            {
                path: 'Update/:id',
                loader: ({params})=>fetch(`${import.meta.env.VITE_server}/food/${params.id}`),
                Component: Update
            }

        ]
    }
])