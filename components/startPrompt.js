import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { answersAtom } from "../state/answers";
import { difficultyAtom } from "../state/difficulty";
import { initialAnswersState } from "../utils";

const StartPrompt = () => {
	const router = useRouter();
	const [, setDifficulty] = useRecoilState(difficultyAtom);
	const [, setAnswersState] = useRecoilState(answersAtom);

	const handleClick = (difficulty) => {
		setDifficulty(difficulty);
		setAnswersState(initialAnswersState);
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
