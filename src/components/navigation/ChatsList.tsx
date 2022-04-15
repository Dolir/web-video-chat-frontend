import React, { useRef, useEffect } from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import Image from "next/image"
import userIcon from "../../assets/icons/user.jpg"
import Router, { useRouter } from "next/router"
import ChatItem from "./ChatItem"
const allChats = [
    { id: '1', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '2', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '3', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '4', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '5', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '6', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '7', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '8', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '9', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '10', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '11', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '12', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '13', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '14', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '15', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '16', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '17', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '18', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '19', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '20', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '21', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '22', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '23', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '24', name: "Anyname", avatar: userIcon, status: "online" },
    { id: '25', name: "Anyname", avatar: userIcon, status: "online" }
  ]
const FriendsList = () => {
  
  return (
    <ul className={styles.chats}>
      {allChats.map((chat) => (
        <ChatItem key={chat.id} chat={chat}/>
      ))}
    </ul>
  )
}

export default FriendsList
