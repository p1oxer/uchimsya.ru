import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroItem from "./HeroItem";
import { useImageLoader } from "../../hooks/useImageLoader";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Hero = () => {
    const imageNames = useImageLoader("hero");
    const { user } = useUser();
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__body body-hero">
                    <h1 className="body-hero__title">Учись сегодня — достигай завтра</h1>
                    <p className="body-hero__subtitle">
                        Научитесь новому или углубите свои знания с помощью наших курсов.
                        Мы делаем обучение доступным и увлекательным!
                    </p>
                    <Link
                        to={user ? "/courses" : "/login"}
                        className="body-hero__button button-main"
                    >
                        Начать учиться <FaArrowRightLong />
                    </Link>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                slidesPerView={1}
                speed={800}
                effect={"fade"}
                className="hero__swiper"
                allowTouchMove={false}
                autoplay={{
                    enabled: true,
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {imageNames.map((name, index) => (
                    <SwiperSlide key={index}>
                        <HeroItem baseName={name} folder="hero" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
