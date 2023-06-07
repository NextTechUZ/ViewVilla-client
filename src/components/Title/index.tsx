import React from "react";
import { MainPropTypes } from "../../shared/types";
import styles from "./title.module.scss";

function Title({
  children,
  type = "dark",
  size = "small",
}: { type?: "light" | "dark"; size?: "large" | "small" } & MainPropTypes) {
  return (
    <h1 className={`bruno  ${styles[type]} ${styles[size]} ${styles.title}`}>{children}</h1>
  );
}

export default Title;
