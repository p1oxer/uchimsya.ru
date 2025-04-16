import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Burger() {
    const [isOpened, setIsOpened] = useState(false);
    function handleClick() {
        setIsOpened(!isOpened);
        document.body.classList.toggle("menu-open");
    }
    const navigation = [{ text: "Главная", link: "/" }];
    return (
        <div className={isOpened ? "header__menu menu" : "header__menu menu"}>
            <button onClick={handleClick} type="button" className="menu__icon icon-menu">
                <span></span>
            </button>
            <nav className="menu__body">
                <ul className="menu__list">
                    {navigation.map((item, index) => {
                        return (
                            <li key={index} className="menu__item">
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
