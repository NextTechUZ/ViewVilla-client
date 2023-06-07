import Image from "next/image";
import Title from "../../Title";
import styles from "./showcase.module.scss";
// import React from "react";
import image from "/public/media/image 6.png";
// import Image from "next/image";

// function Showcase() {
//   return (
//     <div className={styles.showcase  }>
//       <div className={styles.text}>
        // <Title size="large">
        //   orzuyingizdagi <span>Dam</span> Olish <span>maskani</span> sizni
        //   kutmoqda
        // </Title>
//         <p>
//           Everything you need about finding your place to live will be here,
//           where it will be easier for you
//         </p>
//       </div>
//       <Image {...image} alt="logo image" className={styles.image} />{" "}
//     </div>
//   );
// }

// export default Showcase;



 import React, { useRef,   } from "react"; 
 
function Showcase() {
  const ref = useRef(null);
  
 
  return (
    <div
      className={` ${
        styles.showcase
      }`}
      ref={ref}
    >
      {/* {products.map((item) => {
				item.titleRu;
			})} */}
      <div className={styles.text}>
      <Title size="large">
          orzuyingizdagi <span>Dam</span> Olish <span>maskani</span> sizni
          kutmoqda
        </Title>
        <p>Everything you need about finding your place to live will be here,
            where it will be easier for you</p>{" "}
      </div>
      <div className={styles.images}>
        <div className={styles.ovals}>
          <div className={`${styles.image} ${styles.image1}`}>
            <Image {...image} alt="" />
          </div>
          <div className={styles.line}></div>{" "}
          <div className={`${styles.image} ${styles.image2}`}>
          <Image {...image} alt="" />
          </div>
        </div>
       </div>
    </div>
  );
}

export default Showcase;
 