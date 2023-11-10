import React from "react";
import Project from "./Project";
import { Container } from "@mui/material";
import Image1 from "../images/weatherApp.jpg";
import Image2 from "../images/Keeper.jpg";
import Image3 from "../images/ToDoList.jpg";
import Image4 from "../images/RecipeBook.jpg";

let skills1 = ['HTML', 'CSS', 'JavaScript', 'node.js', 'express.js', 'React', 'MUI', 'API']
let skills2 = ['HTML', 'CSS', 'JavaScript', 'React']
let skills3 = ['HTML', 'CSS', 'JavaScript', 'SQL Database', 'MongoDB']
let skills4 = ['HTML', 'Bootstrap', 'TypeScript', 'Angular', 'Firebase']

function Projects() {
  return (
    <Container id="projects" className="section">
      <h2>My Projects</h2>
      <p>
        Here you will find some of my projects that I recently finished or I am
        currently working on.
      </p>
      <Project
        img={Image1}
        title="WeatherApp"
        description="
        The theme of this project is weather app. Its task is to display some basic information about the weather, time, etc., after specifying the name of the city. To create this app I used my knowledge and skills in backend node.js with framework express.js, React Components and MUI elements and CSS styles to create responsive website. I also used real-time API."
        more="https://github.com/WojciechZ04/weather-app"
        skills={skills1}
      />
      <Project
        // img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
        img={Image2}
        title="Keeper"
        description="
        The 'Keeper' app was inspired by the Google Keep app. It is used to quickly create notes where you can write down your ideas. The main focus of this project was to improve skills on React framework."
        more="https://github.com/WojciechZ04/keeper-app4"
        skills={skills2}
      />
      <Project
        img={Image3}
        title="To Do List"
        description="A simple interactive to-do list app. As befits a to-do list, the application has the ability to add your own tasks to the list and delete those that have been completed. It is also possible to create your own lists by extending the url with the name of the list (e.g. adding /work will create a list with the title 'work'). The project uses a database hosted with MongoDB Atlas. The ejs language was used to create the application."
        more="https://github.com/WojciechZ04/to_do_list"
        skills={skills3}
      />
      <Project
        // img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
        img={Image4}
        title="Recipe Book"
        description="The app has employed angular as the primary framework. This project was created during course 'Angular - The Complete Guide (2023 Edition)'. It is basic recipe book, where authorized user can fetch recipes saved in database or create his own and save them on public DB. The app has also the shopping list feature, where both logged and not logged in users have access."
        more="https://github.com/WojciechZ04/recipeBook"
        skills={skills4}
      />

      <p className="text">
        More projects can be found{" "}
        <a href="https://github.com/WojciechZ04">here</a>.
      </p>
    </Container>
  );
}

export default Projects;
