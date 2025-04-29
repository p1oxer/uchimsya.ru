import React from "react";
import Header from "./Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollToTop from "./UI/ScrollToTop";

export default function Layout() {
    
    return (
        <>
            <div className="wrapper">
                <ScrollToTop />
                <Header modificator={"colored"} />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
