import { atom } from "recoil";

export const statsAtom = atom({
	key: "stats",
	default: {
		rounds: null,
		score: null,
	},
});
