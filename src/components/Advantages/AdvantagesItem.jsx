import React from "react";

export default function AdvantagesItem({ icon, title, text }) {
    return (
        <div className="body-advantages__item item-advantages">
            <div className="item-advantages__icon">{icon}</div>
            <p className="item-advantages__title heading-small">{title}</p>
            <p className="item-advantages__text text">{text}</p>
        </div>
    );
}
