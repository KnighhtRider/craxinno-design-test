import React from 'react'
import styles from '../ContainerLayout/ContainerLayout.module.css'
import BackgroundHero from './BackgroundHero/BackgroundHero'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'

function ContainerLayout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <BackgroundHero />
      <Content />
      <div className={styles.rectangle}></div>
    </div>
  )
}

export default ContainerLayout
