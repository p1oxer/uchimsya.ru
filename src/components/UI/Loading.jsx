import React from "react";

export default function Loading({ isFading }) {
    return (
        <div className={isFading ? `loading-screen fade-out` : "loading-screen"}>
            <div className="loader"></div>
        </div>
    );
}
