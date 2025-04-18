import React from "react";
import ReviewsItem from "./reviewsItem";
import BackgroundImage from "../UI/BackgroundImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function reviews() {
    const reviews = [
        {
            text: "Начав заниматься на Учимся.ру полгода назад, я заметно расширила свой кругозор и профессиональные навыки. Особенно ценно то, что курсы разработаны с учетом разных уровней подготовки - от новичка до продвинутого уровня. Отдельное спасибо за активное сообщество: обсуждения в комментариях часто помогают разобраться со сложными темами быстрее, чем это сделал бы преподаватель.",
            name: "Анна Ахматова",
            occupation:
                "Студентка 2 курса Политехнического университета, Санкт-Петербург",
        },
        {
            text: "После нескольких неудачных попыток найти хорошую образовательную платформу, я наконец-то остановился на Учимся.ру. Здесь есть все - от школьной программы до специализированных IT-курсов. За год обучения я успел подтянуть математику, освоить Python и даже начал учить испанский. Разнообразие курсов поражает - каждый найдет что-то для себя.",
            name: "Иван Петров",
            occupation: "Преподаватель информатики",
        },
        {
            text: "Учимся.ру стал для меня настоящим открытием в мире онлайн-образования. Три года назад я просто хотел подтянуть английский, а теперь постоянно нахожу новые интересные курсы - от финансовой грамотности до игры на гитаре. Особо хочу отметить качественную подачу материала и интерактивный формат занятий. Это не просто просмотры видео - это полноценное погружение в учебный процесс.",
            name: "Пётр Иванов",
            occupation: "Работник Газпром",
        },
        {
            text: "Начав заниматься на Учимся.ру полгода назад, я заметно расширила свой кругозор и профессиональные навыки. Особенно ценно то, что курсы разработаны с учетом разных уровней подготовки - от новичка до продвинутого уровня. Отдельное спасибо за активное сообщество: обсуждения в комментариях часто помогают разобраться со сложными темами быстрее, чем это сделал бы преподаватель.",
            name: "Анна Ахматова",
            occupation:
                "Студентка 2 курса Политехнического университета, Санкт-Петербург",
        },
        {
            text: "После нескольких неудачных попыток найти хорошую образовательную платформу, я наконец-то остановился на Учимся.ру. Здесь есть все - от школьной программы до специализированных IT-курсов. За год обучения я успел подтянуть математику, освоить Python и даже начал учить испанский. Разнообразие курсов поражает - каждый найдет что-то для себя.",
            name: "Иван Петров",
            occupation: "Преподаватель информатики",
        },
        {
            text: "Учимся.ру стал для меня настоящим открытием в мире онлайн-образования. Три года назад я просто хотел подтянуть английский, а теперь постоянно нахожу новые интересные курсы - от финансовой грамотности до игры на гитаре. Особо хочу отметить качественную подачу материала и интерактивный формат занятий. Это не просто просмотры видео - это полноценное погружение в учебный процесс.",
            name: "Пётр Иванов",
            occupation: "Работник Газпром",
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
                    // spaceBetween={15}
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
                                    img={index + 1}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
