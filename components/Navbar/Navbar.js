import Link from 'next/link';
import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link href="/svgs">
              <p>Svgs</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
