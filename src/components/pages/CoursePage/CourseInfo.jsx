import React from "react";
import { CiClock2 } from "react-icons/ci";
import { BsBookmarkStar } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
export default function CourseInfo({course,handleClick, isPurchased}) {
    return (
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
                    <p>{course?.category.replace(/([а-яё])([А-ЯЁ])/g, "$1 $2")}</p>
                </div>
            </div>
            <div className="page-course__bottom">
                <p className="page-course__price heading-small">{course?.price}₽</p>
                <button
                    type={"button"}
                    className="page-course__button button-main"
                    onClick={handleClick}
                    disabled={isPurchased}
                >
                    {isPurchased ? "Курс приобретён" : "Купить"}
                </button>
            </div>
        </div>
    );
}
