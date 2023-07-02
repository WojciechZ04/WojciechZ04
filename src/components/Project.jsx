import React from "react";

function Project(props) {
	return(
		<div>
			<img src={props.img} alt="WeatherApp" ></img>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<a href={props.more}>Więcej o projekcie</a>
		</div>
	)
}

export default Project;