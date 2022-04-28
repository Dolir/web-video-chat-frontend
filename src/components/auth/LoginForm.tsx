import React, { useState } from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/common/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"
import { validatePassword } from "../../utility/validation"
import { useMutation } from "react-query"
import authService from "../../services/auth/authService"
import * as Types from "../../services/auth/authTypes"
const LoginForm = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const loginMutation = useMutation<
    Types.LoginResponseType,
    Types.ErrorResponseBody,
    Types.LoginRequestType
  >((data) => authService.login(data), {
    onError: (error) => {
      setError(error.response.data.message)
    }
  })

  const login = async () => {
    const res = await loginMutation.mutateAsync({
      password: password,
      username: name
    })
    authService.setAccessToken(res.data.accessToken)
    authService.setRefreshToken(res.data.refreshToken)
    Router.push("/me")
  }

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
      {error && <span className="text-danger">{error}</span>}

      <button className={styles["action-btn"]} onClick={login} disabled={loginMutation.isLoading}>
        Log in
      </button>
      <GoogleAuth />
    </Form>
  )
}

export default LoginForm
