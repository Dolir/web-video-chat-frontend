import React, {useState} from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"

import { useQuery, useMutation, gql } from "@apollo/client"
import authService from "../../services/authService"
const RegisterForm = () => {
  //states
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [mutateFunction, { data, loading, error }] = useMutation(
    authService.REGISTER
  )
  const register = () => {
    mutateFunction({
      variables: {
        body: {
          confirm_password: "12345678",
          password: "12345678",
          username: "12345678"
        }
      }
    })
  }
  return (
    <Form>
      <div className={styles.header}>
        <h2 className={styles["title"]}>Sign up a new account</h2>
        <h5 className={styles["alt-title"]}>
          or{" "}
          <span
            className={styles["high-light"]}
            onClick={() => Router.push("/auth/login")}
          >
            Log in
          </span>{" "}
          to your account
        </h5>
      </div>

      <CustomInput label="Login" className="mt-1" />
      <CustomInput label="Password" />
      <CustomInput label="Confirm" />
      <button className={styles["action-btn"]} onClick={register}>Log in </button>
      <GoogleAuth />
    </Form>
  )
}

export default RegisterForm
