import React from "react";

export default function ButtonMain({ text, modificator }) {
    return (
        <button type="button" className={`${modificator} button-main`}>
            {text}
        </button>
    );
}
