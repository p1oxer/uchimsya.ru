import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import "./assets/scss/style.scss";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import CoursesPage from "./components/pages/CoursesPage.jsx";
import CoursePage from "./components/pages/CoursePage.jsx";
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
            {
                path: "/courses/:courseName",
                element: <CoursePage />,
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
