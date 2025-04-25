import React from "react";
import RegisterForm from "./RegisterForm";
import BackgroundImage from "../../UI/BackgroundImage";
import { UserAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function RegisterPage() {
    const { session } = UserAuth();

    return (
        <>
            {session ? (
                <Navigate to={"/account"} />
            ) : (
                <section className="auth-page">
                    <BackgroundImage first />
                    <div className="container">
                        <h1 className="auth-title block-title">Регистрация</h1>
                        <RegisterForm />
                    </div>
                </section>
            )}
        </>
    );
}
