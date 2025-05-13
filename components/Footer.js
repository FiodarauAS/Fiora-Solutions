import styles from '../styles/Footer.module.css';
import Head from 'next/head';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Head>
          <title>Fiora Solutions</title>
          <link rel="icon" href="../images/logo-transparent-nobuffer.png" />
        </Head>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" className="icon-link"><i className="fab fa-linkedin"></i></a>
          <a href="https://facebook.com" target="_blank" className="icon-link"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" className="icon-link"><i className="fab fa-instagram"></i></a>
        </div>
          <div className={styles.footerLogo}>
            <img src="../images/logo-text-only-nobuffer.png" alt="Fiora Logo" />
          </div>
    </footer>
  );
};

export default Footer;