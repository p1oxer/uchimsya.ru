import React, { useState, useEffect, useCallback } from "react";
import CoursesCard from "./CoursesCard";
import { supabase } from "../../supaBaseClient";

export default function CoursesList({ searchQuery, selectedCategory, selectedDuration }) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const PAGE_SIZE = 10;

    // Универсальная функция построения запроса
    const buildQuery = useCallback(() => {
        let query = supabase.from("courses").select("*");

        if (searchQuery) {
            query = query.or(
                `name.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`
            );
        }

        if (selectedCategory && selectedCategory !== "all") {
            query = query.eq("category", selectedCategory);
        }

        if (selectedDuration) {
            query = query.eq("duration", selectedDuration);
        }

        return query;
    }, [searchQuery, selectedCategory, selectedDuration]);

    // Загрузка курсов (первая или следующая страница)
    const fetchCourses = useCallback(
        async (reset = false) => {
            setLoading(true);
            try {
                const currentPage = reset ? 0 : page;
                const from = currentPage * PAGE_SIZE;
                const to = from + PAGE_SIZE - 1;

                const query = buildQuery();
                const { data, error } = await query.range(from, to);

                if (error) {
                    console.error("Ошибка при загрузке курсов:", error.message);
                } else {
                    setCourses((prev) => (reset ? data : [...prev, ...data]));
                    setHasMore(data.length === PAGE_SIZE);
                    if (reset) setPage(1);
                    else setPage((prev) => prev + 1);
                }
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error.message);
            } finally {
                setLoading(false);
            }
        },
        [buildQuery, page]
    );

    // Загрузка при изменении фильтров
    useEffect(() => {
        fetchCourses(true);
    }, [searchQuery, selectedCategory, selectedDuration]);

    const loadMoreCourses = () => {
        if (!loading && hasMore) {
            fetchCourses();
        }
    };

    return (
        <>
            <div className="courses__list">
                <div className="courses__body body-courses">
                    {loading && (
                        <div className="loading">
                            <div className="loader"></div>
                        </div>
                    )}
                    {courses.length > 0 ? (
                        <>
                            {/* Отображаем только первые visibleCoursesCount курсов */}
                            {courses.map((course) => (
                                <CoursesCard course={course} key={course.name} />
                            ))}
                        </>
                    ) : !loading ? (
                        <p className="heading-small">Курсы не найдены!</p>
                    ) : null}
                </div>
                {!loading
                    ? hasMore && (
                          <button
                              className="button-main courses__button-showmore"
                              onClick={loadMoreCourses}
                              disabled={loading}
                          >
                              {loading ? "Загрузка..." : "Показать ещё"}
                          </button>
                      )
                    : null}
            </div>
        </>
    );
}
