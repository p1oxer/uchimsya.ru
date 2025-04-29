import React from "react";
import CourseCard from "./CourseCard";
import BackgroundImage from "../UI/BackgroundImage";
import { Link } from "react-router-dom";

export default function PopularCourses() {
    const popularCourses = [
        {
            img: "python",
            title: "Основы программирования на Python",
            duration: "3 месяца",
            description:
                "Научитесь создавать программы, автоматизировать задачи и работать с данными на популярном языке Python.",
            link: "/courses/vvedenie-v-programmirovanie-na-python",
        },
        {
            img: "maths",
            title: "Подготовка к ОГЭ по математике",
            duration: "6 месяцев",
            description:
                "Освойте все темы, необходимые для успешной сдачи ОГЭ по математике, с подробным разбором задач и тестов.",
            link: "/courses/kurs-po-podgotovke-k-oge-po-matematike",
        },
        {
            img: "english",
            title: "Английский язык для начинающих",
            duration: "4 месяца",
            description:
                "Изучите базовые правила грамматики, пополните словарный запас и научитесь уверенно общаться на английском.",
            link: "/courses/angliyskiy-yazyk-dlya-nachinayuschih",
        },
        {
            img: "webDesign",
            title: "Веб-дизайн с нуля",
            duration: "2 месяца",
            description:
                "Узнайте, как создавать современные и удобные сайты с помощью инструментов Figma и HTML/CSS.",
            link: "/courses/kurs-po-graficheskomu-dizaynu-v-figma",
        },
        {
            img: "finances",
            title: "Финансовая грамотность для подростков",
            duration: "1 месяц",
            description:
                "Получите основы управления личными финансами, инвестиций и планирования бюджета.",
            link: "/courses/finansovaya-gramotnost-dlya-podrostkov",
        },
        {
            img: "graphicDesign",
            title: "Основы графического дизайна",
            duration: "3 месяца",
            description:
                "Освойте базовые принципы композиции, типографики и цветоведения для создания профессиональных проектов.",
            link: "/courses/kurs-po-graficheskomu-dizaynu",
        },
    ];

    return (
        <section className="popular-courses section">
            <BackgroundImage third isAnimated={true} />
            <div className="container">
                <div className="popular-courses__title block-title">Популярные курсы</div>
                <div className="popular-courses__body body-popular-courses">
                    {popularCourses.map((course, index) =>
                        course.img ? (
                            <CourseCard
                                key={index}
                                img={course.img}
                                title={course.title}
                                duration={course.duration}
                                description={course.description}
                                link={course.link}
                            />
                        ) : null
                    )}
                </div>
                <Link className="button-main popular-courses__button" to={"/courses"}>
                    Все курсы
                </Link>
            </div>
        </section>
    );
}
