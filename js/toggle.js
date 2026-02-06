const devopsBtn = document.getElementById("devopsBtn");
const backendBtn = document.getElementById("backendBtn");

const devopsTrack = document.getElementById("devops-track");
const backendTrack = document.getElementById("backend-track");

devopsBtn.addEventListener("click", () => {
  devopsBtn.classList.add("active");
  backendBtn.classList.remove("active");

  devopsTrack.classList.add("visible");
  backendTrack.classList.remove("visible");
});

backendBtn.addEventListener("click", () => {
  backendBtn.classList.add("active");
  devopsBtn.classList.remove("active");

  backendTrack.classList.add("visible");
  devopsTrack.classList.remove("visible");
});
