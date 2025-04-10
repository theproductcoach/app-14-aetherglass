"use client";

import { FC, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>AETHERGLASS</span>
        </Link>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
        >
          <Link
            href="#use-cases"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Use Cases
          </Link>
          <Link
            href="#tech"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Tech
          </Link>
          <Link
            href="#preorder"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Preorder
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
