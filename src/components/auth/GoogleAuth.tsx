import React from "react"
import styles from "../../styles/auth/GoogleAuth.module.scss"
import googleIcon from "../../assets/images/googleicon.svg"
import Image from "next/image"
const GoogleAuth = () => {
  return (
    <div className={styles['google-auth-container']}>
      <h5 className={styles['action-text']}>Continue with Google</h5>
      <div className="d-flex align-items-center">
        <Image src={googleIcon} alt="google auth" />
      </div>
    </div>
  )
}

export default GoogleAuth
