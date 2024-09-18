import React from "react";
import styles from '../styles/Footer.module.css';
import Head from 'next/head';

//import styles from '../styles/Navbar.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Head>
          <title>Fiora Solutions</title>
          <link rel="icon" href="../images/logo-transparent-nobuffer.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </Head>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" class="icon-link"><i class="fab fa-linkedin"></i></a>
          <a href="https://facebook.com" target="_blank" class="icon-link"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" class="icon-link"><i class="fab fa-instagram"></i></a>
        </div>
          <div className={styles.footerLogo}>
            <img src="../images/logo-text-only-nobuffer.png" alt="Fiora Logo" />
          </div>
    </footer>
  );
};

export default Footer;