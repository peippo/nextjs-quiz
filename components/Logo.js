import Image from "next/image";
import logo from "../public/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
	return (
		<div className={styles.container}>
			<Image
				src={logo}
				alt="Video Game Quiz"
				width="1200"
				height="475"
				priority={true}
			/>
		</div>
	);
};

export default Logo;
