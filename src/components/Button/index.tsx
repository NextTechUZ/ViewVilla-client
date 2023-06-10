import React from "react";
import { MainPropTypes } from "../../shared/types";
import styles from "./button.module.scss";

function Button({
  children,
  onClick,
  style,
  type = "dark",
  disabled = false,
}: {
  type?: "light" | "dark";
  disabled?: boolean;
  onClick?: () => void;
} & MainPropTypes) {
  return (
    <button
      className={`${styles[type]} ${styles.button} bruno`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
