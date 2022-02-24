import React from "react"
import styles from '../../styles/Home.module.scss'
import Logo from '../../assets/images/LOGO.png'
import Image from "next/image"
import Router from "next/router"
const Navbar = () => {
  return <div className={`${styles.navbar} d-flex justify-content-between align-items-center`}>
      <Image src={Logo} alt='logo' height={80} width={70}/>
      <button onClick={() => Router.push('/auth/login')} className={`${styles['login-btn']} round`}>Log in</button>
  </div> 
}
export default Navbar