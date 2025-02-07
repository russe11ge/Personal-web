const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false; 

musicBtn.addEventListener("click", function() {
    if (isPlaying) {
        music.pause();
        musicBtn.classList.remove("playing");
    } else {
        music.play();
        musicBtn.classList.add("playing");
    }
    isPlaying = !isPlaying;
});