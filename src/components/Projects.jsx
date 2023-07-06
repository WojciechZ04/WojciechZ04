import React from "react";
import Project from "./Project";
import { Container } from "@mui/material";

function Projects() {
	return(
		<Container id="projects" sx={{pt: "50px"}}>
			<h2>Moje projekty</h2>
			<p>Poniżej przedstawiam kilka większych projektów, które wykonałem w celu zwiększania swoich umiejętności.</p>
			<Project 
			img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
			title="Aplikacja pogodowa"
			description="[Opis]"
			more="https://github.com/WojciechZ04"
			/>
			<Project 
			img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
			title="Wypożyczalnia samochodów"
			description="[Opis]"
			more="https://github.com/WojciechZ04"
			/>
			<Project 
			img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
			title="Blog"
			description="[Opis]"
			more="https://github.com/WojciechZ04"
			/>
			<p>Więcej projektów znajdziesz <a href="https://github.com/WojciechZ04">tutaj</a>.</p>
		</Container>
	)
}

export default Projects;