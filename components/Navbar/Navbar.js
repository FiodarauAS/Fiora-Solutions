import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" />
        <ul className={styles.ul}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#services" >Services</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;