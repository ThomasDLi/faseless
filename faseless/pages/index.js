import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.big}>
        <h1 className={styles.title}><span className={styles.green}>Faseless.</span><br /><span className={styles.yellow}>Traseless.</span><br /><span className={styles.dark_green}>Open Source.</span></h1>
        <h2 className={styles.description}>A simple to use UI, fast backend,<br />while still being secure and open source.</h2>
        <h4 className={styles.beginLink}><Link href="/home?topic=general&page=0"><a><u>Start Posting</u></a></Link></h4>
      </div>
    </div>
  )
}
