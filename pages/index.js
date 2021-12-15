import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import StartPrompt from "../components/StartPrompt";

export default function Home() {
	return (
		<Layout>
			<main>
				<h1>Select difficulty to begin</h1>
				<StartPrompt />
			</main>
		</Layout>
	);
}
