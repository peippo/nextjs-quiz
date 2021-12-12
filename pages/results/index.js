import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRecoilValue } from "recoil";
import { answersAtom } from "../../state/answers";
import { calculatePoints } from "../../utils";
import Layout from "../../components/Layout";
import StartPrompt from "../../components/StartPrompt";

export default function Results() {
	const answersState = useRecoilValue(answersAtom);

	return (
		<Layout>
			<Head>
				<title>Video Games Quiz</title>
				<meta name="description" content="Video Games Quiz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Results</h1>

				<p>You got {calculatePoints(answersState)} points</p>

				<p>Play another round?</p>
				<StartPrompt />
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
		</Layout>
	);
}
