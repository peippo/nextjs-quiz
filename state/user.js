import { atom } from "recoil";

export const userAtom = atom({
	key: "user",
	default: {
		userId: null,
		nickname: null,
	},
});
