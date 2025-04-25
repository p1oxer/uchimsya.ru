import React from "react";
export default function Input({ ...params }) {
    return (
        <div className="input-box">
            {/* {isSearch ? (
                <IoSearchOutline className="icon-search" size={20} color="#6e6e6e" />
            ) : null} */}
            <input {...params} />
        </div>
    );
}
