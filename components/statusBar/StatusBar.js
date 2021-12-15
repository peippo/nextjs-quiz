import Image from "next/image";
import { useEffect } from "react";
import styles from "./StatusBar.module.scss";
import useFetchStats from "../../hooks/useFetchStats";
import { useUser } from "@auth0/nextjs-auth0";
import { userAtom } from "../../state/user";
import { useRecoilState } from "recoil";
import Stats from "./Stats";
import loginIcon from "../../public/icon-sign-in.svg";
import logoutIcon from "../../public/icon-sign-out.svg";

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
			{userState.userId ? (
				<>
					<p className={styles.username}>{userState.nickname}</p>
					<Stats />

					<div className={styles.iconButtonWrapper}>
						<Image src={logoutIcon} width="20" height="20" alt="" />
						<a className={styles.logLink} href="/api/auth/logout">
							Logout
						</a>
					</div>
				</>
			) : (
				<div className={styles.iconButtonWrapper}>
					<Image src={loginIcon} width="20" height="20" alt="" />
					<a className={styles.logLink} href="/api/auth/login">
						Login
					</a>
				</div>
			)}
		</div>
	);
}
