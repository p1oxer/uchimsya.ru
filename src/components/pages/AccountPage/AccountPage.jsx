import React, { useState, useEffect } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import AdminPanel from "./AdminPanel";
import { supabase } from "../../../supaBaseClient";
import UserCoursesItem from "./UserCoursesItem";
import Loading from "../../UI/Loading";

export default function AccountPage() {
    const [userCourses, setUserCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { user, profile, logout } = useUser();

    async function handleLogoutUser(e) {
        e.preventDefault();
        try {
            await logout();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (!user) return; // Ждем user

        async function fetchUserCourses() {
            const { data, error } = await supabase
                .from("user_courses")
                .select("courses(name)")
                .eq("user_id", user.id);

            if (error) {
                console.error("Произошла ошибка", error);
            } else {
                setUserCourses(data);
            }
            setLoading(false);
        }

        fetchUserCourses();
    }, [user]);

    if (!user && loading) {
        // Пока user грузится, показываем лоадер
        return <Loading isFading={!loading} />;
    }

    if (!user) {
        return <div>Вы не авторизованы</div>;
    }

    if (loading) {
        return <Loading isFading={!loading} />;
    }
    return (
        <section className="account">
            <Loading isFading={!loading} />

            <div className="container">
                <section className="user-courses">
                    <p className="user-courses__title block-title">Мои курсы</p>
                    {userCourses.length > 0 ? (
                        <div className="user-courses__body">
                            {userCourses.map((item, index) => (
                                <UserCoursesItem key={index} name={item.courses.name} />
                            ))}
                        </div>
                    ) : (
                        <>
                            <p className="heading-small">У вас пока нет курсов.</p>
                            <Link
                                className="button-main button-main-mini"
                                to={"/courses"}
                            >
                                Начать учиться
                            </Link>
                        </>
                    )}
                </section>
                <button
                    onClick={handleLogoutUser}
                    className="button-main button-main-mini"
                >
                    Выйти
                </button>

                {profile?.is_admin && <AdminPanel />}
            </div>
        </section>
    );
}
