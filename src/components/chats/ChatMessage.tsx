import React from "react"
import styles from "../../styles/chats/Chats.module.scss"
import doneAllIcon from "../../assets/icons/chatIcons/doneAllIcon.svg"
import Image from "next/image"
interface Iprops {
  msg: {
    id: string
    author: string
    date: string
    text: string
  }
}
const ChatMessage = (props: Iprops) => {
  const { msg } = props

  const userId = "10"
  const isMyMessage = userId === msg.author

  return (
    <li
      className={`${styles["user-chat-message"]} ${
        isMyMessage && styles["self"]
      }`}
    >
      <div className={styles["user-chat-message-text"]}>
        {msg.text}

        <div className={styles["user-chat-message-info"]}>
          <div className={styles["user-chat-message-date"]}>{msg.date}</div>
          {isMyMessage && (
            <div className={styles["user-chat-message-status"]}>
              <Image src={doneAllIcon} alt="done all icon" />
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default ChatMessage
