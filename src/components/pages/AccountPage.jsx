import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function AccountPage() {
    const { session, logoutUser } = UserAuth();
    const navigate = useNavigate();

    async function handleLogoutUser(e) {
        e.preventDefault();
        try {
            await logoutUser()
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="account">
            <div className="container">
                <p>hello, {session?.user?.email}</p>
                <button
                    onClick={handleLogoutUser}
                    className="button-main button-main-mini"
                >
                    Выйти
                </button>
            </div>
        </section>
    );
}
