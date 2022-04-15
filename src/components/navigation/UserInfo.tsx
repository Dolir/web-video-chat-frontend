import React from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import userIcon from "../../assets/icons/user.jpg"
import Image from "next/image"
import signal from "../../assets/icons/signal.svg"
import cancelIcon from "../../assets/icons/cancelIcon.svg"
const UserInfo = () => {
  const userData = { name: "NickName", tag: "#myuniqueid", icon: userIcon }
  return (
    <div>
      <div className={styles["user-connection-container"]}>
        <div className={styles["user-connection"]}>
          <Image src={signal} />
          <div className={styles["user-connection-info"]}>
            <h6 className={styles["user-connection-status"]}>Voice connect</h6>
            <span className={styles["user-connection-room"]}>
              Nick&apos;s room
            </span>
          </div>
        </div>{" "}
       
          <Image src={cancelIcon} role='button'/>
       
        
      </div>
      <div className={styles["user-container"]}>
        <div className={styles["user-icon-container"]}>
          {userData.icon && <Image src={userData.icon} alt="user-icon" />}
        </div>
        <div className={styles["user-info"]}>
          <h5 className={styles["user-name"]}>{userData.name}</h5>
          <span className={styles["user-tag"]}>{userData.tag}</span>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
