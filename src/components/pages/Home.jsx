import React from "react";
import Hero from "../Hero";
import Advantages from "../Advantages/Advantages";
import PopularCourses from "../PopularCourses/PopularCourses";
import Steps from "../Steps/Steps";
export default function Home() {
    return (
        <>
            <Hero />
            <Advantages />
            <PopularCourses />
            <Steps />
        </>
    );
}
