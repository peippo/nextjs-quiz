import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import HighScores from "../../components/HighScores.js";

export default function Scores() {
	return (
		<Layout>
			<Head>
				<title>High Scores</title>
			</Head>

			<main>
				<h1>High Scores</h1>
				<HighScores />
				<Link href="/">Back to home</Link>
			</main>
		</Layout>
	);
}
