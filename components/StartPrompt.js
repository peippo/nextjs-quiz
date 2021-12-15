import React from "react";
import styles from "./StartPrompt.module.scss";
import { useRouter } from "next/router";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { answersAtom } from "../state/answers";
import { difficultyAtom } from "../state/difficulty";

const StartPrompt = () => {
	const router = useRouter();
	const setDifficulty = useSetRecoilState(difficultyAtom);
	const resetAnswers = useResetRecoilState(answersAtom);

	const handleClick = (difficulty) => {
		setDifficulty(difficulty);
		resetAnswers();
		router.push("/quiz");
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.buttonEasy}
				onClick={() => handleClick("easy")}
			>
				Easy
			</button>
			<button
				className={styles.buttonMedium}
				onClick={() => handleClick("medium")}
			>
				Medium
			</button>
			<button
				className={styles.buttonHard}
				onClick={() => handleClick("hard")}
			>
				Hard
			</button>
		</div>
	);
};

export default StartPrompt;
