import React, { useRef, useEffect } from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import Router, { useRouter } from "next/router"
import Image from "next/image"
interface Ichat {
  id: string
  name: string
  avatar: string | StaticImageData
}
const ChatItem = (props: { chat: Ichat }) => {
  const { chat } = props
  const router = useRouter()
  const chatRef = useRef<HTMLLIElement | null>(null)
  const { chatId } = router.query

//   useEffect(() => {

//     if (chat.id === chatId) {
//       chatRef.current?.scrollIntoView({block: "center", inline: "nearest"})
//     }
//   }, [!!chatId])

  const handleChatClick = (chatId: string | Number) => {
    Router.push(`/chats/${chatId}`)
  }
  return (
    <li
      key={chat.id}
      className={styles.chat}
      onClick={() => handleChatClick(chat.id)}
      ref={chatRef}
    >
      <div
        className={`${styles["chat-container"]}  ${
          chat.id.toString() === chatId ? styles["active"] : ""
        }`}
      >
        <div className={styles["chat-icon-container"]}>
          {chat.avatar && <Image src={chat.avatar} alt="chat-image" />}
        </div>
        <h5 className="m-0">{chat.name}</h5>
      </div>
    </li>
  )
}

export default ChatItem
