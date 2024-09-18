import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main id="primary" className={styles.main}>
        
          <Navbar />

          <div className={styles.contentContainer}>
            { children }
          </div>
      </main>

      <Footer />
    </>
  );
}