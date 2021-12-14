import Image from "next/image";
import styles from "./Stats.module.css";
import { useRecoilValue } from "recoil";
import { statsAtom } from "../../state/stats";
import roundsIcon from "../../public/icon-rounds.svg";
import coinsIcon from "../../public/icon-coins.svg";

const Stats = () => {
	const stats = useRecoilValue(statsAtom);

	return (
		<>
			{stats && (
				<div className={styles.container}>
					<p className={styles.rounds}>
						<Image src={roundsIcon} width="20" height="20" alt="" />
						<span className={styles.marginLeft}>
							Rounds played: <strong>{stats.rounds}</strong>
						</span>
					</p>
					<p className={styles.coins}>
						<Image src={coinsIcon} width="20" height="20" alt="" />
						<span className={styles.marginLeft}>
							Coins: <strong>{stats.coins}</strong>
						</span>
					</p>
				</div>
			)}
		</>
	);
};

export default Stats;
