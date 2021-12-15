import useHighScores from "../hooks/useHighScores";
import styles from "./HighScores.module.scss";
import HighScoresSkeleton from "./HighScoresSkeleton.js";

const HighScores = () => {
	const [isLoading, isError, usersByCoins] = useHighScores();

	return (
		<>
			{isLoading ? (
				<HighScoresSkeleton />
			) : (
				<table className={styles.highScores}>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Nickname</th>
							<th>Rounds</th>
							<th>Coins</th>
						</tr>
					</thead>
					<tbody>
						{usersByCoins?.map((user, index) => {
							return (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>{user.nickname}</td>
									<td>{user.rounds}</td>
									<td>{user.coins}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};

export default HighScores;
