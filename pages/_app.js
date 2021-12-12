import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { UserProvider } from "@auth0/nextjs-auth0";
import { SupabaseProvider } from "../supabase/client";

function MyApp({ Component, pageProps }) {
	return (
		<SupabaseProvider>
			<UserProvider>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</UserProvider>
		</SupabaseProvider>
	);
}

export default MyApp;
