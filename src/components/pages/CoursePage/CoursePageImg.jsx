import React from "react";

export default function CoursePageImg({ category,alt }) {
    return (
        <div className="page-course__img">
            <source
                type="image/webp"
                srcSet={`/assets/images/coursesCategories/${category}-300.webp`}
                media={`(min-width: 320px)`}
            />
            <source
                type="image/avif"
                srcSet={`/assets/images/coursesCategories/${category}-300.avif`}
                media={`(min-width: 320px)`}
            />
            <source
                type="image/jpg"
                srcSet={`/assets/images/coursesCategories/${category}-300.jpg`}
                media={`(min-width: 320px)`}
            />
            <img
                loading="lazy"
                src={`/assets/images/coursesCategories/${category}-300.jpg`}
                alt={alt}
            />
        </div>
    );
}
