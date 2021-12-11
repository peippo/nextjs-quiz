import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { difficultyAtom } from "../state/difficulty";

const StartPrompt = () => {
	const router = useRouter();
	const [, setDifficulty] = useRecoilState(difficultyAtom);

	const handleClick = (difficulty) => {
		setDifficulty(difficulty);
		router.push("/quiz");
	};

	return (
		<div>
			<p>Select difficulty to begin:</p>
			<button onClick={() => handleClick("easy")}>Easy</button>
			<button onClick={() => handleClick("medium")}>Medium</button>
			<button onClick={() => handleClick("hard")}>Hard</button>
		</div>
	);
};

export default StartPrompt;
