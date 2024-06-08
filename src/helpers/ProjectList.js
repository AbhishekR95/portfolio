import crud from "../assets/CRUD.png";
import todo from "../assets/todo.png";
import myntra from "../assets/myntra.avif";
export const projectList = [
  {
    name: "Todo-List",
    image: todo,
    skills: "HTML, CSS & Javascript",
    description:
      "This is todolist app built using HTML CSS and JS along with local storage",
    ref: "todoList-Javascript",
  },
  {
    name: "React - Cart project",
    image: myntra,
    skills: "React",
    description:
      "I have created this React project purely to showcase my React skills hence this is not a full fledged e-commerce website, but mainly covers Home page, Add to Cart page, and Filter feature using Context API.",
    ref: "React-ContextAPI/",
  },

  {
    name: "Weather app",
    image: crud,
    skills: "React & React-Bootstrap",
    description:
      "This is a CRUD app craeted with the help of React using Axios and Mock API as a backend to store the users data.",
    ref: "crud-app",
  },
];
