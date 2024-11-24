import { useState } from 'react';
import styles from './style.module.scss'

export default function Question({ number, question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <li onClick={toggleDropdown} className={`${styles.question} ${isOpen ? styles.open : ""}`}>
            <div className={styles.visibleContent}>
                <h2>{number}</h2>
                <h3>{question}</h3>
                <img 
                    src={isOpen ? "../../../src/assets/blue-open-arrow.svg" : "../../../src/assets/blue-close-arrow.svg"}
                    alt="arrow"
                    width={44}
                    height={44}
                    className={styles.questionArrow}
                />
            </div>
            <p>{answer}</p>
        </li>
    )
}
