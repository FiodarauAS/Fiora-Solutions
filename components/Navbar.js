import Link from 'next/link';
import React from "react";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" />
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link href="/" to="first" style={{ textDecoration: 'none' }}>
                    <p className={styles.p}>Home</p>
                </Link>
            </li>
            <li className={styles.li}> 
                <Link href="/pages/services" to="first" style={{ textDecoration: 'none' }}>
                    <p className={styles.p}>Services</p>
                </Link>
            </li>
            <li className={styles.li}> 
                <Link href="/about" to="first" style={{ textDecoration: 'none' }}>
                    <p className={styles.p}>About</p>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/contact" to="first" style={{ textDecoration: 'none' }}>
                    <p className={styles.p}>Contact</p>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;