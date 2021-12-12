import { useEffect } from "react";
import styles from "./StatusBar.module.css";
import useUserStats from "../../hooks/useUserStats";
import { useUser } from "@auth0/nextjs-auth0";
import { userAtom } from "../../state/user";
import { useRecoilState } from "recoil";
import Stats from "./Stats";

export default function StatusBar() {
	const { user } = useUser();
	useUserStats();
	const [userState, setUserState] = useRecoilState(userAtom);

	useEffect(() => {
		if (user) {
			const userState = {
				userId: user.sub,
				nickname: user.nickname,
			};

			setUserState(userState);
		}
	}, [user, setUserState]);

	return (
		<div className={styles.container}>
			{userState.userId && (
				<>
					<p className={styles.username}>{userState.nickname}</p>
					<Stats />
					<a href="/api/auth/logout">Logout</a>
				</>
			)}
		</div>
	);
}
