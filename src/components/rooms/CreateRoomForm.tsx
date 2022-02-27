import React, { useState } from "react"
import Form from "../common/Form"
import styles from "../../styles/Form.module.scss"
import CustomInput from "../common/CustomInput"

const CreateRoomForm = () => {
    const [name, setName] = useState('')
  return (
    <Form>
      <div className={styles.header}>
        <h2 className={styles["title"]}>Create your own room</h2>
      </div>
      <CustomInput
        label="Name of your room"
        className="mt-1"
        onChange={setName}
        value={name}
        validation={(input: string) =>
          !input ? "Name should not be empty" : ""
        }
      ></CustomInput>
      <CustomInput
        label="Name of your room"
        className="mt-1"
        onChange={setName}
        value={name}
        validation={(input: string) =>
          !input ? "Name should not be empty" : ""
        }
      ></CustomInput>
     
     <CustomInput
        label="Name of your room"
        className="mt-1"
        onChange={setName}
        value={name}
        validation={(input: string) =>
          !input ? "Name should not be empty" : ""
        }
      ></CustomInput>
     
    </Form>
  )
}

export default CreateRoomForm
