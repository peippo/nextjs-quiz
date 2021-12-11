import React from "react";
import Answers from "./Answers.js";

const Questions = ({ data }) => {
	const { id: questionId, question, answers, correctAnswer } = data;

	return (
		<li>
			<fieldset>
				<legend>{question}</legend>
				<Answers
					answers={answers}
					correctAnswer={correctAnswer}
					questionId={questionId}
				/>
			</fieldset>
		</li>
	);
};

export default Questions;
