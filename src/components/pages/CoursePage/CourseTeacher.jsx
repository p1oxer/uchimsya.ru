import React from "react";
import Image from "../../UI/Image";
export default function CourseTeacher({ teacher }) {
    return (
        <>
            <p className="page-course__heading heading-small">Преподаватель курса</p>
            <div className="page-course__teacher teacher-course">
                <div className="teacher-course__body">
                    <div className="teacher-course__img">
                        <Image
                            alt={"Преподаватель"}
                            imagePath={`/assets/images/teacher/${teacher?.category}.jpg`}
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
                        <div className="teacher-course__text text">{teacher?.text}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
