import React from "react";
import { MainPropTypes } from "../../shared/types";
import styles from "./title.module.scss";

function Title({
  children,
  mode = "dark",
  type = "small",
}: { mode?: "light" | "dark"; type?: "large" | "small" } & MainPropTypes) {
  return (
    <h1 className={`bruno  ${styles[mode]} ${styles[type]} ${styles.title}`}>{children}</h1>
  );
}

export default Title;
