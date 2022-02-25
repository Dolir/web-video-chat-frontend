import React, {Fragment} from 'react'
import { useRouter } from 'next/router'
import NavSidebar from '../../src/components/navigation/NavSidebar'
const Chat = () => {
  const router = useRouter()
  const {chatId} = router.query
  return (
    <Fragment>
      <NavSidebar /> 
      <div>Chats {chatId}</div>
    </Fragment>
  )
}

export default Chat