import React, { useState } from "react";
export default function Input({ ...params }) {
    const [value, setValue] = useState("");
    return (
        <div className="input-box">
            <input value={value} onChange={(e) => setValue(e.target.value)} {...params} />
        </div>
    );
}
