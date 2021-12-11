import { atom, selector } from "recoil";
import { initialAnswersState } from "../utils";

export const answersAtom = atom({
	key: "answers",
	default: initialAnswersState,
});

export const areAllQuestionsAnswered = selector({
	key: "answersStatus",
	get: ({ get }) => {
		const answers = get(answersAtom);

		return answers.every((answer) => answer.selected !== null);
	},
});
