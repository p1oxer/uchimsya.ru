import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StoriesItem from "./StoriesItem";
import { Navigation } from "swiper/modules";
import SwiperButton from "../UI/SwiperButton";

export default function Stories() {
    const swiperRef = useRef();
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        const heroImages = import.meta.glob("../../assets/img/hero/*.{png,jpg,jpeg,svg}");

        // Получаем массив функций, возвращаемых `import.meta.glob`
        const imagePromises = Object.keys(heroImages).map((key) => heroImages[key]());

        // Используем Promise.all для получения всех путей к изображениям
        Promise.all(imagePromises).then((resolvedPaths) => {
            setImagePaths(resolvedPaths.map((img) => img.default)); // Получаем URL изображений
        });
    }, []);

    const successStories = [
        {
            name: "Анна Петрова",
            oldProfession: "Бухгалтер",
            newProfession: "Frontend-разработчик",
            courseName: "Основы веб-разработки: HTML, CSS, JavaScript",
            story: "Раньше я работала бухгалтером и каждый день чувствовала, что это не моё. Хотелось творить и создавать что-то новое...",
            imgIndex: 0, // Индекс изображения
        },
        {
            name: "Дмитрий Иванов",
            oldProfession: "Менеджер по продажам",
            newProfession: "Data Scientist",
            courseName: "Анализ данных с Python: от новичка до профессионала",
            story: "Я всегда любил математику и аналитику, но моя работа в продажах не давала возможности развиваться...",
            imgIndex: 1, // Индекс изображения
        },
        {
            name: "Екатерина Смирнова",
            oldProfession: "Домохозяйка",
            newProfession: "Учитель английского языка",
            courseName: "Говорите уверенно: курс английского языка для начинающих",
            story: "После рождения ребенка я долгое время была дома и чувствовала, что теряю связь с внешним миром...",
            imgIndex: 2, // Индекс изображения
        },
        {
            name: "Алексей Кузнецов",
            oldProfession: "Офисный работник",
            newProfession: "Профессиональный фотограф",
            courseName: "Искусство фотографии: от любителя до профессионала",
            story: "Всегда увлекался фотографией, но считал это просто хобби...",
            imgIndex: 3, // Индекс изображения
        },
    ];

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
                    {successStories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <StoriesItem item={item} imagePath={imagePaths[item.imgIndex]} /> {/* Передаем путь к изображению */}
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
                    onClick={() => swiperRef.current.slideNext()}
                    ref={swiperButtonNext}
                />
            </div>
        </section>
    );
}
