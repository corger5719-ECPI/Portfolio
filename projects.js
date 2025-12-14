/*
Author: Cora Germany
Date: 12/14/2025
Purpose: Render portfolio projects dynamically using sessionStorage
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

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
   * Step 3: Store / Retrieve sessionStorage Data
   *********************************************************/
  let projectsData;

  if (!sessionStorage.getItem("projects")) {
    sessionStorage.setItem("projects", JSON.stringify(projectsArray));
    projectsData = projectsArray;
  } else {
    projectsData = JSON.parse(sessionStorage.getItem("projects"));
  }

  /*********************************************************
   * Step 4: Render Projects
   *********************************************************/
  const projectsSection = document.getElementById("projects");

  // Safety check
  if (!projectsSection) {
    console.error("Projects section not found.");
    return;
  }

  projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.title} icon">
      <p>${project.summary}</p>
      <a href="${project.repo}" target="_blank">View Repository</a>
    `;

    projectsSection.appendChild(card);
  });

});

