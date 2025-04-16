import { Link } from "react-router-dom";
export default function HeaderNav({ list, modificator }) {
    modificator = modificator || "";

    return (
        <nav className={`nav ${modificator}`}>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
