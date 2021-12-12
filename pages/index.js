import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import StartPrompt from "../components/StartPrompt";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Video Games Quiz</title>
				<meta name="description" content="Video Games Quiz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Video Games Quiz!</h1>

				<p>Select difficulty to begin:</p>
				<StartPrompt />

				<a href="/api/auth/login">Login</a>
			</main>
		</Layout>
	);
}
