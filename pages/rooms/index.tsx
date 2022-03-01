import React, { Fragment } from "react"
import RoomsList from "../../src/components/rooms/RoomsList"
import styles from "../../src/styles/rooms/Rooms.module.scss"
import Modal from "../../src/components/common/ModalPortal"
import CreateRoomForm from "../../src/components/rooms/CreateRoomForm"
import { IModalProps } from "../../src/components/common/ModalPortal"
import Router from "next/router"
const Rooms = () => {
  const createRoomButton = (
    <Modal name="createRoomButton"  button={<button className={styles["rooms-action-btn"]}>Create room</button>}>
      {({ opened, close }: IModalProps) => <CreateRoomForm close={close}/>}
    </Modal>
  )
  return (
    <Fragment>
      <div className={styles["rooms-content"]}>
        <div className={styles["rooms-action-header"]}>
          {createRoomButton}
        </div>

        <RoomsList />
      </div>
    </Fragment>
  )
}

export default Rooms
