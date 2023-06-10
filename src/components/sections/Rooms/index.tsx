import React from 'react'
import styles from "./rooms.module.scss"
import Title from '../../Title'
import RoomsSlider from './RoomsSlider'

function Rooms() {
  return (
    <div className={`${styles.rooms} room-slider padding-block`} id='rooms'>
        <Title>Qulay xonalar</Title> 
        
        <RoomsSlider/>
        </div>
  )
}

export default Rooms