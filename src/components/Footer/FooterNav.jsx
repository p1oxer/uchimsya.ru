import React from "react";

export default function FooterNav() {
    const navigation = [
        { text: "Наши курсы", link: "/courses" },
        { text: "Политика конфиденциальности", link: "/privacy-policy" },
    ];
    return (
        <nav className="body-footer__nav">
            <ul>
                {navigation.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.link}>{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
