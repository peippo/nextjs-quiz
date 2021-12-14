import Image from "next/image";
import logo from "../public/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={styles.container}>
			<Image
				src={logo}
				alt="Video Games Quiz"
				placeholder="blur"
				width="1200"
				height="475"
			/>
		</div>
	);
};

export default Logo;
