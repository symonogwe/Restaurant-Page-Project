import "./styles/index.css";
import createHome from "./home";
import icon from "./assets/restaurant-952.svg"

// Select the icon and set its src
const pageIcon = document.querySelector(".logo-icon");
pageIcon.src = icon;

// Select the main-content div and append content
// const mainContent = document.querySelector(".main-content");
// mainContent.append(createHome());

createHome();
