import React from 'react'
import { MainPropTypes } from '../../shared/types'
import styles from "./button.module.scss"


function Button({children,style,type="dark"}: {type?:"light" | "dark"} & MainPropTypes) {
  return (
<button className={`${styles[type]} ${styles.button} bruno`} style={style}>{children}</button>  )
}

export default Button