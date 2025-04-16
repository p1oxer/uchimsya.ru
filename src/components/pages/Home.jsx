import React, { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const headerHeight = document.querySelector(".header").clientHeight;
        headerHeight
            ? (document.querySelector(".hero__body").style.paddingTop =
                  headerHeight + "px")
            : null;
    }, []);

    return (
        <section className="hero">
            <div className="bg">
                <img src="./img/bg.jpg" alt=""></img>
            </div>
            <div className="container">
                <div className="hero__body">123</div>
            </div>
        </section>
    );
}
