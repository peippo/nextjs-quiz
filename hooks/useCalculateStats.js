import { useRecoilValue } from "recoil";
import { difficultyAtom } from "../state/difficulty";
import { statsAtom } from "../state/stats";

const useCalculatePoints = (answersArr) => {
	const difficulty = useRecoilValue(difficultyAtom);
	const stats = useRecoilValue(statsAtom);

	let modifier = 1;

	switch (difficulty) {
		case "medium":
			modifier = 2;
			break;
		case "hard":
			modifier = 3;
			break;
		default:
			break;
	}

	const correctAnswers = answersArr.filter(
		(answer) => answer.isCorrect
	).length;

	const midScore = difficulty === "easy" ? 0 : difficulty === "medium" ? 1 : 2;

	let baseScore = 0;
	switch (correctAnswers) {
		case 0:
			baseScore = -2;
			break;
		case 1:
			baseScore = -1;
			break;
		case 2:
			baseScore = midScore;
			break;
		case 3:
			baseScore = 1;
			break;
		case 4:
			baseScore = 2;
			break;
		case 5:
			baseScore = 3;
			break;
		default:
			break;
	}

	const newCoins = baseScore * modifier;

	const newStats = {
		rounds: stats?.rounds + 1,
		coins: stats?.coins + newCoins,
	};

	const statsString =
		difficulty === "easy"
			? `You got ${correctAnswers}/5 answers right, that makes ${newCoins} coins!`
			: `You got ${correctAnswers}/5 answers right, with a ${difficulty} modifier (${modifier}x) that makes ${newCoins} coins!`;

	return [newStats, statsString, newCoins];
};

export default useCalculatePoints;
