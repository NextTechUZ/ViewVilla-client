import Button from "../../Button";
import Title from "../../Title";
import styles from "./about.module.scss";
import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "/public/media/qwqw4.jpeg";
 import useIntersectionObserver from "../../../utils/InterSectionObserver";
import { Image } from "antd";

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
        <Image src={image.src}  width={"100%"} height={"100%"} style={{objectFit:"cover"}} alt=""  />
      </div>
     </div>
  );
}

export default About;
