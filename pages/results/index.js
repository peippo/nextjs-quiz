import { useEffect, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Results.module.scss";
import Layout from "../../components/Layout";
import StartPrompt from "../../components/StartPrompt";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../../state/user";
import { answersAtom } from "../../state/answers";
import useCalculateStats from "../../hooks/useCalculateStats";
import { SupabaseContext } from "../../supabase/client";
import { statsAtom } from "../../state/stats";
import Coins from "../../components/Coins.js";

export default function Results() {
	const { updateServerStats } = useContext(SupabaseContext);

	const user = useRecoilValue(userAtom);
	const answers = useRecoilValue(answersAtom);
	const setStats = useSetRecoilState(statsAtom);

	const [newStats, statsString, newCoins] = useCalculateStats(answers);

	useEffect(() => {
		if (user.userId && newStats) {
			const { rounds, coins } = newStats;

			updateServerStats(user.userId, rounds, coins);
			setStats({ rounds: rounds, coins: coins });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<Head>
				<title>Quiz Results</title>
			</Head>

			<main>
				<h1>Round Results</h1>

				<Coins coins={newCoins} />
				<p>{statsString}</p>

				<h2 className="h3">Play another round?</h2>
				<StartPrompt />

				<div className={styles.buttons}>
					<Link href="/scores">View high scores</Link>
					<Link href="/">Back to home</Link>
				</div>
			</main>
		</Layout>
	);
}
