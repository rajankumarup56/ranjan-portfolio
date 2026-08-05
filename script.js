// 🔥 PROJECT DATA
const projects = [
  {
    title: "MERN App",
    desc: "Full stack app with authentication",
    image: "assets/project1.png",
    github: "https://github.com/rajankumarup56/project1"
  },
  {
    title: "Backend API",
    desc: "CRUD API with SQL database",
    image: "assets/project2.png",
    github: "https://github.com/rajankumarup56/project2"
  },
  {
    title: "Security Tool",
    desc: "Password strength checker",
    image: "",
    github: "https://github.com/rajankumarup56/project3"
  }
];

// 🔥 LOAD PROJECTS
function loadProjects() {
  const container = document.getElementById("project-container");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      ${project.image ? `<img src="${project.image}" alt="project">` : ""}
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${project.github}" target="_blank">View Code</a>
    `;

    container.appendChild(card);
  });
}

// 🔥 SCROLL ANIMATION
function revealOnScroll() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      card.classList.add("show");
    }
  });
}

// 🔥 RESUME BUTTON
function downloadResume() {
  alert("Add your resume link here");
}

// 🔥 INIT
window.onload = loadProjects;
window.addEventListener("scroll", revealOnScroll);