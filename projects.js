"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const projectsArray = [
    {
      title: "Road Trip Summary",
      summary: "A JavaScript app that calculates miles traveled and fuel economy based on user input.",
      image: "images/roadtrip.png",
      repo: "https://github.com/corger5719-ecpi/road-trip-summary"
    },
    {
      title: "Counting Visits Page",
      summary: "Tracks the number of times a user visits a webpage using cookies.",
      image: "images/cookies.png",
      repo: "https://github.com/corger5719-ecpi/counting-visits"
    },
    {
      title: "Portfolio Website",
      summary: "A personal portfolio site showcasing HTML, CSS, and JavaScript projects.",
      image: "images/portfolio.png",
      repo: "https://github.com/corger5719-ecpi/Portfolio"
    }
  ];

  const projectsSection = document.getElementById("projects");

  projectsArray.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.title}">
      <p>${project.summary}</p>
      <a href="${project.repo}" target="_blank">View Repository</a>
    `;

    projectsSection.appendChild(card);
  });
});
