import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import styles from "../../styles/Home.module.css";
import { areAllQuestionsAnswered } from "../../state/answers";
import Layout from "../../components/Layout";
import Questions from "../../components/quiz/Questions.js";

export default function Quiz() {
	const isAnswered = useRecoilValue(areAllQuestionsAnswered);

	return (
		<Layout>
			<Head>
				<title>Video Games Quiz</title>
				<meta name="description" content="Video Games Quiz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Questions />

				{isAnswered && (
					<Link href="/results" passHref>
						<button>Submit answers</button>
					</Link>
				)}
			</main>
		</Layout>
	);
}
