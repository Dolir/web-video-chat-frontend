import React, {Fragment} from 'react'
import styles from "../../src/styles/rooms/Rooms.module.scss"
import { useRouter } from 'next/router'
import RoomCallMembers from '../../src/components/rooms/RoomCallMembers'
import Script from 'next/script'
import Head from 'next/head'
const Room = () => {
  
  const router = useRouter()
  const {roomId} = router.query

  return (
    <Fragment>
   
      <div className={styles['rooms-call']} >
      
      <div className={styles['rooms-header']}>
        <h4 className={styles['rooms-title']} >Nick&apos;s room</h4>
      </div>
      <RoomCallMembers/>
      <div className={styles['rooms-controls']}></div>
      <div className={styles['rooms-chat']}></div>
    </div></Fragment>
    
  )
}

export default Room