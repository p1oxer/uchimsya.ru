import React, { useState } from "react";
import Input from "../UI/Input";
import CoursesList from "../Courses/CoursesList";
import coursesData from "../../data/courses.json";
import { IoSearchOutline } from "react-icons/io5";

export default function CoursesPage() {
    // Состояния для поиска и фильтров
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("");

    // Уникальные категории и длительности из данных
    const uniqueCategories = [...new Set(coursesData.map((course) => course.category))];
    const uniqueDurations = [...new Set(coursesData.map((course) => course.duration))];

    return (
        <div className="courses-page">
            <div className="container">
                <div className="courses-page__title block-title">
                    Все курсы ({coursesData.length})
                </div>
                <div className="courses-filters">
                    <div className="input-box">
                        <IoSearchOutline
                            className="icon-search"
                            size={20}
                            color="#6e6e6e"
                        />
                        <input
                            type="text"
                            placeholder={"Найти курс..."}
                            name=""
                            id=""
                            className="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* Фильтр по категориям */}
                    <div className="filter-group">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">Все категории</option>
                            {uniqueCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Фильтр по длительности */}
                    <div className="filter-group">
                        <select
                            value={selectedDuration}
                            onChange={(e) => setSelectedDuration(e.target.value)}
                        >
                            <option value="">Любая длительность</option>
                            {uniqueDurations.map((duration) => (
                                <option key={duration} value={duration}>
                                    {duration}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="courses-page__body">
                    <CoursesList
                        searchQuery={searchQuery}
                        selectedCategory={selectedCategory}
                        selectedDuration={selectedDuration}
                    />
                </div>
            </div>
        </div>
    );
}
