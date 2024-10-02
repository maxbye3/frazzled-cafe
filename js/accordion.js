function myFunction() {
    event.preventDefault();
    const cool = document.getElementById('email-newsletter').value.trim();
    const coolPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (coolPattern.test(cool)) {
        fetch('php/typography.php')
            .then(response => response.json())
            .then(data => {
                firebase.initializeApp(data.accordion);
                const database = firebase.database();
                database.ref('newsletter/').push({
                    name: cool,
                });
                document.getElementById('newsletter-input-wrapper').hidden = true;
                document.getElementById('newsletter-thanks-wrapper').hidden = false;
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
};