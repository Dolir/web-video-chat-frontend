import React, { ChangeEvent, useEffect, useState } from "react"
import { Input, Label } from "reactstrap"
import styles from "../../styles/CustomInput.module.scss"
import classNames from "classnames"
import { InputType } from "reactstrap/types/lib/Input"

interface inputProps {
  validation?: Function
  onChange?: Function
  label?: string
  className?: string
  disabled?: boolean
  value?: string
  errorMsg?: string
  type?: InputType
}

const CustomInput = (props: inputProps) => {
  const {
    label,
    className,
    onChange,
    validation,
    disabled,
    value,
    errorMsg,
    type
  } = props
  const [error, setError] = useState("")

  useEffect(() => {
    if (errorMsg) setError(errorMsg)
  }, [errorMsg])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setError("")
    if (validation) {
      const result = validation(inputValue)
      if (result) setError(result)
    }
    if (onChange) onChange(inputValue)
  }

  return (
    <div className={`${className} ${styles["custom-input"]} `}>
      <Label for={label} className={styles.label}>
        {label}
      </Label>
      <Input
        type={type}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={`${styles.input} ${classNames({ "border-danger": error })} `}
        id={label}
      ></Input>
      <span className="text-danger">{error || <span>&nbsp;</span>}</span>
    </div>
  )
}

export default CustomInput
