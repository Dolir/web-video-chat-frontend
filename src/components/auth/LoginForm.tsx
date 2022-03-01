import React, { useState } from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/common/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"
import { useQuery, useMutation, gql } from "@apollo/client"
import authService from "../../services/authService"
import { validatePassword } from "../../utility/validation"
const LoginForm = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  
  const [mutateFunction, { data, loading, error }] = useMutation(
    authService.LOGIN
  )
  const login = async () => {
    const res = await mutateFunction({
      variables: {
        body: {
          password: password,
          username: name
        }
      }
    })
    const data = res.data.Login
    authService.setAccessToken(data.accessToken)
    authService.setRefreshToken(data.refreshToken)
    Router.push("/me")
  }

  return (
    <Form>
      <div
        className={styles.header}
      >
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
      <button className={styles["action-btn"]} onClick={login}>
        Log in
      </button>
      <GoogleAuth />
    </Form>
  )
}

export default LoginForm
