import React, { useRef, useState } from "react";
import styles from "./gallary.module.scss";
import Title from "../../Title";
import { images } from "./data";
import Button from "../../Button";
import { AiOutlineArrowRight } from "react-icons/ai";
 import Tilt from "../../../utils/Tilt";
import { Image } from "antd";
import useIntersectionObserver from "../../../utils/InterSectionObserver";

function Gallary() {
  const [active, setActive] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

    const entity = useIntersectionObserver(ref, {rootMargin:"0px 0px -200px"});
 

  return (
    <div className={`${styles.gallary}  ${entity?.isIntersecting ? styles.visible :""} padding-block`} id="gallary" ref={ref}>
      <div className="sectionContainer">
        <Title>
          Bizning <span>Galareya</span>
        </Title>
        <div className={styles.imageContainer}>
          {images.slice(0, active ? images.length : 1).map((images, i) => (
            <div className={styles.images} key={i}>
              {images.slice(0, active ? images.length : 3).map((image, i) => (
                <Tilt
                   key={i}
                  className={styles.image}
                 >
                  <Image src={image.imageSrc}   width={"100%"} height={"100%"} style={{objectFit:"cover"}} alt="image" />
                </Tilt>
              ))}
            </div>
          ))}
        </div>

        <Button
          onClick={() => {
            ref.current?.scrollIntoView({ behavior: "instant" });
            setActive(!active);
          }}
        >
          {active ? "See Less" : "See More"} <AiOutlineArrowRight />
        </Button>
      </div>
     </div>
  );
}

export default Gallary;
