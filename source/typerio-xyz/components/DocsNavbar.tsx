"use client";
import styles from "@/styles/docsNavbar.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.navbar} ${isActive ? styles.activeNavbar : ""}`}>
      <div className={styles.navTop}>
        <h1 className={`${styles.title} ${styles.titleH}`}>
          <Link href="/docs" className={styles.titleA}>
            Typerio Docs
          </Link>
        </h1>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Typerio</h2>
        <ul className={styles.list}>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-html/installation"
                  ? styles.active
                  : ""
              }`}
              href="/docs/typerio-html/installation"
            >
              Instalation
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-html/basic-usage"
                  ? styles.active
                  : ""
              }`}
              href="/docs/typerio-html/basic-usage"
            >
              Basic usage
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-html/advanced-usage"
                  ? styles.active
                  : ""
              }`}
              href="/docs/typerio-html/advanced-usage"
            >
              Advanced usage
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-html/examples" ? styles.active : ""
              }`}
              href="/docs/typerio-html/examples"
            >
              Examples
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Typerio React</h2>
        <ul className={styles.list}>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-react/installation"
                  ? styles.active
                  : ""
              }`}
              href="/docs/typerio-react/installation"
            >
              Instalation
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-react/usage" ? styles.active : ""
              }`}
              href="/docs/typerio-react/usage"
            >
              Component usage
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-react/typescript"
                  ? styles.active
                  : ""
              }`}
              href="/docs/typerio-react/typescript"
            >
              Typescript
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/typerio-react/examples" ? styles.active : ""
              }`}
              href="/docs/typerio-react/examples"
            >
              Examples
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Contributing</h2>
        <ul className={styles.list}>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/contributing/coc" ? styles.active : ""
              }`}
              href="/docs/contributing/coc"
            >
              Code of conduct
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/contributing/chosing-project"
                  ? styles.active
                  : ""
              }`}
              href="/docs/contributing/chosing-project"
            >
              Chosing a project
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/contributing/issues" ? styles.active : ""
              }`}
              href="/docs/contributing/issues"
            >
              Reporting issues
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                pathname === "/docs/contributing/pull-request"
                  ? styles.active
                  : ""
              }`}
              href="/docs/contributing/pull-request"
            >
              Pull requests
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navBot}>
        <a href="/" className={styles.link}>
          <p className={styles.p}> Home page</p>
          <img src="/icon--house.svg" alt="" className={styles.icon} />
        </a>
      </div>
      <div className={styles.navMobileBot}>
        <button className={styles.navMobileButton} onClick={handleClick}>
          ◉◉◉
        </button>
      </div>
    </div>
  );
};

export default Navbar;
