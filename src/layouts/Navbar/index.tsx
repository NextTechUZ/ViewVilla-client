import Link from "next/link";
import styles from "./nav.module.scss";
import React, { useState } from "react";
import logo from "/public/media/Group 61.png";
import Image from "next/image";
import { menu } from "./navlinks";

function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} sectionContainer`}>
        <Link href="/">
          <a>
            <Image {...logo} className={styles.logo} alt="logo"  />
          </a>
        </Link>
        <div 					className={` ${isOpen && styles.open} ${styles.links}`}
					onClick={() => setIsOpen((pre) => !pre)}
>
          {
            menu.map(link =>    <Link href={link.link} key={link.id}>
            <a className="underline-animation">{link.label}</a>
          </Link>)
          }
       
          
        </div>
        <div className={`${styles.menuBtn} ${isOpen && styles.x}`} 					onClick={() => setIsOpen((pre) => !pre)}
></div>
      </div>
    </nav>
  );
}

export default Navbar;
