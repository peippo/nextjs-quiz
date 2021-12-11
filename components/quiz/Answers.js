import React from "react";

const Answers = ({ answers, correctAnswer, questionId }) => {
	const handleChange = (event) => {
		console.log(event.target.id);
	};

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
							onChange={(event) => handleChange(event)}
						/>
						<label htmlFor={`${questionId}-${index}`}>{answer}</label>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
