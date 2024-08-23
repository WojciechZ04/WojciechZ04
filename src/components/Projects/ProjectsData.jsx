import Image1 from "../../images/weatherApp.jpg";
import Image2 from "../../images/Keeper.jpg";
import Image3 from "../../images/ToDoList.jpg";
import Image4 from "../../images/RecipeBook.jpg";

// let InWorkImage = "https://static.vecteezy.com/system/resources/previews/000/552/199/original/gears-vector-icon.jpg"

let skills1 = [
	"HTML",
	"CSS",
	"JavaScript",
	"node.js",
	"express.js",
	"React",
	"MUI",
	"API",
	"Render"
  ];
  let skills2 = ["HTML", "CSS", "JavaScript", "React, Render"];
  let skills3 = ["HTML", "CSS", "JavaScript", "SQL Database", "MongoDB", "EJS"];
  let skills4 = ["HTML", "Bootstrap", "TypeScript", "Angular", "Firebase", "Authentication", "noSQL Database"];
  

const projectsData = [
	{
		image: Image4,
		title: 'Recipe Book',
		description: "The app has employed angular as the primary framework. This project was created during course 'Angular - The Complete Guide (2023 Edition)'. It is basic recipe book, where authorized user can fetch recipes saved in database or create his own and save them on public DB. The app has also the shopping list feature, where both logged and not logged in users have access.",
		github: 'https://github.com/WojciechZ04/recipeBook',
		skills: skills4,
		page: 'https://recipebook-fa2c3.web.app/'
	},
	{
		image: Image1,
		title: 'WeatherApp',
		description: ' The theme of this project is weather app. Its task is to display some basic information about the weather, time, etc., after specifying the name of the city. To create this app I used my knowledge and skills in backend node.js with framework express.js, React Components and MUI elements and CSS styles to create responsive website. I also used real-time API.',
		github: 'https://github.com/WojciechZ04/weather-app',
		skills: skills1,
		page: 'https://weather-app-ge08.onrender.com/'
	},
	{
		image: Image2,
		title: 'Keeper',
		description: "The 'Keeper' app was inspired by the Google Keep app. It is used to quickly create notes where you can write down your ideas. The main focus of this project was to improve skills on React framework.",
		github: 'https://github.com/WojciechZ04/keeper-app4',
		skills: skills2,
		page: 'https://keeper-app-wzkm.onrender.com/'
	},
	{
		image: Image3,
		title: 'To Do List',
		description: "A simple interactive to-do list app. As befits a to-do list, the application has the ability to add your own tasks to the list and delete those that have been completed. It is also possible to create your own lists by extending the url with the name of the list (e.g. adding /work will create a list with the title 'work'). The project uses a database hosted with MongoDB Atlas. The ejs language was used to create the application.",
		github: 'https://github.com/WojciechZ04/to_do_list',
		skills: skills3,
		page: '/'
	}
];

export default projectsData;