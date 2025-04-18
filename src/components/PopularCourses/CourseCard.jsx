import React from "react";

export default function CourseCard({ img, title, duration, description }) {
    return (
        <a href="#" className="course-card">
            <div className="course-card__img">
                <img src={`./img/popularCourses/${img}.jpg`} alt="" />
            </div>
            <div className="course-card__body">
                <div className="course-card__title heading-small">{title}</div>
                <p className="course-card__duration">{duration}</p>
                <p className="course-card__description text">{description}</p>
            </div>
        </a>
    );
}
