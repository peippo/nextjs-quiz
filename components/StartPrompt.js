import React from "react";
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
		<div>
			<button onClick={() => handleClick("easy")}>Easy</button>
			<button onClick={() => handleClick("medium")}>Medium</button>
			<button onClick={() => handleClick("hard")}>Hard</button>
		</div>
	);
};

export default StartPrompt;
