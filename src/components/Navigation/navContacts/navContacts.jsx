
import items from "./items";
import { Link } from "components/styles";
import styles from './menu.module.css'

const getClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const NavbarMenu = () => {
    const elements = items.map(({ id, to, text }) => (
        <li key={id}>
            <Link className={getClassName} to={to}>{text}</Link>
        </li>
    ));

    return (
        <div>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default NavbarMenu;
