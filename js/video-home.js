document.addEventListener('DOMContentLoaded', function () {
    // Check if the video element exists
    const videoElement = document.getElementById('video-element');
    if (videoElement) {
        console.log('Video element found:', videoElement); // Active selection

        // Add an event listener for the 'ended' event
        videoElement.addEventListener('ended', function () {
            console.log('Video ended');
            // Calculate the position of the video element
            const rect = videoElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementBottom = rect.bottom + scrollTop;
            if (window.pageYOffset < 200) {
                // Scroll to the bottom of the video element
                window.scrollTo({ top: elementBottom, behavior: 'smooth' });
            }
            // Reset the video to the beginning and play it again
            videoElement.currentTime = 0;
            videoElement.play();

        });
    } else {
        console.error('Video element not found');
    }
});