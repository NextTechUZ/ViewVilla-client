import React, { useState } from "react";
import styles from "./gallary.module.scss";
import Title from "../../Title";
import { images } from "./data";
import Button from "../../Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import useImage from "../../../utils/useImage";

function Gallary() {
  const [active, setActive] = useState(false);  
  const {imageEl,onClick} = useImage()
  return (
    <div className={`${styles.gallary} padding-block`} id="gallary">
      <div className="sectionContainer">
        <Title>
          See your dream <span>villa Gallery</span>
        </Title>
        <div className={styles.imageContainer}>
          {images.slice(0, active ? images.length : 1).map((images, i) => (
            <div className={styles.images}>
              {images.slice(0, active ? images.length : 3).map((image, i) => (
                <div key={i} className={styles.image} onClick={() => onClick(image.imageSrc)}>
                  <img src={image.imageSrc} alt="image" />
                  <h2>{image.title}</h2>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Button onClick={() => setActive(!active)}>
          {active ? "See Less" : "See More"} <AiOutlineArrowRight />
        </Button>
      </div>
      {imageEl}
    </div>
  );
}

export default Gallary;
