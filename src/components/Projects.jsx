import React from "react";
import Project from "./Project";
import { Container } from "@mui/material";
import Image1 from "./weatherApp.jpg";

function Projects() {
  return (
    <Container id="projects" sx={{ pt: "50px" }}>
      <h2>Moje projekty</h2>
      <p>
        Poniżej przedstawiam kilka większych projektów, które wykonałem w celu
        zwiększania swoich umiejętności.
      </p>
      <Project
        img={Image1}
        title="Aplikacja pogodowa"
        description="Tematem tego projektu jest aplikacja pogodowa. Jej zadaniem jest wyświetlenie kilku podstawowych informacji o pogodzie, godzinie itd., po określeniu nazwy miasta. Aktualnie wykorzystano wiedzę z express.js/node.js, komponentów React and MUI, wykorzystania API czasu rzeczywistego, stylów CSS, konstruowaniu responsywnych stron oraz komunikacji między front- i backendem."
        more="https://github.com/WojciechZ04/weather-app"
      />
      <Project
        img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
        title="Keeper"
        description="Aplikacja 'Keeper' została zainspirowana aplikacją Google Keep. Służy do szybkiego tworzenia notatek, w których można zapisać swoje pomysły. Projekt skupia się w całości na wykorzystywanym frameworku Reacta."
        more="https://github.com/WojciechZ04/keeper-app4"
      />
      <Project
        img="https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"
        title="To Do List"
        description="Prosta interaktywna aplikacja listy do zrobienia. Jak przystało na listę rzeczy do zrobienia, aplikacja ma możliwość dodawania własnych zadań do listy oraz usuwanie tych, które zostały ukończone. Istnieje również możliwość tworzenia własnych list poprzez rozszerzenie adresu url o nazwę listy (np. dodanie /praca, utworzy listę z tytułem 'praca'). Projekt wykorzystuje bazę danych shostowaną za pomocą MongoDB Atlas. Do utworzenia aplikacji wykorzystano język ejs."
        more="https://github.com/WojciechZ04/to_do_list"
      />
      <p className="text">
        Więcej projektów znajdziesz{" "}
        <a href="https://github.com/WojciechZ04">tutaj</a>.
      </p>
    </Container>
  );
}

export default Projects;
