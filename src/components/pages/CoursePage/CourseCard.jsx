import React from "react";
import CourseInfo from "./CourseInfo";
import CoursePageImg from "./CoursePageImg";

export default function CourseCard({ course, handleClick, isPurchased }) {
    return (
        <div className="page-course__card">
            <div className="page-course__inner">
                <p className="page-course__name heading-medium">{course?.name}</p>
                <p className="page-course__description text">{course?.about}</p>
                <CourseInfo
                    course={course}
                    handleClick={handleClick}
                    isPurchased={isPurchased}
                />
            </div>
            <CoursePageImg alt={course?.name} category={course?.category} />
        </div>
    );
}
