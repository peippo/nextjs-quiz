import Link from "next/link";
import Head from "next/head";
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

				<Link locale={false} href="/api/auth/login">
					<a>Login</a>
				</Link>
			</main>
		</Layout>
	);
}
