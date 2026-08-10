// Custom script for the Piano pages only (piano_index.html & Piano_Models.html)

// 1) Play/Pause button for the piano video (piano_index.html)
const video = document.querySelector(".piano-video");
const videoToggle = document.querySelector(".video-toggle");

if (video && videoToggle) {
  videoToggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoToggle.textContent = "Pause";
    } else {
      video.pause();
      videoToggle.textContent = "Play";
    }
  });
}

// 2) Filter buttons for piano models (Piano_Models.html)
const filterButtons = document.querySelectorAll(".filter-btn");
const pianoCards = document.querySelectorAll(".piano-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let category = btn.getAttribute("data-filter");

    // Highlight the active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show only cards that match the chosen category
    pianoCards.forEach(card => {
      let show = category === "all" || card.getAttribute("data-category") === category;
      card.style.display = show ? "" : "none";
    });
  });
});
