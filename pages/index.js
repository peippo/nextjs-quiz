import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../components/Layout";
import StartPrompt from "../components/StartPrompt";

export default function Home() {
	return (
		<Layout>
			<main>
				<h1 className="screen-reader-text">Video Game Quiz</h1>
				<p className={styles.description}>
					Five questions, get the majority right and you gain coins,
					otherwise you lose them. Medium and hard difficulties have
					modifiers that make your gains - and losses - bigger!
				</p>

				<p className={styles.description}>
					<strong>
						<a className={styles.logLink} href="/api/auth/login">
							Login
						</a>{" "}
						to keep track of your stats and reach the top of the{" "}
						<Link href="/scores">high scores list!</Link>
					</strong>
				</p>
				<h2>Select difficulty to begin</h2>
				<StartPrompt />
			</main>
		</Layout>
	);
}
