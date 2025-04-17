import React from "react";
import AdvantagesItem from "./AdvantagesItem";
import {
    FaBook,
    FaChalkboardTeacher,
    FaClock,
    FaCertificate,
    FaListUl,
    FaUserCog,
    FaMoneyBillWave,
    FaHeadset,
    FaUserCircle,
    FaChartLine,
} from "react-icons/fa";
export default function Advantages() {
    const advantages = [
        {
            title: "Интерактивные материалы",
            text: "Учебные материалы созданы с использованием современных технологий: видеоуроки, интерактивные тесты, практические задания.",
            icon: <FaBook />, // Иконка книги
        },
        {
            title: "Профессиональные преподаватели",
            text: "Все курсы разработаны опытными экспертами в своих областях.",
            icon: <FaChalkboardTeacher />, // Иконка преподавателя
        },
        {
            title: "Гибкость обучения",
            text: "Обучение доступно 24/7 — вы можете учиться в удобное для вас время с любого устройства.",
            icon: <FaClock />, // Иконка часов
        },
        {
            title: "Международные сертификаты",
            text: "По завершении курса выдается сертификат международного образца.",
            icon: <FaCertificate />, // Иконка сертификата
        },
        {
            title: "Широкий выбор курсов",
            text: "Большой каталог курсов по различным направлениям для всех уровней подготовки.",
            icon: <FaListUl />, // Иконка списка
        },
        {
            title: "Индивидуальный подход",
            text: "Персонализированные рекомендации курсов на основе ваших интересов и целей.",
            icon: <FaUserCog />, // Иконка настроек пользователя
        },
        {
            title: "Доступная цена",
            text: "Разумные цены на курсы с возможностью рассрочки и регулярными акциями.",
            icon: <FaMoneyBillWave />, // Иконка денег
        },
        {
            title: "Круглосуточная поддержка",
            text: "Техническая поддержка и помощь в решении учебных вопросов доступны 24/7.",
            icon: <FaHeadset />, // Иконка гарнитуры
        },
        {
            title: "Удобный личный кабинет",
            text: "Личный кабинет позволяет отслеживать прогресс обучения, доступ к материалам и полученным сертификатам.",
            icon: <FaUserCircle />, // Иконка профиля
        },
        {
            title: "Актуальный контент",
            text: "Все курсы регулярно обновляются с учетом последних трендов и требований рынка.",
            icon: <FaChartLine />, // Иконка графика
        },
    ];
    return (
        <section className="advantages section">
            <div className="container">
                <div className="advantages__title block-title">Почему выбирают нас?</div>
                <div className="advantages__body body-advantages">
                    {advantages.map((item, index) => {
                        return (
                            <AdvantagesItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
