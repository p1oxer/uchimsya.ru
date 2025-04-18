import React from "react";
import Hero from "../Hero";
import Advantages from "../Advantages/Advantages";
import PopularCourses from "../PopularCourses/PopularCourses";
import Steps from "../Steps/Steps";
import Reviews from "../Reviews/Reviews";
export default function Home() {
    return (
        <>
            <Hero />
            <Advantages />
            <PopularCourses />
            <Steps />
            <Reviews />
        </>
    );
}
