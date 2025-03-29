import Link from 'next/link';
import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" />
        <ul className={styles.ul}>
            <li>
                <Link href="/public" to="first" style={{ textDecoration: 'none' }}>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link href="/services" to="first" style={{ textDecoration: 'none' }}>
                    <p>Services</p>
                </Link>
            </li>
            <li>
                <Link href="/about" to="first" style={{ textDecoration: 'none' }}>
                    <p>About</p>
                </Link>
            </li>
            <li>
                <Link href="/contact" to="first" style={{ textDecoration: 'none' }}>
                    <p>Contact</p>
                </Link>
            </li>
            <li>
                <Link href="/svgs" to="first" style={{ textDecoration: 'none' }}>
                    <p>Svgs</p>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
