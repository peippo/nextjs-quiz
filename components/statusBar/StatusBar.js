import { useUser } from "@auth0/nextjs-auth0";
import styles from "./StatusBar.module.css";
import Stats from "./Stats";

export default function StatusBar() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<div className={styles.container}>
			{user && (
				<>
					<p className={styles.username}>{user.nickname}</p>
					<Stats userId={user.sub} />
					<a href="/api/auth/logout">Logout</a>
				</>
			)}
		</div>
	);
}
