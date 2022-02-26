import React from "react"
import styles from "../../styles/rooms/RoomsList.module.scss"
interface Imember {
  id: string
  icon: string
}
interface Iroom {
  id: string
  name: string
  members: Imember[]
  capacity: { from: number; to: number }
}

const RoomItem = (props: { room: Iroom }) => {
  return (
    <li className={styles["rooms-item"]}>
      <div className={styles["rooms-item-header"]}>
        <h5 className={styles["rooms-item-name"]}>Nick&apos;s room</h5>
        <span className={styles["rooms-item-capacity"]}>15/20</span>
      </div>
      <div className={styles["rooms-item-members"]}>
        <div className={styles["rooms-item-member"]}></div>
        <div className={styles["rooms-item-member"]}></div>
        <div className={styles["rooms-item-member"]}></div>
        <div className={styles["rooms-item-member"]}></div>
      </div>
      <button className={styles["rooms-item-join"]}>Join room</button>
    </li>
  )
}

export default RoomItem
