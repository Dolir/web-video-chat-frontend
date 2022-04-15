import React, { Fragment } from "react"
import styles from "../../src/styles/rooms/Rooms.module.scss"
import { useRouter } from "next/router"
import RoomCallMembers from "../../src/components/rooms/RoomCallMembers"
import Script from "next/script"
import Head from "next/head"
import Image from "next/image"
import userPlus from "../../src/assets/icons/callControls/userplus.svg"
import cancelIcon from "../../src/assets/icons/callControls/cancelIcon.svg"
import maximizeIcon from "../../src/assets/icons/callControls/maximize.svg"
import micIcon from "../../src/assets/icons/callControls/micIcon.svg"
import videoIcon from "../../src/assets/icons/callControls/videoIcon.svg"
const Room = () => {
  const router = useRouter()
  const { roomId } = router.query

  return (
    <Fragment>
      <div className={styles["rooms-call"]}>
        <div className={styles["rooms-header"]}>
          <h4 className={styles["rooms-title"]}>Nick&apos;s room</h4>
        </div>
        <RoomCallMembers />
        <div className={styles["rooms-controls"]}>
          <div className={styles["rooms-controls-left"]}>
            <Image src={userPlus} />
          </div>
          <div className={styles["rooms-controls-center"]}>
            <Image src={videoIcon} />
            <Image src={micIcon} />
            <Image src={cancelIcon} />
          </div>
          <div className={styles["rooms-controls-right"]}>
            <Image src={maximizeIcon} />
          </div>
        </div>
        <div className={styles["rooms-chat"]}></div>
      </div>
    </Fragment>
  )
}

export default Room
