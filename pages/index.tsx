import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> +{" "}
          <a href="https://www.rainbowkit.com/">RainbowKit!</a>
        </h1>
        <h3>RainbowKit - The best way to connect a wallet 🌈</h3>

        <ConnectButton />

        <Image src={"/images/rainbowkit.webp"} width={650} height={320} />
      </main>
    </div>
  );
}
