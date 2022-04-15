import React from "react"
import ChatMessage from "./ChatMessage"

import styles from "../../styles/chats/Chats.module.scss"
const chatData = [
  {
    id: "3",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  },
  {
    id: "4",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    id: "1",
    author: "13",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  },
  {
    id: "2",
    author: "13",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    id: "3",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  },
  {
    id: "4",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    id: "1",
    author: "13",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  },
  {
    id: "2",
    author: "13",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    id: "3",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  },
  {
    id: "4",
    author: "10",
    date: "10:35 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
]
const ChatMessages = () => {
  return (
    <ul className={styles["user-chat-messages"]}>
      {chatData.map((msg, index) => (
        <ChatMessage key={msg.id + index} msg={msg} />
      ))}
    </ul>
  )
}

export default ChatMessages
