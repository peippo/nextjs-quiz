import React from "react";

const Answers = ({ answers, correctAnswer, questionId }) => {
	return (
		<ul>
			{answers.map((answer, index) => {
				const isCorrect = index === correctAnswer;
				const id = `${questionId}-${index}`;

				return (
					<li key={id}>
						<input
							type="radio"
							id={id}
							value={answer}
							checked={isCorrect}
						/>
						<label htmlFor={`${questionId}-${index}`}>{answer}</label>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
