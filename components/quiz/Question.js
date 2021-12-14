import styles from "./Quiz.module.css";
import Answers from "./Answers.js";

const Questions = ({ data }) => {
	const { id: questionId, question, answers, correctAnswer } = data;

	return (
		<li className={styles.questionItem}>
			<fieldset className={styles.questionFieldset}>
				<legend className={styles.questionLegend}>{question}</legend>
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
