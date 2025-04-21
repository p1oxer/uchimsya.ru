import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StoriesItem from "./StoriesItem";
import { Navigation } from "swiper/modules";
import SwiperButton from "../UI/SwiperButton";
import { useImageLoader } from "../../hooks/useImageLoader";
import { mapCoursesWithImages } from "../../helpers";

export default function Stories() {
    const imagePaths = useImageLoader("stories");
    const successStories = [
        {
            name: "Анна Петрова",
            oldProfession: "Бухгалтер",
            newProfession: "Frontend-разработчик",
            courseName: "Основы веб-разработки: HTML, CSS, JavaScript",
            story: "Раньше я работала бухгалтером и каждый день чувствовала, что это не моё. Хотелось творить и создавать что-то новое. Когда я узнала о курсах по программированию, решила попробовать. Сначала было сложно, но я не сдавалась. Сейчас работаю frontend-разработчиком и счастлива, что нашла дело, которое приносит радость",
            img: "01",
        },
        {
            name: "Дмитрий Иванов",
            oldProfession: "Менеджер по продажам",
            newProfession: "Data Scientist",
            courseName: "Анализ данных с Python: от новичка до профессионала",
            story: "Я всегда любил математику и аналитику, но моя работа в продажах не давала возможности развиваться в этом направлении. Пройдя курс по анализу данных, я открыл для себя новый мир. Теперь я data scientist в крупной компании и каждый день решаю интересные задачи",
            img: "02",
        },
        {
            name: "Екатерина Смирнова",
            oldProfession: "Домохозяйка",
            newProfession: "Учитель английского языка",
            courseName: "Говорите уверенно: курс английского языка для начинающих",
            story: "После рождения ребенка я долгое время была дома и чувствовала, что теряю связь с внешним миром. Решила начать учить английский язык, чтобы не только самой стать увереннее, но и помочь детям с их учебой. Курсы помогли мне выучить язык и даже начать преподавать его. Теперь я учу других и получаю огромное удовольствие от этого",
            img: "03",
        },
        {
            name: "Алексей Кузнецов",
            oldProfession: "Офисный работник",
            newProfession: "Профессиональный фотограф",
            courseName: "Искусство фотографии: от любителя до профессионала",
            story: "Всегда увлекался фотографией, но считал это просто хобби. После прохождения курса я понял, что могу превратить свое увлечение в профессию. Сейчас я работаю фотографом и снимаю свадьбы, портреты и рекламные кампании. Это то, о чем я всегда мечтал!",
            img: "04",
        },
    ];
    const storiesWithImages = mapCoursesWithImages(successStories, imagePaths);

    const swiperRef = useRef();
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);

    return (
        <section className="stories section">
            <div className="container">
                <div className="stories__title block-title">Истории наших студентов</div>
                <p className="stories__subtitle heading-small">
                    Вдохновляющие истории тех, кто учился с нами
                </p>
            </div>
            <div className="stories__body body-stories">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: swiperButtonNext.current,
                        prevEl: swiperButtonPrev.current,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {storiesWithImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <StoriesItem item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
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
                    onClick={() => {
                        swiperRef.current.slideNext();
                        console.log("next");
                    }}
                    ref={swiperButtonNext}
                />
            </div>
        </section>
    );
}
