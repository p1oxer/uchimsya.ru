import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../../supaBaseClient";
import Loading from "../../UI/Loading";
import CoursePageImg from "./coursePageImg";
import { CiClock2 } from "react-icons/ci";
import { BsBookmarkStar } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import Image from "../../UI/Image";
import BackgroundImage from "../../UI/BackgroundImage";
import Accordion from "../../UI/Accordion";
export default function CoursePage() {
    const { courseName } = useParams();
    const [course, setCourse] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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

    return (
        <>
            <Loading isFading={!loading} />
            <section className="page-course">
                <BackgroundImage third />
                <div className="container">
                    <div className="page-course__body">
                        <div className="page-course__card">
                            <div className="page-course__inner">
                                <p className="page-course__name heading-medium">
                                    {course?.name}
                                </p>
                                <p className="page-course__description text">
                                    {course?.about}
                                </p>
                                <div className="page-course__info">
                                    <div className="page-course__attributes">
                                        <div className="page-course__info--item">
                                            <CiClock2 color="#558564" size={40} />
                                            <p>{course?.duration}</p>
                                        </div>
                                        <div className="page-course__info--item">
                                            <BsBookmarkStar color="#558564" size={35} />
                                            <p>Средний уровень</p>
                                        </div>
                                        <div className="page-course__info--item">
                                            <TbCategory color="#558564" size={35} />
                                            <p>{course?.category}</p>
                                        </div>
                                    </div>
                                    <div className="page-course__bottom">
                                        <p className="page-course__price heading-small">
                                            {course?.price}₽
                                        </p>
                                        <button
                                            type={"button"}
                                            className="page-course__button button-main"
                                        >
                                            Купить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <CoursePageImg
                                alt={course?.name}
                                category={course?.category}
                            />
                        </div>

                        <p className="page-course__heading heading-small">
                            Программа курса
                        </p>
                        <div className="page-course__program">
                            {course?.program.map((item, index) => {
                                return (
                                    <Accordion key={index} title={item}>
                                        <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                                        <p>2. Adipisicing elit. </p>
                                        <p>3. Fugiat enim doloremque similique.</p>
                                        <p>4. Natus possimus fuga commodi</p>
                                        <p>5. Sint itaque voluptate voluptates.</p>
                                    </Accordion>
                                );
                            })}
                        </div>
                        <p className="page-course__heading heading-small">
                            Преподаватель курса
                        </p>
                        <div className="page-course__teacher teacher-course">
                            <div className="teacher-course__body">
                                <div className="teacher-course__img">
                                    <Image
                                        alt={"Преподаватель"}
                                        imagePath={"/assets/images/teacher/teacher.jpg"}
                                        sizes={["500"]}
                                    />
                                </div>
                                <div className="teacher-course__info">
                                    <div className="teacher-course__name heading-medium">
                                        {teacher?.name}
                                    </div>
                                    <div className="teacher-course__occupation heading-small">
                                        {teacher?.occupation}
                                    </div>
                                    <div className="teacher-course__text text">
                                        {teacher?.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
