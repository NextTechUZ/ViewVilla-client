import { useEffect, useState } from "react";
import styles from "./index.module.scss";

function useImage(className?: string) {
  const [active, setActive] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const imageEl = (
    <img
      src={imageSrc}
      className={`${className} ${styles.image}`}
      alt=""
      onClick={() => setActive(false)}
      style={{ transform: `scale(${active ? 1 : 0})`, opacity: active ? 1 : 0 }}
    />
  );
  useEffect(() => {
    if (!active) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";
  }, [active]);

  const onClick = (newSrc: string) => {
    setImageSrc(newSrc);
    setActive(true);
  };

  return { imageEl, onClick };
}

export default useImage;
