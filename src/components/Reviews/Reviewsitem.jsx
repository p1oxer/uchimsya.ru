import React from "react";

export default function Reviewsitem({ text, occupation, name, img }) {
    return (
        <div className="item-reviews">
            <div className="item-reviews__body">
                <div className="item-reviews__text text">{text}</div>
                <div className="item-reviews__person">
                    <div className="item-reviews__img">
                        <img src={`./img/reviews/${img}.jpg`} alt="" />
                    </div>
                    <div className="item-reviews__info">
                        <p className="item-reviews__name heading-small">{name}</p>
                        <p className="item-reviews__occupation">{occupation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
