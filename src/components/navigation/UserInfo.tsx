import React from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import userIcon from '../../assets/images/user.jpg'
import Image from "next/image"
const UserInfo = () => {
  const userData = { name: "NickName", tag: "#myuniqueid", icon: userIcon }
  return (
    <div className={styles["user-container"]}>
      <div className={styles["user-icon-container"]}>
          {userData.icon && <Image src={userData.icon} alt='user-icon'/>}
      </div>
      <div className={styles["user-info"]}>
        <h5 className={styles["user-name"]}>{userData.name}</h5>
        <span className={styles["user-tag"]}>{userData.tag}</span>
      </div>
    </div>
  )
}

export default UserInfo
