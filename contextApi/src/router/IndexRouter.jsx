import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../Layouts/LayoutRoot";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import LayoutPrivate from "../Layouts/LayoutPrivate";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
        ],
    },
]);
