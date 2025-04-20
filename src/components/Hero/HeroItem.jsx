import React from "react";

export default function HeroItem({ path, index }) {
    return (
        <>
            <div className="bg"></div>
            <div className="hero__bg">
                <img loading="lazy" src={path} alt={`Hero Image ${index}`} />
            </div>
        </>
    );
}
