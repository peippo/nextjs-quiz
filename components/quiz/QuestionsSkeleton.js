import styles from "./Quiz.module.scss";

const QuestionsSkeleton = () => {
	return (
		<>
			<div className={styles.questionSkeleton}>
				<div className={styles.answerSkeleton}></div>
				<div className={styles.answerSkeleton2}></div>
			</div>
			<div className={styles.questionSkeleton}>
				<div className={styles.answerSkeleton}></div>
				<div className={styles.answerSkeleton2}></div>
			</div>
			<div className={styles.questionSkeleton}>
				<div className={styles.answerSkeleton}></div>
				<div className={styles.answerSkeleton2}></div>
			</div>
			<div className={styles.questionSkeleton}>
				<div className={styles.answerSkeleton}></div>
				<div className={styles.answerSkeleton2}></div>
			</div>
			<div className={styles.questionSkeleton}>
				<div className={styles.answerSkeleton}></div>
				<div className={styles.answerSkeleton2}></div>
			</div>
		</>
	);
};

export default QuestionsSkeleton;
