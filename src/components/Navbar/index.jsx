import styles from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <h1>Creator VPN</h1>
        <ul className={styles.navLinks}>
            <li>О продукте</li>
            <li>Тарифы</li>
            <li>Калькулятор прибыли</li>
            <li>Q&A</li>
        </ul>
        <button className={styles.headerTryBtn}>Попробовать</button>
        <button className={styles.burgerMenu}>
          <img 
              src="/VPN-creator/burger-menu.svg"
              alt="burger menu"
              width={42}
              height={42}
          />
        </button>
    </div>
  )
}
