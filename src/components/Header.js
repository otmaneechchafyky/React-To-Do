import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>Today&apos;s Tasks</h1>
    <p className={styles.para}>Tasks will be persisted in the browser&apos;s local storage</p>
  </header>
);
export default Header;
