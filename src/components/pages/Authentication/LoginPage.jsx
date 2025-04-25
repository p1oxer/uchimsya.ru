import React, { useState } from "react";
import LoginForm from "./LoginForm";
import BackgroundImage from "../../UI/BackgroundImage";
import { UserAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const { session } = UserAuth();

    return (
        <>
            {session ? (
                <Navigate to={"/account"} />
            ) : (
                <section className="auth-page">
                    <BackgroundImage second />
                    <div className="container">
                        <h1 className="auth-title block-title">Авторизация</h1>
                        <LoginForm />
                    </div>
                </section>
            )}
        </>
    );
}
