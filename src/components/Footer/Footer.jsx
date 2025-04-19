import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import BackgroundImage from "../UI/BackgroundImage";
export default function Footer() {
    const navigation = [
        { text: "Наши курсы", link: "/" },
        { text: "О нас", link: "/" },
        { text: "Контакты", link: "/" },
        { text: "Политика конфиденциальности", link: "/" },
    ];
    return (
        <footer className="footer">
            <BackgroundImage first />
            <div className="container">
                <div className="footer__logo">
                    учимся.<span>ру</span>
                </div>
                <div className="footer__body body-footer">
                    <ul className="body-footer__list">
                        <li>
                            <FaPhone />
                            <a className="link" href="tel:+79000000000">
                                +7 (000) 000-00-00
                            </a>
                        </li>
                        <li>
                            <FaLocationDot />
                            г. Вологда, ул. Учебная 35Б
                        </li>
                        <li className="body-footer__socials socials">
                            <a target="_blank" href="https://vk.com/">
                                <FaVk />
                            </a>
                            <a target="_blank" href="https://web.telegram.org/a/">
                                <FaTelegram />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                    <nav className="body-footer__nav">
                        <ul>
                            {navigation.map((item, index) => {
                                return (
                                    <li>
                                        <a href={item.link}>{item.text}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <form action="" className="body-footer__form">
                        <p className="heading-small">Остались вопросы?</p>
                        <p className="text">Перезвоним в течение 5-ти минут</p>
                        <input type="tel" placeholder="Номер телефона*" required />
                        <input type="text" placeholder="Ваше имя" />
                        <button type="button" className="button-main">Отправить</button>
                    </form>
                </div>
                <p className="footer__copyright">
                    © {new Date().getFullYear()} учимся.ру
                </p>
            </div>
        </footer>
    );
}
