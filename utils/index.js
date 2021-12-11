export const replaceItemAtIndex = (arr, index, newValue) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const calculatePoints = (answersArr) => {
	return answersArr.filter((answer) => answer.isCorrect).length;
};

export const initialAnswersState = [
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
];
