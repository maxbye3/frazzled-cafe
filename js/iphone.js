document.addEventListener("DOMContentLoaded", function () {
    // Hide the video element and show the poster image


    // Function to detect if the user is on an iPhone
    function isIphone() {
        return /iPhone/.test(navigator.userAgent) && !window.MSStream;
    }

    // If the user is on an iPhone, show the poster image instead of the video
    const videoElement = document.getElementById('video-element');
    const posterImage = document.getElementById('poster-image');
    if (isIphone()) {
        // Hide the video element and show the poster image
        videoElement.style.display = 'none';
        posterImage.style.display = 'block';
    } else {
        videoElement.style.display = 'block';
        posterImage.style.display = 'none';
    }
});