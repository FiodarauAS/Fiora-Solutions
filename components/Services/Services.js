import styles from "./Services.module.css";
import CircleDots from '../../public/svgs/CircleDots';
import CircleEmpty from '../../public/svgs/CircleEmpty';
import CircleFilled from '../../public/svgs/CircleFilled';
import CircleStripes from '../../public/svgs/CircleStripes';
import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div>
          <h2 className={styles.h2Light}>Receive High Quality Software <br /> Development Services Tailored <br /> to Your Business Context.</h2>
          <p className={styles.paragraphLight}>Fiora Solutions delivers end-to-end custom software <br /> development solutions,  upporting you every step of the <br /> way from idea to achievement.</p>
          <Link href="/contact">
            <button className={styles.contactButtonLeft}>Explore</button>
          </Link>
        </div>
        <CircleDots />
      </div>
      <div className={styles.containerLight}>
        <CircleEmpty />
        <div>
          <h2 className={styles.h2Dark}>Desktop Development</h2>
          <p className={styles.paragraphDark}>Our team of expert developers stays up-to-date <br /> with the latest technologies and trends in WPF <br /> desktop application development.</p>
          <Link href="/contact">
            <button className={styles.contactButtonRigth}>Explore</button>
          </Link>
        </div>
      </div>
      <div className={styles.containerDark}>
        <div>
          <h2 className={styles.h2Light}>Mobile Development</h2>
          <p className={styles.paragraphLight}>As a young development company, Fiora Solutions possess <br /> the expertise and experience to craft a mobile solution <br /> that delivers tangible results for your business.</p>
          <Link href="/contact">
            <button className={styles.contactButtonLeft}>Explore</button>
          </Link>
        </div>
        <CircleFilled />
      </div>
      <div className={styles.containerLight}>
        <CircleStripes />
        <div>
          <h2 className={styles.h2Dark}>Web Development</h2>
          <p className={styles.paragraphDark}>At Fiora Solutions we offer expert web development services, <br /> building innovative and effective web solutions tailored to any <br /> level of complexity.</p>
          <Link href="/contact">
            <button className={styles.contactButtonRigth}>Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
