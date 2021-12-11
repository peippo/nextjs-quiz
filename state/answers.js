import { atom, selector } from "recoil";

export const answersAtom = atom({
	key: "answers",
	default: [
		{
			selected: null,
			isCorrect: false,
		},
		{
			selected: null,
			isCorrect: false,
		},
		{
			selected: null,
			isCorrect: false,
		},
		{
			selected: null,
			isCorrect: false,
		},
		{
			selected: null,
			isCorrect: false,
		},
	],
});

export const areAllQuestionsAnswered = selector({
	key: "answersStatus",
	get: ({ get }) => {
		const answers = get(answersAtom);

		return answers.every((answer) => answer.selected !== null);
	},
});
