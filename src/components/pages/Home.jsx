import React from "react";
import Hero from "../Hero/Hero";
import Advantages from "../Advantages/Advantages";
import PopularCourses from "../PopularCourses/PopularCourses";
import Steps from "../Steps/Steps";
import Reviews from "../Reviews/Reviews";
import Faq from "../FAQ/Faq";
import Stories from "../Stories/Stories";
import { ScrollRestoration } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main>
                    <Hero />
                    <Advantages />
                    <PopularCourses />
                    <Steps />
                    <Stories />
                    <Reviews />
                    <Faq />
                </main>
                <Footer />
            </div>
        </>
    );
}
