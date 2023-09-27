import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layouts/LayoutPublic";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage, { loaderBlogs } from "../pages/BlogPage";
import NotFound from "../pages/NotFound";
import PostPage, { loaderPost } from "../pages/PostPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "/about",
                        element: <AboutPage />,
                    },
                    {
                        path: "/blog",
                        element: <BlogPage />,
                        loader: loaderBlogs,
                    },
                    {
                        path: "/blog/:id",
                        element: <PostPage />,
                        loader: loaderPost,
                    },
                ],
            },
        ],
    },
]);
