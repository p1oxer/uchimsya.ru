import React, { useRef } from "react";
import ReviewsItem from "./reviewsItem";
import BackgroundImage from "../UI/BackgroundImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperButton from "../UI/SwiperButton";
import { Navigation } from "swiper/modules";
import useImageLoader from "../../hooks/useImageLoader";
export default function reviews() {
    const imagePaths = useImageLoader("../../assets/images/reviews/*.{png,jpg,jpeg,svg}");
    const swiperRef = useRef();
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);

    function handleButtonDisabling(swiper) {
        if (swiper.isBeginning) {
            swiperButtonPrev.current?.classList.add("swiper-btn-disabled");
        } else {
            swiperButtonPrev.current?.classList.remove("swiper-btn-disabled");
        }
        if (swiper.isEnd) {
            swiperButtonNext.current?.classList.add("swiper-btn-disabled");
        } else {
            swiperButtonNext.current?.classList.remove("swiper-btn-disabled");
        }
    }
    const reviews = [
        {
            text: "Начав заниматься на Учимся.ру полгода назад, я заметно расширила свой кругозор и профессиональные навыки. Особенно ценно то, что курсы разработаны с учетом разных уровней подготовки - от новичка до продвинутого уровня. Отдельное спасибо за активное сообщество: обсуждения в комментариях часто помогают разобраться со сложными темами быстрее, чем это сделал бы преподаватель.",
            name: "Анна Ахматова",
            occupation:
                "Студентка 2 курса Политехнического университета, Санкт-Петербург",
            img: "1",
        },
        {
            text: "После нескольких неудачных попыток найти хорошую образовательную платформу, я наконец-то остановился на Учимся.ру. Здесь есть все - от школьной программы до специализированных IT-курсов. За год обучения я успел подтянуть математику, освоить Python и даже начал учить испанский. Разнообразие курсов поражает - каждый найдет что-то для себя.",
            name: "Иван Петров",
            occupation: "Преподаватель информатики",
            img: "2",
        },
        {
            text: "Учимся.ру стал для меня настоящим открытием в мире онлайн-образования. Три года назад я просто хотел подтянуть английский, а теперь постоянно нахожу новые интересные курсы - от финансовой грамотности до игры на гитаре. Особо хочу отметить качественную подачу материала и интерактивный формат занятий. Это не просто просмотры видео - это полноценное погружение в учебный процесс.",
            name: "Пётр Иванов",
            occupation: "Работник Газпром",
            img: "3",
        },
        {
            text: "Начав заниматься на Учимся.ру полгода назад, я заметно расширила свой кругозор и профессиональные навыки. Особенно ценно то, что курсы разработаны с учетом разных уровней подготовки - от новичка до продвинутого уровня. Отдельное спасибо за активное сообщество: обсуждения в комментариях часто помогают разобраться со сложными темами быстрее, чем это сделал бы преподаватель.",
            name: "Анна Ахматова",
            occupation:
                "Студентка 2 курса Политехнического университета, Санкт-Петербург",
            img: "1",
        },
        {
            text: "После нескольких неудачных попыток найти хорошую образовательную платформу, я наконец-то остановился на Учимся.ру. Здесь есть все - от школьной программы до специализированных IT-курсов. За год обучения я успел подтянуть математику, освоить Python и даже начал учить испанский. Разнообразие курсов поражает - каждый найдет что-то для себя.",
            name: "Иван Петров",
            occupation: "Преподаватель информатики",
            img: "2",
        },
        {
            text: "Учимся.ру стал для меня настоящим открытием в мире онлайн-образования. Три года назад я просто хотел подтянуть английский, а теперь постоянно нахожу новые интересные курсы - от финансовой грамотности до игры на гитаре. Особо хочу отметить качественную подачу материала и интерактивный формат занятий. Это не просто просмотры видео - это полноценное погружение в учебный процесс.",
            name: "Пётр Иванов",
            occupation: "Работник Газпром",
            img: "3",
        },
    ];
    return (
        <section className="reviews section">
            <BackgroundImage second isAnimated={true} />
            <div className="container">
                <div className="reviews__title block-title">Что о нас говорят?</div>
            </div>

            <div className="reviews__body body-reviews">
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    watchSlidesProgress={true} // Отслеживание прогресса слайдов
                    onClick={(swiper) => {
                        swiper.slideTo(swiper.clickedIndex); // Переключение на кликнутый слайд
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: swiperButtonNext.current,
                        prevEl: swiperButtonPrev.current,
                    }}
                    onReachBeginning={() => {
                        swiperButtonPrev.current?.classList.add("swiper-btn-disabled");
                    }}
                    onReachEnd={() => {
                        swiperButtonNext.current?.classList.add("swiper-btn-disabled");
                    }}
                    onSlideChange={(swiper) => handleButtonDisabling(swiper)}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleButtonDisabling(swiper);
                    }}
                >
                    {reviews.map((review, index) => {
                        return (
                            <SwiperSlide
                                className="body-reviews__swiper-slide"
                                key={index}
                            >
                                <ReviewsItem
                                    text={review.text}
                                    name={review.name}
                                    occupation={review.occupation}
                                    img={review.img}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="swiper-buttons">
                    <SwiperButton
                        direction={"prev"}
                        modificator={"stories-swiper"}
                        onClick={() => swiperRef.current.slidePrev()}
                        ref={swiperButtonPrev}
                    />
                    <SwiperButton
                        direction={"next"}
                        modificator={"stories-swiper"}
                        onClick={() => swiperRef.current.slideNext()} // Исправлено здесь
                        ref={swiperButtonNext}
                    />
                </div>
            </div>
        </section>
    );
}
