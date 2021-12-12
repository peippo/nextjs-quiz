import useUserStats from "../../hooks/useUserStats";
import styles from "./Stats.module.css";

const Stats = ({ userId }) => {
	const [isLoading, isError, userStats] = useUserStats(userId);

	return (
		<>
			{userStats && (
				<div className={styles.container}>
					<p className={styles.rounds}>
						Rounds played: <strong>{userStats.rounds}</strong>
					</p>
					<p className={styles.coins}>
						Coins: <strong>{userStats.coins}</strong>
					</p>
				</div>
			)}
		</>
	);
};

export default Stats;
