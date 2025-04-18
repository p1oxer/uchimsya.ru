import React from "react";
import CourseCard from "./CourseCard";
import ButtonMain from "../UI/ButtonMain";
import BackgroundImage from "../UI/BackgroundImage";

export default function PopularCourses() {
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
    return (
        <section className="popular-courses section">
            <BackgroundImage third />
            <div className="container">
                <div className="popular-courses__title block-title">Популярные курсы</div>
                <div className="popular-courses__body body-popular-courses">
                    {popularCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            img={course.img}
                            title={course.title}
                            duration={course.duration}
                            description={course.description}
                        />
                    ))}
                </div>
                <ButtonMain text={"Все курсы"} modificator={"popular-courses__button"} />
            </div>
        </section>
    );
}
