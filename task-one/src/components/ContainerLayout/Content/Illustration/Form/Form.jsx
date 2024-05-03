import React from 'react'
import styles from '../Form/Form.module.css'
import eyeIcon from '../../../../../assets/eye-off.png'

function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.name}>John Doe</div>
      <div className={styles.email}>Enter your email</div>
      <div className={styles.password}>Password
      <img className={styles.eyeIcon} src={eyeIcon} alt="" />
      </div>
    </div>
  )
}

export default Form
