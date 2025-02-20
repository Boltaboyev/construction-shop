import {createBrowserRouter} from "react-router-dom"

// pages
import UserLayout from "../layout/user-layout"
import HomePage from "../pages/home"
import ShopPage from "../pages/shop"
import LikePage from "../pages/like"
import ProductPage from "../pages/products"
import ProductDetail from "../pages/product-detail"
import LoginPage from "../pages/user-login"
import NotFoundPage from "../pages/not-found"
import PrivateRoute from "../private"
import AdminDashboard from "../pages/dashboard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "shop",
                element: <ShopPage />,
            },
            {
                path: "like",
                element: <LikePage />,
            },
            {
                path: "product",
                element: <ProductPage />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },

    {
        path: "/dashboard",
        element: <PrivateRoute />,
        children: [
            {
                path: "/dashboard",
                element: <AdminDashboard />,
            },
        ],
    },
])
