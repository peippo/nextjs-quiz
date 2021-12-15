import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import StartPrompt from "../components/StartPrompt";

export default function Home() {
	return (
		<Layout>
			<main>
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
						to keep track of your stats and reach the top of the high
						score list!
					</strong>
				</p>
				<h1>Select difficulty to begin</h1>
				<StartPrompt />
			</main>
		</Layout>
	);
}
