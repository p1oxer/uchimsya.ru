import React, { useState } from "react";
import Input from "../UI/Input";
import CoursesList from "../Courses/CoursesList";

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="courses-page__body">
                    <aside className="courses-filters"></aside>
                    <CoursesList searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    );
}
