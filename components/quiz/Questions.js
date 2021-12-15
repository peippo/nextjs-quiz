import styles from "./Quiz.module.scss";
import useQuestions from "../../hooks/useQuestions";
import Question from "../../components/quiz/Question.js";
import QuestionsSkeleton from "../../components/quiz/QuestionsSkeleton.js";

const Questions = () => {
	const [isLoading, isError, questions] = useQuestions();

	return (
		<>
			{isLoading ? (
				<QuestionsSkeleton />
			) : (
				<ul className={styles.answersList}>
					{questions?.map((question) => (
						<Question key={question.id} data={question} />
					))}
				</ul>
			)}
		</>
	);
};

export default Questions;
