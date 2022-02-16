import React from 'react'
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from 'next/router'
const RegisterForm = () => {
  return (
    <Form>
      <div className={styles.header}>
        <h2 className={styles['title']}>Sign up a new account</h2>
        <h5 className={styles['alt-title']}>or <span className={styles['high-light']} onClick={() => Router.push('/auth/login')}>Log in</span> to your account</h5>
      </div>

      <CustomInput label="Login" className="mt-1" />
      <CustomInput label="Password" />
      <CustomInput label="Confirm" />
      <button className={styles["action-btn"]}>Log in </button>
      <GoogleAuth/>
    </Form>
  )
}

export default RegisterForm