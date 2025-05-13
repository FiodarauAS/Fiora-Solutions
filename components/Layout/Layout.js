import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.fixedTop}>
        <Header />
        <Navbar />
      </div>
      <main id="primary" className={styles.main}>
          <div className={styles.contentContainer}>
            { children }
          </div>
      </main>

      <Footer />
    </>
  );
}