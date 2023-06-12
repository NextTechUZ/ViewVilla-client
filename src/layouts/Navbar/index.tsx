import Link from "next/link";
import styles from "./nav.module.scss";
import React, { useEffect, useRef, useState } from "react";
import logo from "/public/media/Group 61.png";
import Image from "next/image";
import { menu } from "./navlinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const ref = useRef<HTMLHeadElement>(null);

  const changeColor = () => {
    if (!ref.current) return;
    if (window.pageYOffset === 0) {
      ref.current.style.background = "transparent";
    } else {
      ref.current.style.background = "rgba(255, 255, 255)";
    }
  };

  
  useEffect(() => {
    const handleScroll = () => {
      changeColor();
      if (!ref.current) return;
      
      const currentScrollPos = window.pageYOffset;
      
       ref.current.style.translate =
      scrollPosition < currentScrollPos && currentScrollPos > 100  
      ? "0 -100%"
      : "0";
      setScrollPosition(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  // useEffect(() => {
    
  //   if (!isOpen) {
  //     document.body.style.overflow = "auto";
  //     return;
  //   }
    
  //   document.body.style.overflow = "hidden";
  //  }, [isOpen]);

  return (
    <nav className={styles.navbar} ref={ref}>
      <div className={`${styles.container} sectionContainer`}>
        <Link href="/">
          <a>
            <Image {...logo} className={styles.logo} alt="logo" />
          </a>
        </Link>
        <div
          className={` ${isOpen && styles.open} ${styles.links}`}
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <div>
            {menu.map((link) => (
              <Link href={link.link} key={link.id}>
                <a className="underline-animation">{link.label}</a>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`${styles.menuBtn} ${isOpen && styles.x}`}
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
