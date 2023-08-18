import "./styles/index.css";
import icon from "./assets/restaurant-952.svg"
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import github from "./assets/icons8-github.svg";
import twitter from "./assets/icons8-twitter.svg";

// Select the icon and set its src
const pageIcon = document.querySelector(".logo-icon");
pageIcon.src = icon;

// Add click event-listeners to nav links
const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", createHome);

const menuLink = document.getElementById("menu-link");
menuLink.addEventListener("click", createMenu);

const contactLink = document.getElementById("contact-link");
contactLink.addEventListener("click", createContact);

// call the createHome function
createHome();

// footer icons
const githubIcon = document.querySelector(".social-icon-1");
githubIcon.src = github;

const twitterIcon = document.querySelector(".social-icon-2");
twitterIcon.src = twitter;