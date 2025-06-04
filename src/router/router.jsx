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
import MyFoodRequest from "../pages/My-Food-Request/MyFoodRequest";
import PrivateRoute from "../provider/PrivateRoute";

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
                element: <AvailableFood></AvailableFood>
            },
            {
                path:'add-a-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
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
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path: 'manage-my-food',
                loader: ()=>fetch(`${import.meta.env.VITE_server}/available-foods`),
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: 'Update/:id',
                loader: ({params})=>fetch(`${import.meta.env.VITE_server}/food/${params.id}`),
                Component: Update
            },
            {
                path: 'my-food-request',
                loader: ()=>fetch(`${import.meta.env.VITE_server}/requested-food`),
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
            }

        ]
    }
])