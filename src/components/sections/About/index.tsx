import Button from "../../Button";
import Title from "../../Title";
import styles from "./about.module.scss";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "/public/media/image 6.png";

function About() {
  return (
    <div className={`${styles.about}   `}>
      <div className={styles.text}>
        <Title type="light" size="large">
          Biz Haqimizda
        </Title>
        <p>
          Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus
          a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed
          dolor auctor iaculis vitae id mauris. Integer ut lectus non neque
          suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed
          tempus enim non massa mattis iaculis. In quis massa risus
        </p>
        <Button type="light">
          Learn More
          <AiOutlineArrowRight />
        </Button>
      </div>
      <div className={styles.image}>
        <img src={image.src} alt="" />
      </div>
    </div>
  );
}

export default About;
