import Image from "next/image";
import styles from "./Coins.module.scss";
import coinImage from "../public/coin.png";

const Coins = ({ coins }) => {
	const drawCoins = (coins) => {
		const coinsCount = Math.abs(coins);
		const isNegative = coins < 0;
		const wrapperClass = isNegative ? styles.negative : styles.positive;

		let coinsArr = [];
		for (let i = 0; i < coinsCount; i++) {
			coinsArr.push(
				<div key={i} className={wrapperClass}>
					<Image src={coinImage} alt="" />
				</div>
			);
		}

		return coinsArr;
	};

	return <div className={styles.container}>{drawCoins(coins)}</div>;
};

export default Coins;
