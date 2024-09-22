document.addEventListener('DOMContentLoaded', function () {
    // Check if the video element exists
    const videoElement = document.getElementById('video-element');
    if (videoElement) {
        console.log('Video element found:', videoElement);

        // Add an event listener for the 'ended' event
        videoElement.addEventListener('ended', function () {
            console.log('Video ended');
            // Calculate the position of the video element
            const rect = videoElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementBottom = rect.bottom + scrollTop;
            // Scroll to the bottom of the video element
            window.scrollTo({ top: elementBottom, behavior: 'smooth' });
        });
    } else {
        console.error('Video element not found');
    }
});