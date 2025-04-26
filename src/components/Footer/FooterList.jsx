import React from "react";
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function FooterList() {
    return (
        <ul className="body-footer__list">
            <li>
                <a className="link" href="tel:+79000000000">
                    +7 (000) 000-00-00
                </a>
            </li>
            <li>г. Вологда, ул. Учебная 35Б</li>
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
    );
}
