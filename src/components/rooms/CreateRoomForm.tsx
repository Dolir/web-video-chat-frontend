import React, { useState } from "react"
import Form from "../common/Form"
import styles from "../../styles/common/Form.module.scss"
import selectStyles from "../../styles/common/CustomSelect.module.scss"
import CustomInput from "../common/CustomInput"
import CustomSelect from "../common/CustomSelect"
import avatarIcon from '../../assets/images/user.jpg'
import Image from "next/image"
import Router from "next/router"
const visOptions = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" },
  { value: "friends", label: "Friends only" }
]
const friendsOptions = [
  { value: "someid123", label: "Nick", status: true },
  { value: "someid33", label: "John", status: false },
  { value: "someid344", label: "Nick", status: true },
  { value: "someid5", label: "Nick", status: true },
  { value: "someid6", label: "Nick", status: true },
  { value: "someid7", label: "Nick", status: true },
]
const CreateRoomForm = (props: {close: Function}) => {
  const {close} = props
  const [name, setName] = useState("")
  
  const friendList = (data: {label: string, value: any, status: boolean}) => {
    const {label,value,status} = data
    return <div className={selectStyles['select-list']}>
      <div className={selectStyles['select-list-left']}>
        <div className={selectStyles['select-list-icon']}><Image src={avatarIcon} alt='user icon' objectFit="contain" width={40} height={40}/></div>
        <div className={selectStyles['select-list-label']}>{label}</div>
      </div>
      <button disabled={status} className={selectStyles['select-list-btn']}>{status ? 'Invited' : 'Invite'}</button>
    </div>
  }

  const createRoom = () => {
    const randomId = Math.random() * 100
    return Router.push(`/rooms/${randomId}`)
  }
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
      <CustomSelect
        label="Room visibility"
        options={visOptions}
        // className="mt-1"
        // onChange={setName}
        // value={name}
        // validation={(input: string) =>
        //   !input ? "Name should not be empty" : ""
        // }
      ></CustomSelect>
      <CustomSelect
        label="Invite friends"
        options={friendsOptions}
        customOption={friendList}
        clearOnUnfocus
        // className="mt-1"
        // onChange={setName}
        // value={name}
        // validation={(input: string) =>
        //   !input ? "Name should not be empty" : ""
        // }
      ></CustomSelect>
       <button className={styles["action-btn"]} onClick={() => {
createRoom()
         close()
         }}>
        Create and join
      </button>
    </Form>
  )
}

export default CreateRoomForm
