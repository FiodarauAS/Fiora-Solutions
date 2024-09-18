import Navbar from '../components/Navbar';
import React from "react";
import styles from '../styles/Header.module.css';

//import styles from '../styles/Navbar.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerLogo}>
            <img src="../images/logo-with-text-transparent-nobuffer.png" alt="Fiora Logo" />
        </div>
    </header>
  );
};

export default Header;