import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Paper from "@material-ui/core/Paper";
export default function Welcome() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to The Code Challange!</h1>

          <p className={styles.description}>
            Get started by
            <code className={styles.code}>Selecting one category</code>
          </p>

          <div className={styles.grid}>
            <Paper
              className={styles.card}
              elevation={3}
              style={{ padding: "25px" }}
            >
              <Link href="/languages">
                <a>
                  <h2>Programing Languages</h2>
                  <p>Select your Programing Language.</p>
                </a>
              </Link>
            </Paper>

            <Paper
              className={styles.card}
              elevation={3}
              style={{ padding: "25px" }}
            >
              <Link href="/languages">
                <a href="https://nextjs.org/learn">
                  <h2>My Challanges &rarr;</h2>
                  <p>See all the code Challanges that you accepted</p>
                </a>
              </Link>
            </Paper>

            <Paper
              className={styles.card}
              elevation={3}
              style={{ padding: "25px" }}
            >
              <Link href="/groups">
                <a href="/groups">
                  <h2>Explore Groups &rarr;</h2>
                  <p>Be part of Groups and meet new users</p>
                </a>
              </Link>
            </Paper>

            <Paper
              className={styles.card}
              elevation={3}
              style={{ padding: "25px" }}
            >
              <Link href="/languages">
                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                 
                >
                  <h2>My Groups &rarr;</h2>
                  <p>
                    <p>Your group membership</p>
                  </p>
                </a>
              </Link>
            </Paper>
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
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
