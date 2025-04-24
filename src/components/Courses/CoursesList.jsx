import React, { useState, useEffect } from "react";
import coursesData from "../../data/courses.json";
import CoursesCard from "./CoursesCard";
export default function CoursesList() {
    const uniqueCategories = [...new Set(coursesData.map((course) => course.category))];
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(coursesData);
    }, []);
    return (
        <div className="courses__body body-courses">
            {courses.map((course) => (
                <CoursesCard course={course} key={course.name} />
            ))}
        </div>
    );
}
