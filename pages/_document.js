import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<meta name="description" content="Video Game Quiz" />
					<link rel="icon" href="/favicon.ico" />
					<meta property="og:title" content="Video Game Quiz" />
					<meta
						property="og:description"
						content="Video Game Quiz for Dev Jam @ Discord Challenge"
					/>
					<meta
						property="og:image"
						content="https://nextjs-quiz-nu.vercel.app/share.png"
					/>
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
