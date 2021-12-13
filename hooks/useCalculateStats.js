import { useRecoilValue } from "recoil";
import { difficultyAtom } from "../state/difficulty";
import { statsAtom } from "../state/stats";

const useCalculatePoints = (answersArr) => {
	const difficulty = useRecoilValue(difficultyAtom);
	const stats = useRecoilValue(statsAtom);

	let modifier = 1;

	switch (difficulty) {
		case "medium":
			modifier = 1.25;
			break;
		case "hard":
			modifier = 1.5;
			break;
		default:
			break;
	}

	const correctAnswers = answersArr.filter(
		(answer) => answer.isCorrect
	).length;
	const wrongAnswers = 5 - correctAnswers;
	const newCoins = Math.ceil(
		0 - wrongAnswers * modifier + correctAnswers * modifier
	);

	const newStats = {
		rounds: stats?.rounds + 1,
		coins: stats?.coins + newCoins,
	};

	const statsString =
		difficulty === "easy"
			? `You got ${correctAnswers}/5 answers right, that makes ${newCoins} coins!`
			: `You got ${correctAnswers}/5 answers right, with a ${difficulty} modifier (${modifier}x) that makes ${newCoins} coins!`;

	return [newStats, statsString];
};

export default useCalculatePoints;
