import { useState } from "react";
import styles from "./style.module.scss";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.title}>Creator VPN</a>
            <ul className={styles.navLinks}>
                <li><a href="#advantages">О продукте</a></li>
                <li><a href="#tariffs">Тарифы</a></li>
                <li><a href="#calculator">Калькулятор прибыли</a></li>
                <li><a href="#questions">Q&A</a></li>
            </ul>
            <button className={styles.headerTryBtn}><a href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</a></button>
            <button
                className={styles.burgerMenu}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src="/VPN-creator/burger-menu.svg"
                    alt="burger menu"
                    width={42}
                    height={42}
                />
            </button>
            <div
                className={`${styles.sideNav} ${
                    isOpen ? styles.sideNavOpen : ""
                }`}
            >
                <button
                    className={styles.closeMenu}
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src="/VPN-creator/krestik.svg"
                        alt="close menu"
                        width={42}
                        height={42}
                    />
                </button>
                <ul>
                    <li><a href="#advantages" onClick={() => setIsOpen(false)}>О продукте</a></li>
                    <li><a href="#tariffs" onClick={() => setIsOpen(false)}>Тарифы</a></li>
                    <li><a href="#calculator" onClick={() => setIsOpen(false)}>Калькулятор прибыли</a></li>
                    <li><a href="#questions" onClick={() => setIsOpen(false)}>Q&A</a></li>
                </ul>
                <button className={styles.tryBtn}><a href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</a></button>
            </div>
        </div>
    );
}
