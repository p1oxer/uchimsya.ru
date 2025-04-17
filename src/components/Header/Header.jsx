import React, { useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Burger from "./Burger";
import { Link } from "react-router-dom";
export default function Header() {
    const navigation = [
        { text: "Наши курсы", link: "/" },
        { text: "О нас", link: "/" },
        { text: "Контакты", link: "/" },
    ];
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__body body-header">
                        <Link to={"/"} className="body-header__logo">
                            учимся.<span>ру</span>
                        </Link>
                        <HeaderNav
                            list={navigation}
                            direction={"horizontal"}
                            modificator={"header__nav"}
                        />
                        <a className="header__button" href="#">
                            Вход
                        </a>
                        <Burger />
                    </div>
                </div>
            </header>
        </>
    );
}
