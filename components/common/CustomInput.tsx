import React, { ChangeEvent } from "react"
import { Input, Label } from "reactstrap"
import styles from "../../styles/CustomInput.module.scss"
interface inputProps {
  validation?: Function
  onChange?: Function
  label?: string
  className?: string
}

const CustomInput = (props: inputProps) => {
  const { label, className } = props
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.validation) props.validation(event)
    if (props.onChange) props.onChange(event)
  }
  return (
    <div className={`${className} ${styles["custom-input"]}`}>
      <Label for={label} className={styles.label}>
        {label}
      </Label>
      <Input
        onChange={handleChange}
        className={styles.input}
        id={label}
      ></Input>
    </div>
  )
}

export default CustomInput
