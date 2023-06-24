import Image from "next/image";
import Title from "../../Title";
import styles from "./showcase.module.scss";
// import React from "react";
import image from "/public/media/a1.jpg";
import image1 from "/public/media/a2.jpg";

import React, { useRef } from "react";
import Button from "../../Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import useIntersectionObserver from "../../../utils/InterSectionObserver";
import Link from "next/link";

function Showcase() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <div
      className={` ${styles.showcase} ${
        entity?.isIntersecting ? styles.visible : ""
      } sectionContainer`}
      id="home"
      ref={ref}
    >
      <div className={styles.text}>
        <Title size="large">
          orzuyingizdagi <span>Dam</span> Olish <span>maskani</span> sizni
          kutmoqda
        </Title>
        <p>
          Dacha keng va puxta ishlab chiqilgan interyerga ega bo'lib oilangiz va
          yaqinlaringiz uchun eng munosib joydir
        </p>{" "}
        <Button
          onClick={() => {
            document.getElementById("statistics")?.scrollIntoView({});
          }}
        >
          Biz Haqimizda
        </Button>
      </div>
      <div className={styles.images}>
        <div className={styles.ovals}>
          <div className={`${styles.image} ${styles.image1}`}>
            <Image {...image} alt="" />
          </div>
          <div className={styles.line}></div>{" "}
          <div className={`${styles.image} ${styles.image2}`}>
            <Image {...image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
