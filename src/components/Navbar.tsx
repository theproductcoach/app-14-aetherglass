import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>AETHERGLASS</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="#use-cases" className={styles.navLink}>
            Use Cases
          </Link>
          <Link href="#tech" className={styles.navLink}>
            Tech
          </Link>
          <Link href="#preorder" className={styles.navLink}>
            Preorder
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
