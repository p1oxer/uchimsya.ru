import React from "react";

export default function UserCoursesItem({ name }) {
    return (
        <div className="user-courses__item item-user-courses">
            <div className="item-user-courses__body">
                <p className="item-user-courses__name heading-medium">{name}</p>
                <button
                    type="button"
                    className="item-user-courses__button button-main button-main-mini"
                >
                    Продолжить учиться
                </button>
            </div>
        </div>
    );
}
