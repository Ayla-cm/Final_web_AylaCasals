const video = document.querySelector("#euphoria-video");

if (video) {
  video.addEventListener("click", function () {
    video.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/ka7GJNrJTNw"
        title="Euphoria - Ayla Casals"
        allowfullscreen>
      </iframe>
    `;
  });
}
