import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

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
