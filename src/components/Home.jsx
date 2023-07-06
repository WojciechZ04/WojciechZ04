import React from "react";
import { Container } from "@mui/material";

function Home() {
	return (
		<Container id="home" sx={{pt: "50px"}}>
			<h1>Cześć, nazywam się Wojciech Zieliński</h1>
			<p>Jestem początkującym programistą front- i backendowym.</p>
		</Container>
	)
}

export default Home;