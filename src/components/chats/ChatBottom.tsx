import React, { useState } from "react"
import styles from "../../styles/chats/Chats.module.scss"
import micIcon from "../../assets/icons/chatIcons/micIcon.svg"
import attachIcon from "../../assets/icons/chatIcons/attachIcon.svg"
import sendIcon from "../../assets/icons/chatIcons/sendIcon.svg"

import Image from "next/image"

const ChatBottom = () => {
  const [inputValue, setInputValue] = useState("")
  const showSendButton = !!inputValue
  return (
    <React.Fragment>
      <div className={styles["user-chat-attach"]}>
        <Image src={attachIcon} alt="attach" width="100%" height="100%" />
      </div>
      <div className={styles["user-chat-input-container"]}>
        <input
          className={styles["user-chat-input"]}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={styles["user-chat-mic"]}>
        {showSendButton ? (
          <Image src={sendIcon} alt="mic" width="100%" height="100%" />
        ) : (
          <Image src={micIcon} alt="mic" width="100%" height="100%" />
        )}
      </div>
    </React.Fragment>
  )
}

export default ChatBottom
