import React, { useRef } from 'react'
import styles from "./rooms.module.scss"
import Title from '../../Title'
import RoomsSlider from './RoomsSlider'
import useIntersectionObserver from '../../../utils/InterSectionObserver';

function Rooms() {
   
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {rootMargin:"0px 0px -200px"});



  return (
    <div className={`${styles.rooms} ${entity?.isIntersecting ? styles.visible :""} room-slider padding-block`} id='rooms' ref={ref}>
        <Title>Qulay xonalar</Title> 
        
        <RoomsSlider/>
        </div>
  )
}

export default Rooms