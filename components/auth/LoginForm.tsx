import React, { useState } from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"
import { useQuery, useMutation, gql } from "@apollo/client"
import authService from "../../services/authService"
const LoginForm = () => {

  return (
    <Form>
      <div className={styles.header}>
        <h2 className={styles["title"]}>Log in to your account</h2>
        <h5 className={styles["alt-title"]}>
          or{" "}
          <span
            className={styles["high-light"]}
            onClick={() => Router.push("/auth/register")}
          >
            Sign up
          </span>{" "}
          a new account
        </h5>
      </div>
      <CustomInput label="Login" className="mt-1" />
      <CustomInput label="Password" />
      <button
        className={styles["action-btn"]}
      >
        Log in{" "}
      </button>
      <GoogleAuth />
    </Form>
  )
}

export default LoginForm
