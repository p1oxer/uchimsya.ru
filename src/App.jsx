import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import "./assets/scss/style.scss";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/Layout.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
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
