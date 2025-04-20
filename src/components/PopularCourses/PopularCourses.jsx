import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import ButtonMain from "../UI/ButtonMain";
import BackgroundImage from "../UI/BackgroundImage";
import { loadImages } from "../../helpers";

export default function PopularCourses() {
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        const images = import.meta.glob(
            "../../assets/images/popularCourses/*.{png,jpg,jpeg,svg}"
        );
        loadImages(images).then(setImagePaths);
    }, []);

    const popularCourses = [
        {
            img: "python",
            title: "Основы программирования на Python",
            duration: "3 месяца",
            description:
                "Научитесь создавать программы, автоматизировать задачи и работать с данными на популярном языке Python.",
        },
        {
            img: "maths",
            title: "Подготовка к ЕГЭ по математике",
            duration: "6 месяцев",
            description:
                "Освойте все темы, необходимые для успешной сдачи ЕГЭ по математике, с подробным разбором задач и тестов.",
        },
        {
            img: "english",
            title: "Английский язык для начинающих",
            duration: "4 месяца",
            description:
                "Изучите базовые правила грамматики, пополните словарный запас и научитесь уверенно общаться на английском.",
        },
        {
            img: "web-design",
            title: "Веб-дизайн с нуля",
            duration: "2 месяца",
            description:
                "Узнайте, как создавать современные и удобные сайты с помощью инструментов Figma и HTML/CSS.",
        },
        {
            img: "finances",
            title: "Финансовая грамотность",
            duration: "1 месяц",
            description:
                "Получите основы управления личными финансами, инвестиций и планирования бюджета.",
        },
        {
            img: "graphic-design",
            title: "Основы графического дизайна",
            duration: "3 месяца",
            description:
                "Освойте базовые принципы композиции, типографики и цветоведения для создания профессиональных проектов.",
        },
    ];

    // Создаем новый массив курсов с путями изображений
    const coursesWithImages = popularCourses.map((course) => {
        const imagePath = imagePaths.find((path) => {
            const imageName = path.split("/").pop().split(".")[0]; // Получаем имя файла без расширения
            return imageName === course.img; // Сравниваем с img
        });
        return {
            ...course,
            img: imagePath || "", // Если изображение не найдено, присваиваем пустую строку
        };
    });

    return (
        <section className="popular-courses section">
            <BackgroundImage third isAnimated={true} />
            <div className="container">
                <div className="popular-courses__title block-title">Популярные курсы</div>
                <div className="popular-courses__body body-popular-courses">
                    {coursesWithImages.map((course, index) =>
                        course.img ? ( // Проверяем, есть ли путь к изображению
                            <CourseCard
                                key={index}
                                img={course.img} // Передаем путь к изображению
                                title={course.title}
                                duration={course.duration}
                                description={course.description}
                            />
                        ) : null // Если изображения нет, ничего не отображаем
                    )}
                </div>
                <ButtonMain text={"Все курсы"} modificator={"popular-courses__button"} />
            </div>
        </section>
    );
}
