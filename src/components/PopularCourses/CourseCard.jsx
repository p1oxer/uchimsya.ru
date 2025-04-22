import React from "react";
import Image from "../UI/Image";

export default function CourseCard({ img, title, duration, description }) {
    const basePath = `/assets/images/popularCourses/${img}.jpg`;

    return (
        <a href="#" className="course-card">
            <div className="course-card__img">
                <Image imagePath={basePath} alt={title} sizes={["500"]} />
            </div>
            <div className="course-card__body">
                <div className="course-card__title heading-small">{title}</div>
                <p className="course-card__duration">{duration}</p>
                <p className="course-card__description text">{description}</p>
            </div>
        </a>
    );
}
