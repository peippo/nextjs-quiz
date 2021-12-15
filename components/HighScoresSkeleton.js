import styles from "./HighScores.module.scss";

const HighScoresSkeleton = () => {
	return (
		<>
			<div className={styles.tableSkeleton}>
				<div className={styles.rowSkeleton}></div>
			</div>
		</>
	);
};

export default HighScoresSkeleton;
