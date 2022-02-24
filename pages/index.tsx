import type { NextPage } from "next"
import Head from "next/head"
import styles from "../src/styles/Home.module.scss"
import Navbar from "../src/components/home/Navbar"
import Image from "next/image"
import { Button } from "reactstrap"
import fillermMain from "../src/assets/images/fillermain.png"
import Router from "next/router"
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Chat</title>
        <meta name="description" content="Online web video chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <div className={styles["main-content"]}>
          <h2 className={styles["main-slogan"]}>
            Bounce around the hallways of the Internet and meet incredible
            people
          </h2>

          <button onClick={() => Router.push('/auth/register')} className={`${styles['main-btn']} round`}>Start now</button>
        </div>

        <div className={`${styles["main-img"]} absolute-bg`}>
          <Image sizes="100%" src={fillermMain} alt="fillermain" quality={100}/>
        </div>
      </div>
    </div>
  )
}

export default Home
