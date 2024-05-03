import React from 'react'
import styles from '../BackgroundHero/BackgroundHero.module.css'
import Patern from './Patern/Patern'
import Glow from './Glow/Glow'
import BG from './BG/BG'

function BackgroundHero() {
  return (
    <div className={styles.backgroundHero}>
      <Patern />
      <Glow />
      <BG />
      <div className={styles.rectangle}></div>
    </div> 
  )
}

export default BackgroundHero 
