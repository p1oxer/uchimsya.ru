import React from "react";
import Input from "../UI/Input";
import CoursesList from "../Courses/CoursesList";

export default function CoursesPage() {
    return (
        <div className="courses-page">
            <div className="container">
                <Input
                    type="text"
                    placeholder={"Найти курс..."}
                    name=""
                    id=""
                    className="search"
                />
                <CoursesList />
            </div>
        </div>
    );
}
