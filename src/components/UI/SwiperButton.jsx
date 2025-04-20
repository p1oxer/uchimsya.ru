import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

export default function SwiperButton({
    direction,
    modificator,
    isAbsolute,
    onClick,
    ref,
}) {
    const swiper = useSwiper();

    return direction == "prev" ? (
        <button
            onClick={swiper ? () => swiper.slidePrev() : onClick}
            title="swiper-btn"
            type="button"
            ref={ref}
            className={
                isAbsolute
                    ? `swiper-btn ${modificator}__button-prev swiper-btn-prev swiper-btn-absolute`
                    : `swiper-btn ${modificator}__button-prev swiper-btn-prev`
            }
        >
            <IoIosArrowBack size={25} />
        </button>
    ) : (
        <button
            ref={ref}
            onClick={swiper ? () => swiper.slideNext() : onClick}
            title="swiper-btn"
            type="button"
            className={
                isAbsolute
                    ? `swiper-btn ${modificator}__button-next swiper-btn-next swiper-btn-absolute`
                    : `swiper-btn ${modificator}__button-next swiper-btn-next`
            }
        >
            <IoIosArrowForward size={25} />
        </button>
    );
}
