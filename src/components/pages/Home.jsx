import React from "react";
import Hero from "../Hero/Hero";
import Advantages from "../Advantages/Advantages";
import PopularCourses from "../PopularCourses/PopularCourses";
import Steps from "../Steps/Steps";
import Reviews from "../Reviews/Reviews";
import Faq from "../FAQ/Faq";
import Stories from "../Stories/Stories";
export default function Home() {
    return (
        <>
            <Hero />
            <Advantages />
            <PopularCourses />
            <Steps />
            <Stories />
            <Reviews />
            <Faq />
        </>
    );
}
