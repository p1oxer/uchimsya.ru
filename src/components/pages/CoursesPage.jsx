import React from "react";
import Input from "../UI/Input";
import CoursesList from "../Courses/CoursesList";

export default function CoursesPage() {
    return (
        <div className="courses-page">
            <div className="container">
                <div className="courses-page__title block-title">Все курсы</div>
                <Input
                    type="text"
                    placeholder={"Найти курс..."}
                    name=""
                    id=""
                    className="search"
                    search
                />
                <CoursesList />
            </div>
        </div>
    );
}
