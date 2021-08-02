import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
export default function Welcome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">The Code Challanges!</a>
        </h1>

        <p className={styles.description}>
          Get started by
          <code className={styles.code}>Selecting one category</code>
        </p>

        <div className={styles.grid}>
        <Link href="/languages">
          <a  className={styles.card}>
            <h2>Programing Languages&rarr;</h2>
            <p>Select your Programing Language.</p>
          </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>My Challanges &rarr;</h2>
            <p>See all the code Challanges that you accepted</p>
          </a>

          <a href="/groups" className={styles.card}>
            <h2>Explore Groups &rarr;</h2>
            <p>Be part of Groups and meet new users</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>My Groups &rarr;</h2>
            <p>
              <p>Your group membership</p>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
