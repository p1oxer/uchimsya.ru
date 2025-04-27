import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../../supaBaseClient";
import Loading from "../../UI/Loading";
import BackgroundImage from "../../UI/BackgroundImage";
import { useUser } from "../../../context/UserContext";
import Modal from "../../UI/Modal";
import CourseTeacher from "./CourseTeacher";
import CourseProgram from "./CourseProgram";
import CourseCard from "./CourseCard";
export default function CoursePage() {
    const { user } = useUser();
    const { courseName } = useParams();
    const [course, setCourse] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPurchased, setIsPurchased] = useState(false); // Новое состояние
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function fetchCourse() {
            const { data, error } = await supabase
                .from("courses")
                .select("*")
                .eq("slug", courseName)
                .single();

            if (error) {
                console.error("Произошла ошибка! ", error);
                navigate("/404");
            } else {
                setCourse(data);
            }
        }
        fetchCourse();
    }, [courseName]);

    useEffect(() => {
        if (!course?.category) return;
        async function fetchTeacher() {
            const { data, error } = await supabase
                .from("teachers")
                .select("*")
                .eq("category", course?.category)
                .single();
            if (error) {
                console.error("Произошла ошибка! ", error);
            } else {
                setTeacher(data);
            }
            setLoading(false);
        }
        fetchTeacher();
    }, [course]);

    // Функция для проверки, купил ли пользователь курс
    useEffect(() => {
        async function checkIfPurchased() {
            if (!user || !course) return;

            const { data, error } = await supabase
                .from("user_courses")
                .select("*")
                .eq("user_id", user.id)
                .eq("course_id", course.id);

            if (error) {
                console.error("Ошибка при проверке покупки курса:", error);
            } else {
                setIsPurchased(data.length > 0); // Если запись найдена, курс уже куплен
            }
        }
        checkIfPurchased();
    }, [user, course]);

    function handleClick() {
        if (!user) {
            alert("Вы должны войти в аккаунт, чтобы купить курс.");
            navigate("/login");
            return;
        }

        if (isPurchased) {
            alert("Вы уже приобрели этот курс.");
            return;
        }

        purchaseCourse(user.id, course.id);
        setOpen(true);
    }

    async function purchaseCourse(userId, courseId) {
        const { error } = await supabase
            .from("user_courses")
            .insert({ user_id: userId, course_id: courseId });

        if (error) {
            console.error("Произошла ошибка", error);
            return { success: false, error };
        }

        setIsPurchased(true); // Обновляем состояние после успешной покупки
        return { success: true };
    }

    return (
        <>
            <Loading isFading={!loading} />
            <section className="page-course">
                <Modal onClose={() => setOpen(false)} open={open}>
                    <p className="heading-medium">
                        Вы успешно приобрели курс! {course?.name}
                    </p>
                    <p className="text">Спасибо, что выбираете нас!</p>
                </Modal>
                <BackgroundImage third />
                <div className="container">
                    <div className="page-course__body">
                        <CourseCard
                            course={course}
                            handleClick={handleClick}
                            isPurchased={isPurchased}
                        />
                        <CourseProgram courseProgram={course?.program} />
                        <CourseTeacher teacher={teacher} />
                    </div>
                </div>
            </section>
        </>
    );
}
