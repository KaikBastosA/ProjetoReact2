import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/Logo.svg';
import user from '../../assets/user.svg';
import cart from '../../assets/shopping-cart.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/app">
          <img src={logo} alt="site-logo" />
        </Link>
      </div>
      <nav className={styles.navMenu}>
        <Link to="/">
          <img className={styles.userIcon} src={user} alt="user-icon" />
        </Link>
        <img className={styles.cartIcon} src={cart} alt="cart-icon" />
      </nav>
    </header>
  );
}