import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import "./assets/scss/style.scss";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import CoursesPage from "./components/pages/CoursesPage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/courses",
                element: <CoursesPage />,
            },
        ],
    },
]);
export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
