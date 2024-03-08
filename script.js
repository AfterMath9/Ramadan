document.getElementById("show-card").addEventListener("click", function() {
    document.getElementById("congratulations-card").style.display = "block";
    document.getElementById("sound-effect").play();
    this.style.display = "none"; // Hide the button after click
    // Add particles or snow effects here
    document.getElementById("video-background").muted = true;
});