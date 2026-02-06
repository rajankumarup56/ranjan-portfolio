<!-- JS -->
  <script>
    const devBtn = document.getElementById("devopsBtn");
    const backBtn = document.getElementById("backendBtn");
    const devTrack = document.getElementById("devops-track");
    const backTrack = document.getElementById("backend-track");

    devBtn.onclick = () => {
      devBtn.classList.add("active");
      backBtn.classList.remove("active");
      devTrack.classList.add("visible");
      devTrack.classList.remove("hidden");
      backTrack.classList.add("hidden");
    };

    backBtn.onclick = () => {
      backBtn.classList.add("active");
      devBtn.classList.remove("active");
      backTrack.classList.add("visible");
      backTrack.classList.remove("hidden");
      devTrack.classList.add("hidden");
    };
  </script>

</body>
</html>
