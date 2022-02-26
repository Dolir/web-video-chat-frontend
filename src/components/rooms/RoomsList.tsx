import React from "react"
import RoomItem from "./RoomItem"
import styles from "../../styles/rooms/RoomsList.module.scss"
const roomsData = [
  {
    id: "1",
    name: "Nick's room",
    members: [
      { id: "4124", icon: "" },
      { id: "4124", icon: "" },
      { id: "4124", icon: "" },
      { id: "4124", icon: "" }
    ],
    capacity: { from: 15, to: 20 }
  }
]
const RoomsList = () => {
  return (
    <div className={styles["rooms-content"]}> 
    <div className={styles['rooms-action-header']}>
        <button className={styles['rooms-action-btn']}>Create room</button>
    </div>
      <ul className={styles["rooms-list"]}>
          {Array(20).fill(roomsData[0]).map(room => <RoomItem key={room.id} room={room} />)}
      </ul>
    </div>
  )
}

export default RoomsList
