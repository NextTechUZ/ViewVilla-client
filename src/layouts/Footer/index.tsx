import styles from "./footer.module.scss";
import React, { useRef } from "react";
import image from "/public/media/Group 62.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import useIntersectionObserver from "../../utils/InterSectionObserver";

function Footer() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <footer
      className={`${styles.container} ${
        entity?.isIntersecting ? styles.visible : ""
      }`}
      ref={ref}
    >
      <div className={`${styles.footer} padding-block sectionContainer`}>
        <div className={styles.main}>
          <Link href="">
            <a>
              <Image {...image} alt="logo" />
            </a>
          </Link>
          <p>
Biz bilan quyidagi ijtimoiy tarmoqlar orqali aloqaga chiqishingiz mumkin          </p>
          <div className={styles.icons}>
             
            <Link href="https://t.me/pilot_markk">
              <a>
                <FaTelegramPlane />
              </a>
            </Link>{" "}
            <Link href="https://www.instagram.com/viewvilla_sijjak/">
              <a>
                <RiInstagramFill />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <h2 className="bruno">Kategoriyalar</h2>
          <Link href="#about">
            <a>Dacha Haqida</a>
          </Link>{" "}
          <Link href="#gallary">
            <a> Galareya </a>
          </Link>{" "}
          <Link href="#rooms">
            <a> Xonalar</a>
          </Link>
        </div>{" "}
        <div className={styles.row}>
          <h2 className="bruno">Kontaktlar</h2>
 
          <Link href="tel:976750555">
            <a> +998 (97) 675-05-55</a>
          </Link>{" "}
          <Link href="tel:998472888">
            <a> +998 (99) 847-28-88</a>
          </Link>{" "}
          <Link href="tel:970710021">
            <a> +998 (97) 071-00-21</a>
          </Link>{" "}
          <Link href="mailto:Viewvilla21@gmail.com">
            <a> Viewvilla21@gmail.com</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
