import React from "react";
import styles from "./rooms.module.scss";
import { BsRulers } from "react-icons/bs";
import { GiPencilRuler } from "react-icons/gi";
import { Image } from "antd";

function ImageCard({
  imageSrc,
  name,
  size,
}: {
  imageSrc: string;
  name: string;
  size: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.imageCard}>
      <Image
        src={imageSrc}
        alt=""
        className={styles.image}
      
      /> 
      <p>
        <GiPencilRuler size={23} />
        {size}
      </p>
      <h3>{name}</h3>
    </div>
  );
}

export default ImageCard;
