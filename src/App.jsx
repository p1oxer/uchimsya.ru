import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import "./assets/scss/style.scss";
import Home from "./components/pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import CoursesPage from "./components/pages/CoursesPage.jsx";
import CoursePage from "./components/pages/CoursePage/CoursePage.jsx";
import LoginPage from "./components/pages/Authentication/LoginPage.jsx";
import RegisterPage from "./components/pages/Authentication/RegisterPage.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import AccountPage from "./components/pages/AccountPage/AccountPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Policy from "./components/pages/Policy.jsx";
import ScrollToTop from "./components/UI/ScrollToTop.jsx";
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
                path: "/account",
                element: (
                    <PrivateRoute>
                        <AccountPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/courses/:courseName",
                element: <CoursePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/privacy-policy",
                element: <Policy />,
            },
        ],
    },
]);
export default function App() {
    return (
        <>
            <AuthContextProvider>
                <UserProvider>
                    
                    <RouterProvider router={router} />
                </UserProvider>
            </AuthContextProvider>
        </>
    );
}
