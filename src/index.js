import "./styles.css";
import { LoadHomePage } from "./scripts/home-page.js";
import { LoadAboutPage } from "./scripts/about-page.js";
import { LoadMenuPage } from "./scripts/menu-page.js";

document.addEventListener('DOMContentLoaded', () => {

  console.log("prep done");

  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");

  LoadHomePage();

  homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    LoadHomePage();
  });

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    LoadMenuPage();

  });

  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    LoadAboutPage();
  });
});
