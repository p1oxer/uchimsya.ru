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
    const validatePassword = (password) => {
        return password.length >= 6; // Минимальная длина пароля - 6 символов
    };
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
       setError(""); // сброс ошибки

       if (!validatePassword(password)) {
           setError("Пароль должен содержать минимум 6 символов");
           return;
       }

       if (!isPhoneComplete) {
           setError("Пожалуйста, введите полный номер телефона.");
           return;
       }

       setLoading(true);

       try {
           const result = await registerNewUser(email, password, fullname, phone);

           if (result.success) {
               navigate("/account");
           } else {
               // Проверяем тип ошибки
               const supaError = result.error;
               if (
                   supaError?.message === "User already registered" ||
                   supaError?.status === 422
               ) {
                   setError("Пользователь с таким email уже зарегистрирован");
               } else if (supaError?.message) {
                   setError("Ошибка при регистрации: " + supaError.message);
               } else {
                   setError("Произошла неизвестная ошибка при регистрации");
               }
           }
       } catch (error) {
           setError("Произошла ошибка: " + (error.message || error));
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
