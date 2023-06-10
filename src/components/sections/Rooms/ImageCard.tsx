import React from "react";
import styles from "./rooms.module.scss";
import { BsRulers } from "react-icons/bs";
import { GiPencilRuler } from "react-icons/gi";

function ImageCard({
  imageSrc,
  name,
  size,onClick
 }: {onClick:()=>void,
  imageSrc: string;
  name: string;
  size:string,
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.imageCard}>
      <img src={imageSrc} alt="" onClick={onClick}/>{" "}
      <p>
        <GiPencilRuler size={23}/>
      {size}
      </p>
      <h3>{name}</h3>
    </div>
  );
}

export default ImageCard;
