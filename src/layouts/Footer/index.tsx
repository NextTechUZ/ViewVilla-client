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
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className={styles.icons}>
            <Link href="">
              <a>
                <FaFacebookF />
              </a>
            </Link>{" "}
            <Link href="">
              <a>
                <FaTelegramPlane />
              </a>
            </Link>{" "}
            <Link href="">
              <a>
                <RiInstagramFill />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <h2 className="bruno">Property</h2>
          <Link href="">
            <a> House</a>
          </Link>{" "}
          <Link href="">
            <a> Apartment</a>
          </Link>{" "}
          <Link href="">
            <a> Villa</a>
          </Link>
        </div>{" "}
        <div className={styles.row}>
          <h2 className="bruno">Contact</h2>
          <Link href="">
            <a> 2464 Royal Ln. Mesa, New Jersey 45463</a>
          </Link>{" "}
          <Link href="">
            <a> (671) 555-0110</a>
          </Link>{" "}
          <Link href="">
            <a> info@hounter.com</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
