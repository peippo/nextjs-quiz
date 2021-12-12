import StatusBar from "./statusBar/StatusBar";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<StatusBar />
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
