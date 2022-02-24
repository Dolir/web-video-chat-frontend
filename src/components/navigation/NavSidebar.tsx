import React from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import FriendsList from "./FriendsList"
import NavList from "./NavList"
import UserInfo from './UserInfo'
import { useRouter } from "next/router"

const NavSidebar = () => {
  const router = useRouter()
  console.log(router)
 
  return (
    <div className={styles.container}>
      <NavList />
      <FriendsList />
      <UserInfo/>
    </div>
  )
}

export default NavSidebar
