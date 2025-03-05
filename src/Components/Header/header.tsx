import styles from './styles.module.css';
import logo from '../../assets/Logo.png';
import user from '../../assets/user.svg';
import cart from '../../assets/shopping-cart.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="site-logo" />
      </div>
      <nav className={styles.navMenu}>
        <img className={styles.userIcon} src={user} alt="user-icon" />
        <img className={styles.cartIcon} src={cart} alt="cart-icon" />
      </nav>
    </header>
  );
}