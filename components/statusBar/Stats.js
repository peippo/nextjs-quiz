import styles from "./Stats.module.css";
import { useRecoilValue } from "recoil";
import { statsAtom } from "../../state/stats";

const Stats = () => {
	const stats = useRecoilValue(statsAtom);

	return (
		<>
			{stats && (
				<div className={styles.container}>
					<p className={styles.rounds}>
						Rounds played: <strong>{stats.rounds}</strong>
					</p>
					<p className={styles.coins}>
						Coins: <strong>{stats.coins}</strong>
					</p>
				</div>
			)}
		</>
	);
};

export default Stats;
