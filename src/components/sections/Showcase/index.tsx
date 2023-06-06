import Title from "../../Title"
import styles from "./showcase.module.scss"
import React from 'react'
import image from "/public/media/image 6.png"
import Image from "next/image"

function Showcase() {
  return (
    <div className={styles.showcase}>
        <div className={styles.text}>
            <Title  >orzuyingizdagi <span>Dam</span>  Olish <span>maskani</span> sizni kutmoqda</Title>
            <p>Everything you need about finding your place to live will be here, where it will be easier for you</p>
        </div>
<Image {...image} alt="logo image" className={styles.image} />    </div>
  )
}

export default Showcase