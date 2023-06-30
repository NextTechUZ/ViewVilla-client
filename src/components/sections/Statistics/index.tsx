import React, { useRef } from "react";
import styles from "./about.module.scss";
import Title from "../../Title";
import mainImage from "/public/media/b1.jpg";
import image1 from "/public/media/b2.jpg";
import image2 from "/public/media/b3.jpg";
import image3 from "/public/media/b4.jpg";
import { datas } from "./data";
import Button from "../../Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import useIntersectionObserver from "../../../utils/InterSectionObserver";
import Tilt from "../../../utils/Tilt";
import Link from "next/link";
 


function Statistics() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {rootMargin:"0px 0px -200px"});

  const tiltOptions  = {
    scale: 1.1,
    speed: 1000,
    max: 10
  };



  return (
    <div
      className={`${styles.container} ${
        entity?.isIntersecting ? styles.visible : ""
      }  padding-block`}
      id="statistics"
      ref={ref}
    >
      <div className={`${styles.about} sectionContainer  `}>
        <Tilt className={styles.images} options={tiltOptions}>
 
          <img {...mainImage} className={styles.mainImage} alt="mainImage" />
           <img
            src={image1.src}
            className={`${styles.image1} ${styles.image}`}
            alt="image1"
          />

          <img
            src={image2.src}
            className={`${styles.image2} ${styles.image}`}
            alt="image2"
          />
          <img
            src={image3.src}
            className={`${styles.image3} ${styles.image}`}
            alt="image3"
          />
        </Tilt>

        <div className={styles.text}>
          <Title type="light">
            Sayohat qiling va <span>Villamizdan</span> Roxatlaning
          </Title>
          <p>
            Villamiz <b>10 kishilik</b> bo'lib, zamonaviy
            qulay va barcha sharoitlarga ega!
          </p>
          <h3>Villa ma’lumotlari</h3>
          <div className={styles.datas}>
            {datas.map((data, i) => (
              <p key={i}>
                {data.icon}  {data.label} 
              </p>
            ))}
          </div>
          <Link href="tel:998976750555">

          <Button type="light" style={{ borderRadius: 100 }}>
            <BsFillTelephoneFill /> Contact Now
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
