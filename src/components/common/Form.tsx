import React from "react"
import styles from "../../styles/common/Form.module.scss"

interface LayoutProps {
  children: React.ReactNode
}
const Form = (props: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles["form-content"]}>{props.children}</div>
      </div>
    </div>
  )
}

export default Form
