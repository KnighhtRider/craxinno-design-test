import React from 'react'
import styles from '../Button/Button.module.css'

function Button() {
  return (
    <div className={styles.button}>
      <div className={styles.signIn}>Sign in</div>
      <div className={styles.signUp}>Sign Up</div>
    </div>
  )
}

export default Button
