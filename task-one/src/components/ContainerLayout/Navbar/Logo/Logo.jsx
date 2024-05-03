import React from 'react'
import styles from '../Logo/Logo.module.css'
import logo from '../../../../assets/Logo.png'

function Logo() {
  return (
    <div className={styles.logo}>
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Logo
