import React, { useState, useEffect } from "react";
import coursesData from "../../data/courses.json";
export default function CoursesList() {
    return (
        <div className="courses__body body-courses">
            {coursesData.map((course, index) => (
                <div key={index}>
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
}
