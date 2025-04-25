import React, { useState, useEffect } from "react";
import coursesData from "../../data/courses.json";
import CoursesCard from "./CoursesCard";

export default function CoursesList({ searchQuery, selectedCategory, selectedDuration }) {
    const [allCourses, setAllCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [visibleCoursesCount, setVisibleCoursesCount] = useState(10);

    // Инициализация всех курсов
    useEffect(() => {
        setAllCourses(coursesData);
        setFilteredCourses(coursesData);
    }, []);

    // Фильтрация при изменении searchQuery, selectedCategory или selectedDuration
    useEffect(() => {
        let filtered = allCourses;

        // Поиск по имени и категории
        if (searchQuery) {
            filtered = filtered.filter((course) => {
                return (
                    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
        }

        // Фильтр по категории
        if (selectedCategory) {
            filtered = filtered.filter((course) => course.category === selectedCategory);
        }

        // Фильтр по длительности
        if (selectedDuration) {
            filtered = filtered.filter((course) => course.duration === selectedDuration);
        }

        setFilteredCourses(filtered);
        setVisibleCoursesCount(10); // Сбрасываем количество видимых курсов при новом фильтре
    }, [searchQuery, selectedCategory, selectedDuration, allCourses]);

    // Показать больше курсов
    const showMoreCourses = () => {
        setVisibleCoursesCount((prevCount) => prevCount + 10);
    };

    return (
        <>
            <div className="courses__list">
                <div className="courses__body body-courses">
                    {filteredCourses.length > 0 ? (
                        <>
                            {/* Отображаем только первые visibleCoursesCount курсов */}
                            {filteredCourses
                                .slice(0, visibleCoursesCount)
                                .map((course) => (
                                    <CoursesCard course={course} key={course.name} />
                                ))}
                        </>
                    ) : (
                        <p className="heading-small">Курсы не найдены!</p>
                    )}
                </div>
                {visibleCoursesCount < filteredCourses.length && (
                    <button
                        className="button-main courses__button-showmore"
                        onClick={showMoreCourses}
                    >
                        Показать ещё
                    </button>
                )}
            </div>
        </>
    );
}
