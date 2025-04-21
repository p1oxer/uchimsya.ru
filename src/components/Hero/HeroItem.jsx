import React from "react";
import Image from "../UI/Image";
export default function HeroItem({ path, index }) {
    return (
        <>
            <div className="bg"></div>
            <div className="hero__bg">
                <Image imagePath={path} alt={`Hero Image ${index + 1}`} />

                {/* <img loading="lazy" src={path} alt={`Hero Image ${index}`} /> */}
            </div>
        </>
    );
}
