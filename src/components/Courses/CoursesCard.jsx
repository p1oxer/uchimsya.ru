import React from "react";
import { translit } from "../../helpers";
export default function CoursesCard({ course }) {
    return (
        <article className="courses__card card-courses">
            <div className="card-courses__body">
                <div className="card-courses__top">
                    <div className="card-courses__info">
                        <a
                            href={`courses/${translit(course.name)}`}
                            className="card-courses__name heading-small"
                            lang="ru"
                        >
                            {course.name}
                        </a>
                        <p className="card-courses__description text">
                            {course.description}
                        </p>
                    </div>
                    <div className="card-courses__img">
                        <source
                            type="image/webp"
                            srcSet={`/assets/images/coursesCategories/${course.category}-300.webp`}
                            media={`(min-width: 320px)`}
                        />
                        <source
                            type="image/avif"
                            srcSet={`/assets/images/coursesCategories/${course.category}-300.avif`}
                            media={`(min-width: 320px)`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`/assets/images/coursesCategories/${course.category}-300.jpg`}
                            media={`(min-width: 320px)`}
                        />
                        <img
                            loading="lazy"
                            src={`/assets/images/coursesCategories/${course.category}-300.jpg`}
                            alt={course.name}
                        />
                    </div>
                </div>
                <div className="card-courses__bottom">
                    <span className="card-courses__duration">
                        Срок обучения: {course.duration}
                    </span>
                    <a
                        href={`courses/${translit(course.name)}`}
                        className="card-courses__button button-main button-main-mini"
                    >
                        Подробнее
                    </a>
                </div>
            </div>
        </article>
    );
}
