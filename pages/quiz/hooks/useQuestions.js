import { useState, useEffect } from "react";

const useQuestions = (difficulty = "medium") => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [questions, setQuestions] = useState();

	useEffect(() => {
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		};

		const shapeQuestions = (questions) => {
			const shapedQuestions = questions.map((question, index) => {
				const answers = [
					question.correct_answer,
					...question.incorrect_answers,
				];
				shuffleArray(answers);

				const correctAnswerIndex = answers.indexOf(question.correct_answer);

				return {
					id: `q-${index}`,
					question: question.question,
					answers,
					correctAnswer: correctAnswerIndex,
				};
			});

			return shapedQuestions;
		};

		const fetchQuestions = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(
					`https://opentdb.com/api.php?amount=5&category=15&difficulty=${difficulty}&type=multiple`
				);
				const questions = await response.json();
				const shapedQuestions = shapeQuestions(questions.results);
				setQuestions(shapedQuestions);
				console.log(shapedQuestions);
			} catch (error) {
				setIsError(true);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchQuestions();
	}, []);

	return [isLoading, isError, questions];
};

export default useQuestions;
