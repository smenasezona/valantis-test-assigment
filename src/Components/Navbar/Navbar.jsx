import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.nav_container}>
            <div className={styles.center}>
                <p className={styles.nav_item}>Items</p>
                <p className={styles.nav_item}>About</p>
                <p className={styles.nav_item}>Contact</p>
            </div>
        </nav>
    )
}

export default Navbar