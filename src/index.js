import "./styles/index.css";
import icon from "./assets/restaurant-952.svg"
import createHome from "./home";
import createMenu from "./menu";

// Select the icon and set its src
const pageIcon = document.querySelector(".logo-icon");
pageIcon.src = icon;

// Add click event-listeners to nav links
const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", createHome);

const menuLink = document.getElementById("menu-link");
menuLink.addEventListener("click", createMenu);

// call the createHome function
createHome();
