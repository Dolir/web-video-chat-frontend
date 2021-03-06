import React from "react"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import FriendsList from "./ChatsList"
import NavList from "./NavList"
import UserInfo from './UserInfo'
import { useRouter } from "next/router"
import withAuth from "../auth/withAuth"
const NavSidebar = () => {
  const router = useRouter()
 
  return (
    <div className={styles.container}>
      <NavList />
      <FriendsList />
      <UserInfo/>
    </div>
  )
}

export default withAuth(NavSidebar)
