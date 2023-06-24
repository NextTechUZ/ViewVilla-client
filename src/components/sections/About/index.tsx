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
  const entity = useIntersectionObserver(ref, {rootMargin:"0px 0px -200px"});

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
        <p>
        Dachamizda Oilangiz uchun З Спальни+Зал, Летний бассейн 11×5м, Кухня (йопик, 2та очик), Playstation 4, Санузел, Теннис, Барбекю и Мангал+тандер, Беседка, Тапчан, Телевизор, Кондиционер, Кондиционер, Красивая природа+Терраса. Dacha hudida spirtli ichmliklar istemoli taqiqlangan        </p>
        <Link href="https://www.instagram.com/viewvilla_sijjak/" target="_blank">
          <a target="_blank" >

        <Button type="light">
    Batafsil
          <AiOutlineArrowRight />
        </Button>
          </a>
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={image.src}  width={"100%"} height={"100%"} style={{objectFit:"cover"}} alt=""  />
      </div>
     </div>
  );
}

export default About;
