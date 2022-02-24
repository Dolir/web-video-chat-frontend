import React from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import Image from "next/image"
import userIcon from '../../assets/images/user.jpg'
import Router from "next/router"
const FriendsList = () => {
  const allChats = [
    { id: 1, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 2, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 3, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 4, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 5, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 6, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 7, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 8, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 9, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 10, name: "Anyname", avatar: userIcon, status: "online" },
    { id: 11, name: "Anyname", avatar: userIcon, status: "online" }
  ]
  return (
    <ul className={styles.chats}>
      {allChats.map((chat) => (
        <li key={chat.id} className={styles.chat} onClick={() => Router.push(`/chats/${chat.id}`)}>
          <div className={styles["chat-container"]}>
            <div className={styles["chat-icon-container"]}>
              {chat.avatar && <Image src={chat.avatar} alt="chat-image" />}
            </div>
            <h5 className="m-0">{chat.name}</h5>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FriendsList
