import React, {Fragment} from 'react'
import { useRouter } from 'next/router'
import styles from '../../src/styles/chats/Chats.module.scss'
import ChatMessages from '../../src/components/chats/ChatMessages'
import ChatBottom from '../../src/components/chats/ChatBottom'
import userIcon from '../../src/assets/icons/reduser.png'
import Image from 'next/image'
const Chat = () => {
  const router = useRouter()
  const {chatId} = router.query
  return (
    <Fragment>
     <div className={styles['user-chat-container']}>
        <header className={styles['user-chat-header']}>
        <div className={styles['user-chat-icon']}>
          <Image src={userIcon} alt={'user chat name'} width='100%' height='100%'/>
        </div>
        <div className={styles['user-chat-name']}>Nick name</div>
      </header>
      <main className={styles['user-chat-main']}>
           <ChatMessages/>
      </main>
      <div className={styles['user-chat-bottom']}>
        <ChatBottom/>
      </div>
     </div>
     
    </Fragment>
  )
}

export default Chat