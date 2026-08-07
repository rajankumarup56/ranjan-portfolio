const username = "rajankumarup56";
let allProjects = [];

// 🔥 LOAD PROJECTS
async function loadProjects() {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();

  allProjects = data;
  displayProjects(data);

  document.getElementById("loader").style.display = "none";
}

// 🔥 DISPLAY PROJECTS
function displayProjects(projects) {
  const container = document.getElementById("project-container");
  container.innerHTML = "";

  projects.slice(0, 6).forEach(repo => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description"}</p>
      <a href="${repo.html_url}" target="_blank">View Code</a>
    `;

    container.appendChild(card);
  });

  revealOnScroll();
}

// 🔥 FILTER LOGIC
function filterProjects(type) {
  if (type === "all") {
    displayProjects(allProjects);
    return;
  }

  const filtered = allProjects.filter(repo =>
    repo.name.toLowerCase().includes(type)
  );

  displayProjects(filtered);
}

// 🔥 SCROLL ANIMATION
function revealOnScroll() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

// 🔥 TYPING EFFECT
const text = "Backend Developer | Security Mindset";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

// 🔥 BUTTONS
function downloadResume() {
  window.open("assets/resume.pdf");
}

function openLinkedIn() {
  window.open("https://linkedin.com/in/your-profile");
}

// INIT
window.onload = () => {
  loadProjects();
  typingEffect();
};

window.addEventListener("scroll", revealOnScroll);