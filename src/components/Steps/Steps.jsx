import React from "react";
import StepsItem from "./StepsItem";
import BackgroundImage from "../UI/BackgroundImage";
import { Link } from "react-router-dom";
export default function Steps() {
    const steps = [
        {
            text: "Создайте аккаунт на сайте за пару минут.",
        },
        {
            text: "Найдите подходящий курс в каталоге.",
        },
        {
            text: "Проходите уроки в удобное для вас время.",
        },
        {
            text: "После завершения курса получите сертификат.",
        },
    ];
    return (
        <section className="steps section">
            <BackgroundImage first />
            <div className="container">
                <div className="steps__title block-title">
                    Как начать обучение на Учимся.ру?
                </div>
                <div className="steps__body body-steps">
                    {steps.map((step, index) => {
                        return (
                            <StepsItem key={index} number={index + 1} text={step.text} />
                        );
                    })}
                </div>
                <Link className="button-main steps__button" to={"/courses"}>
                    Выбрать курс
                </Link>
            </div>
        </section>
    );
}
