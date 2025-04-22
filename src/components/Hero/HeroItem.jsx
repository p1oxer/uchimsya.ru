import React from "react";
import Image from "../UI/Image";
export default function HeroItem({ baseName, folder }) {
    const basePath = `/assets/images/${folder}/${baseName}.jpg`;
    return (
        <>
            <div className="bg"></div>
            <div className="hero__bg">
                <Image
                    imagePath={basePath}
                    alt={baseName}
                    sizes={["1920", "1200", "900", "500"]}
                />
            </div>
        </>
    );
}
