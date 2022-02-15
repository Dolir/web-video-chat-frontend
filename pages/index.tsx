import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/home/Navbar'
const Home: NextPage = () => {
  console .log(styles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
   
    </div>
  )
}

export default Home
