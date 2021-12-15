import styles from "./Quiz.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { answersAtom, areAllQuestionsAnswered } from "../../state/answers";
import { replaceItemAtIndex } from "../../utils";

const Answers = ({ answers, correctAnswer, questionId }) => {
	const [answersState, setAnswersState] = useRecoilState(answersAtom);
	const allDone = useRecoilValue(areAllQuestionsAnswered);

	const handleChange = (index) => {
		setAnswersState(
			replaceItemAtIndex(answersState, questionId, {
				selected: index,
				isCorrect: index === correctAnswer,
			})
		);
	};

	return (
		<ul>
			{answers.map((answer, index) => {
				const id = `${questionId}-${index}`;

				return (
					<li key={id} className={styles.answerItem}>
						<input
							className={styles.answerInput}
							type="radio"
							id={id}
							value={answer}
							checked={answersState[questionId].selected === index}
							onChange={() => handleChange(index)}
						/>
						<label
							className={styles.answerLabel}
							htmlFor={`${questionId}-${index}`}
						>
							{answer}
						</label>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
