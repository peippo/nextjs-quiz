import Head from "next/head";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import styles from "../../styles/Results.module.scss";
import { areAllQuestionsAnswered } from "../../state/answers";
import Layout from "../../components/Layout";
import Questions from "../../components/quiz/Questions.js";

export default function Quiz() {
	const isAnswered = useRecoilValue(areAllQuestionsAnswered);

	return (
		<Layout>
			<main>
				<Questions />

				<Link href="/results" passHref>
					<button
						className={isAnswered ? styles.buttonReady : undefined}
						disabled={!isAnswered}
					>
						{isAnswered ? "I'm ready!" : "Waiting for answers..."}
					</button>
				</Link>
			</main>
		</Layout>
	);
}
