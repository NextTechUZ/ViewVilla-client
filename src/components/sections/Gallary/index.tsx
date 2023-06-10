import React, { useState } from "react";
import styles from "./gallary.module.scss";
import Title from "../../Title";
import { images } from "./data";
import Button from "../../Button";
import { AiOutlineArrowRight } from "react-icons/ai";

function Gallary() {
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.gallary} padding-block`}>
      <div className="sectionContainer">
        <Title>
          See your dream <span>villa Gallery</span>
        </Title>
<div className={styles.imageContainer}>

        {images.slice(0,active ? images.length : 1).map((images, i) => (
            <div className={styles.images}>
            {images.slice(0,active ? images.length : 3).map((image, i) => (
                <div key={i} className={styles.image}>
                <img src={image.imageSrc} alt="image" />
                <h2>{image.title}</h2>
              </div>
            ))}
          </div>

))}
</div>
         
        <Button onClick={() => setActive(!active)}>
         {active ? "See Less" : "See More"}   <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Gallary;
