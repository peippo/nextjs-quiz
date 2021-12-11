import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import useQuestions from "../../hooks/useQuestions";
import Question from "../../components/quiz/Question.js";

export default function Quiz() {
	const [isLoading, isError, questions] = useQuestions();

	return (
		<div className={styles.container}>
			<Head>
				<title>Video Games Quiz</title>
				<meta name="description" content="Video Games Quiz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Answer the questions</h1>

				{!isLoading && (
					<ul>
						{questions?.map((question) => (
							<Question key={question.id} data={question} />
						))}
					</ul>
				)}
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
	);
}
