import React from "react";
import styles from "./about.module.scss";
import Title from "../../Title";
import   mainImage from "/public/media/1212qw.jpeg";
import image1 from "/public/media/qwqw7.jpeg";
import image2 from "/public/media/qwqw13.jpeg";
import image3 from "/public/media/qwqw12.png";
import { datas } from "./data";
import Button from "../../Button";
import { BsFillTelephoneFill } from "react-icons/bs";

function Statistics() {
  return (
    <div className={`${styles.container} padding-block`} id="statistics">
      <div className={`${styles.about} sectionContainer  `}>
        <div className={styles.images}>
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
        </div>

        <div className={styles.text}>
          <Title type="light">
            Sayohat qiling va <span>Villamizdan</span> Roxatlaning
          </Title>
          <p>
            Villamiz Jahon boyicha barcha standartlarga javob beradi. Zamonaviy
            qulay va barcha sharoitlarga ega
          </p>
          <h3>Villa ma’lumotlari</h3>
          <div className={styles.datas}>
            {datas.map((data, i) => (
              <div key={i}>
                {data.icon} <p>{data.label}</p>
              </div>
            ))}
          </div>
          <Button type="light" style={{ borderRadius: 100 }}>
            <BsFillTelephoneFill /> Contact Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
