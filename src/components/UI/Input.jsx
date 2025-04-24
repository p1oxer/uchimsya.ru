import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function Input(params) {
    return (
        <div className="input-box">
            {params.search ? (
                <IoSearchOutline className="icon-search" size={20} color="#6e6e6e" />
            ) : null}
            <input {...params} />
        </div>
    );
}
