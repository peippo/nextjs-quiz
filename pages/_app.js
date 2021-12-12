import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
	return (
			<UserProvider>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</UserProvider>
	);
}

export default MyApp;
