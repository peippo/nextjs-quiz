import Head from "next/head";
import StatusBar from "./statusBar/StatusBar";
import Logo from "./Logo";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Video Game Quiz</title>
			</Head>
			<header>
				<StatusBar />
				<Logo />
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
