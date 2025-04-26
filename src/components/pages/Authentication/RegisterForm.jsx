import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { InputMask } from "@react-input/mask";
export default function RegisterForm() {
    const [loading, setLoading] = useState();
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState("");
    const [error, setError] = useState();
    const [isPhoneComplete, setIsPhoneComplete] = useState(true);

    const { session, registerNewUser } = UserAuth();
    const navigate = useNavigate();

    // Функция для проверки полноты номера телефона
    const checkPhoneCompleteness = (phone) => {
        if (phone) {
            const digitsOnly = phone.replace(/\D/g, ""); // Убираем все символы, кроме цифр
            return digitsOnly.length === 11; // Полный номер содержит 11 цифр
        }
        return true;
    };

    useEffect(() => {
        setIsPhoneComplete(checkPhoneCompleteness(phone));
    }, [phone]);

    // Регистрация
    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true);
        try {
            if (!isPhoneComplete) {
                alert("Пожалуйста, введите полный номер телефона.");
                return;
            }
            const result = await registerNewUser(email, password, fullname, phone);
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
        <form onSubmit={handleRegister}>
            <label htmlFor="phone">Номер телефона</label>
            <InputMask
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                mask="+7 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                id={"phone"}
            />
            <label htmlFor="fullname">Фамилия Имя Отчество</label>
            <input
                onChange={(e) => setFullname(e.target.value)}
                type={"text"}
                placeholder={"ФИО"}
                id={"fullname"}
            />
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
            <button
                type="submit"
                disabled={loading}
                className="auth-button button-main button-main-mini"
            >
                Регистрация
            </button>
            {error && <p className="text error">{error}</p>}
            <p className="text">
                Уже есть аккаунт? <Link to={"/login"}>Авторизация</Link>
            </p>
        </form>
    );
}
