import React from "react";
import StepsItem from "./StepsItem";
import ButtonMain from "../UI/ButtonMain";
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
                <ButtonMain text={"Выбрать курс"} modificator={"steps__button"} />
            </div>
        </section>
    );
}
