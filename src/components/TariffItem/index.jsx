import { useState } from "react";
import styles from './style.module.scss';
import openArrow from '../../assets/open-arrow.svg';
import closeArrow from '../../assets/close-arrow.svg';

export default function TariffItem({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <li onClick={toggleDropdown} className={`${styles.tariffItem} ${isOpen ? styles.open : ""}`}>
            <img
                src={isOpen ? openArrow : closeArrow}
                alt="arrow"
                width={24}
                height={24}
            />
            <div className={styles.dropdownText}>
                <h4>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
}

