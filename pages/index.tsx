import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reactor Wallet</title>
        <meta name="description" content="Reactor Wallet, non-custodial, cross-platform wallet for Solana Blockchain" />
        <link rel="icon" href="/reactor.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.logo}>
            <Image src="/reactor.svg" height="145.94" width="145.94" ></Image>
          </div>
          Reactor Wallet
        </h1>
        <p className={styles.description}>
          Non-custodial, open-source, cross-platform (Only Windows and Android for now), wallet for <a href="https://solana.com/" className={styles.solana}>Solana Blockchain</a> with <a href="https://solanapay.com/" className={styles.solana}>Solana Pay</a> integration, NFTs, multiple wallets, watch-only accounts, connect to any network...
        </p>
        <p className={styles.description}>It's currently being developed, coming soon!</p>
        <div>
          <a href="https://github.com/marc2332/reactor-wallet" target="_blank">
            <button className={styles.sourceCodeButton}>Source Code</button>
          </a>
          <a href="https://twitter.com/ReactorWallet" target="_blank">
           <button className={styles.sourceCodeButton}>Twitter</button>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
