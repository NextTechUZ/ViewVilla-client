import Button from "../../Button";
import Title from "../../Title";
import styles from "./about.module.scss";
import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "/public/media/d2.jpg";
import useIntersectionObserver from "../../../utils/InterSectionObserver";
import { Image } from "antd";
import Link from "next/link";

function About() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, { rootMargin: "0px 0px -200px" });

  return (
    <div
      className={`${styles.about} ${
        entity?.isIntersecting ? styles.visible : ""
      }   `}
      id="about"
      ref={ref}
    >
      <div className={styles.text}>
        <Title type="light" size="large">
          Biz Haqimizda
        </Title>
        <p>Dachamizda Oilangiz uchun 3 xona + Zal, Yozgi basseyn 11×5m, Oshxona (yopiq, 2 ta ochiq), Playstation 4, Stol tennis, Barbekyu va Mangal+Tandir, Besetka, Tapchan, Televizor, Konditsioner, Go'zal tabiat+Terassa. Dacha hudida muammo ichmliklar istemoli tekshirilgan.
        </p>
        <Link
          href="https://www.instagram.com/viewvilla_sijjak/"
          target="_blank"
        >
          <a target="_blank">
            <Button type="light">
              Batafsil
              <AiOutlineArrowRight />
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src={image.src}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
