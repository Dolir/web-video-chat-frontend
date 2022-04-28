import React, { useState } from "react"
import Form from "../common/Form"
import CustomInput from "../common/CustomInput"
import styles from "../../styles/common/Form.module.scss"
import GoogleAuth from "./GoogleAuth"
import Router from "next/router"
import authService from "../../services/auth/authService"
import { validatePassword } from "../../utility/validation"
import * as Types from "../../services/auth/authTypes"
import { useMutation } from "react-query"
const RegisterForm = () => {
  //states
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const registerMutation = useMutation<
    unknown,
    Types.ErrorResponseBody,
    Types.RegisterRequestType
  >((data) => authService.register(data), {
    onError: (error) => {
      setError(error.response.data.message)
    }
  })

  const register = async () => {
    setError('')
    await registerMutation.mutateAsync({
      confirm_password: confirmPassword,
      password: password,
      username: name
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
      {error && <span className="text-danger">{error}</span>}
      <button className={styles["action-btn"]} onClick={register} disabled={registerMutation.isLoading}>
        Sign up{" "}
      </button>
      <GoogleAuth />
    </Form>
  )
}

export default RegisterForm
