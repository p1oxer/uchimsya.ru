import React from "react";
import Image from "../UI/Image";

export default function CourseCard({ img, title, duration, description }) {
    return (
        <a href="#" className="course-card">
            <div className="course-card__img">
                <Image imagePath={img} alt={title} />
            </div>
            <div className="course-card__body">
                <div className="course-card__title heading-small">{title}</div>
                <p className="course-card__duration">{duration}</p>
                <p className="course-card__description text">{description}</p>
            </div>
        </a>
    );
}
