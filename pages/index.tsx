import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";

import styles from "../styles/Home.module.css";

export const YourApp = () => {
  return <ConnectButton />;
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wallet Connect App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> +{" "}
          <a href="https://www.rainbowkit.com/">RainbowKit!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ConnectButton />
      </main>
    </div>
  );
}
