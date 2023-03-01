import styles from "./Header.module.scss"
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/header-svg/logo.svg"
                            width="200"
                            height="35"
                            alt="logo"
                            className={styles.mainLogo}
                        />
                        <Image
                            src="/header-svg/mobile-logo.svg"
                            width="200"
                            height="35"
                            alt="logo"
                            className={styles.mobileLogo}
                        />
                        <p>лизинговая компания</p>
                    </div>
                    <Image
                        src="/header-svg/burger-menu.svg"
                        width="32"
                        height="32"
                        alt="burger-menu-logo"
                        className={styles.burgerMenu}
                    />
                    <Image
                        src="/header-svg/mobile-burger-menu.svg"
                        width="32"
                        height="32"
                        alt="burger-menu-logo"
                        className={styles.mobileBurgerMenu}
                    />
                    <nav className={styles.nav}>
                        <ul className={styles.menu}>
                            <li className={styles.item}>Лизинг</li>
                            <li className={styles.item}>Каталог</li>
                            <li className={styles.item}>О нас</li>
                        </ul>
                        <button>Оставить заявку</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}