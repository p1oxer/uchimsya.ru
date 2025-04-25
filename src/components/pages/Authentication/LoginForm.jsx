import React, { useState } from "react";
import Input from "../../UI/Input";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
export default function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { session, loginUser } = UserAuth();
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await loginUser(email, password);
            if (result.success) {
                navigate("/account");
            }
        } catch (error) {
            setError("Произошла ошибка", error);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Электронная почта*</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                placeholder={"E-mail*"}
                id={"email"}
                required
            />
            <label htmlFor="password">Пароль*</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                placeholder={"Пароль*"}
                id={"password"}
                required
            />
            <button type="submit" className="auth-button button-main button-main-mini">
                Войти
            </button>
            {error && <p className="text error">{error}</p>}
            <p className="text">
                Ещё нет аккаунта? <Link to={"/register"}>Регистрация</Link>
            </p>
        </form>
    );
}
