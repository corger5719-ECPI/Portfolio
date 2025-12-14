/*
Author: Cora Germany
Date: 12/14/2025
Purpose: Render portfolio projects using objects, arrays, sessionStorage,
         and dynamic DOM manipulation
*/

"use strict";

/*********************************************************
 * Step 1: Define Project Objects
 *********************************************************/
const project1 = {
  title: "Road Trip Summary",
  summary: "A JavaScript app that calculates miles traveled and fuel economy based on user input.",
  image: "images/roadtrip.png",
  repo: "https://github.com/corger5719-ecpi/road-trip-summary"
};

const project2 = {
  title: "Counting Visits Page",
  summary: "Tracks the number of times a user visits a webpage using cookies.",
  image: "images/cookies.png",
  repo: "https://github.com/corger5719-ecpi/counting-visits"
};

const project3 = {
  title: "Portfolio Website",
  summary: "A personal portfolio site showcasing HTML, CSS, and JavaScript projects.",
  image: "images/portfolio.png",
  repo: "https://github.com/corger5719-ecpi/Portfolio"
};

/*********************************************************
 * Step 2: Store Objects in an Array
 *********************************************************/
const projectsArray = [project1, project2, project3];

/*********************************************************
 * Step 3: Store and Parse Information Using sessionStorage
 *********************************************************/
let projectsData;

if (!sessionStorage.getItem("projects")) {
  sessionStorage.setItem("projects", JSON.stringify(projectsArray));
  projectsData = projectsArray;
} else {
  projectsData = JSON.parse(sessionStorage.getItem("projects"));
}

/*********************************************************
 * Step 4: Render Projects Dynamically
 *********************************************************/
const projectsSection = document.getElementById("projects");

projectsData.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title + " icon";

  const summary = document.createElement("p");
  summary.textContent = project.summary;

  const link = document.createElement("a");
  link.href = project.repo;
  link.textContent = "View Repository";
  link.target = "_blank";

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(summary);
  card.appendChild(link);

  projectsSection.appendChild(card);
});
