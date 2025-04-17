import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
    useEffect(() => {
        const headerHeight = document.querySelector(".header").clientHeight;
        headerHeight
            ? (document.querySelector(".hero__body").style.paddingTop =
                  headerHeight + "px")
            : null;
    }, []);
    return (
        <section className="hero">
            <Swiper
                slidesPerView={1}
                direction="horizontal"
                loop={true}
                speed={1000}
                effect={"fade"}
                className="hero__swiper"
                modules={[EffectFade]}
            >
                <SwiperSlide>
                    <div className="bg"></div>
                    <div className="hero__bg">
                        <img src="./img/bg.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg"></div>
                    <div className="hero__bg">
                        <img src="./img/bg2.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <div className="hero__body">123</div>
            </div>
        </section>
    );
};

export default HeroSection;
