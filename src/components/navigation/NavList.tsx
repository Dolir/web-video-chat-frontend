import React from "react"
import navMenu from "../../config/navMenu"
import styles from "../../styles/navigation/NavSidebar.module.scss"
import Router, { useRouter } from "next/router"
const NavList = () => {
  const router = useRouter()

  return (
    <ul className={styles.nav}>
      {navMenu.map((nav) => (
        <li
          className={styles["nav-item"]}
          key={nav.link}
          onClick={() => Router.push(nav.link)}
        >
          <div
            className={`${styles["nav-item-inner"]} ${
              !router.asPath.startsWith(nav.link) || styles.active
            }`}
          >
            {nav.name}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NavList
