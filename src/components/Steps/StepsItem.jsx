import React from "react";

export default function StepsItem({number, text}) {
    return (
        <div className="item-steps">
            <div className="item-steps__number">{number}</div>
            <div className="item-steps__text heading-medium">{text}</div>
        </div>
    );
}
