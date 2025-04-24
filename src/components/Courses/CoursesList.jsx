import React, { useState, useEffect } from "react";
import coursesData from "../../data/courses.json";
import CoursesCard from "./CoursesCard";
export default function CoursesList({ searchQuery }) {
    const uniqueCategories = [...new Set(coursesData.map((course) => course.category))];
    const [allCourses, setAllCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        setAllCourses(coursesData);
        setFilteredCourses(coursesData); // Изначально показываем все курсы
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const searchedCourses = allCourses.filter((course) => {
                return (
                    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setFilteredCourses(searchedCourses);
        } else {
            setFilteredCourses(allCourses);
        }
    }, [searchQuery, allCourses]);

    return (
        <div className="courses__body body-courses">
            {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                    <CoursesCard course={course} key={course.name} />
                ))
            ) : (
                <p className="heading-small">Курсы не найдены!</p>
            )}
        </div>
    );
}
