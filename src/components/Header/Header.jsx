import React, { useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { supabase } from "../../supaBaseClient";
import { useUser } from "../../context/UserContext";
export default function Header({ modificator }) {
    const { session } = UserAuth();
    const navigation = [
        { text: "Наши курсы", link: "/courses" },
        { text: "О нас", link: "/" },
        { text: "Контакты", link: "/" },
    ];
    const { user, profile, loading, logout } = useUser();
    console.log();
    return (
        <>
            <header className={modificator ? `header ${modificator}` : "header"}>
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
                        {session ? (
                            <Link to={"/account"} className="header__button">
                                {profile?.is_admin
                                    ? "Админ"
                                    : profile?.fullname
                                    ? profile?.fullname.split(" ")[1]
                                    : "Аккаунт"}
                            </Link>
                        ) : (
                            <Link to={"/login"} className="header__button">
                                Вход
                            </Link>
                        )}
                        <Burger />
                    </div>
                </div>
            </header>
        </>
    );
}
