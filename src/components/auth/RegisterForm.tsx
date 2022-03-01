import React, { useState } from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/common/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"

import { useQuery, useMutation, gql } from "@apollo/client"
import authService from "../../services/authService"
import { validatePassword } from "../../utility/validation"
const RegisterForm = () => {
  //states
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [mutateFunction, { data, loading, error }] = useMutation(
    authService.REGISTER
  )
  const errorMsg: any = error?.networkError
  const clearForm = () => {
    setName("")
    setPassword("")
    setConfirmPassword("")
  }
  const register = async () => {
    await mutateFunction({
      variables: {
        body: {
          confirm_password: confirmPassword,
          password: password,
          username: name
        }
      }
    })
    Router.push("/auth/login")
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

      <CustomInput
        label="Login"
        className="mt-1"
        onChange={setName}
        value={name}
        validation={(input: string) =>
          !input ? "Name should not be empty" : ""
        }
        // errorMsg={errorMsg?.result.message}
      />
      <CustomInput
        type="password"
        label="Password"
        validation={validatePassword}
        onChange={setPassword}
        value={password}
      />
      <CustomInput
        type="password"
        label="Confirm"
        onChange={setConfirmPassword}
        value={confirmPassword}
        validation={(confirm: string) =>
          confirm !== password ? `Password doesn't match` : ""
        }
      />
      <button className={styles["action-btn"]} onClick={register}>
        Sign up{" "}
      </button>
      <GoogleAuth />
    </Form>
  )
}

export default RegisterForm
