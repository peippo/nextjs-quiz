import Link from "next/link";
import { useEffect } from "react";
import styles from "./StatusBar.module.css";
import useFetchStats from "../../hooks/useFetchStats";
import { useUser } from "@auth0/nextjs-auth0";
import { userAtom } from "../../state/user";
import { useRecoilState } from "recoil";
import Stats from "./Stats";

export default function StatusBar() {
	const { user } = useUser();
	useFetchStats();
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
					<Link locale={false} href="/api/auth/logout">
						<a>Logout</a>
					</Link>
				</>
			)}
		</div>
	);
}
