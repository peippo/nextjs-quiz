import React from "react";
import useQuestions from "../../hooks/useQuestions";
import Question from "../../components/quiz/Question.js";

const Questions = () => {
	const [isLoading, isError, questions] = useQuestions();

	return (
		<>
			{!isLoading && (
				<ul>
					{questions?.map((question) => (
						<Question key={question.id} data={question} />
					))}
				</ul>
			)}
		</>
	);
};

export default Questions;
