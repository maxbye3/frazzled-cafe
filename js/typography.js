function trflu() {
    event.preventDefault();
    fetch('php/typography.php')
        .then(response => response.json())
        .then(data => {
            firebase.initializeApp(data.accordion);
            const database = firebase.database();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const captcha = document.getElementById('captcha').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form fields
            if (!name || !email || !subject || !captcha || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Validate captcha
            if (captcha !== '20') {
                alert('Incorrect answer to the captcha question.');
                return;
            }

            database.ref('email/').push({
                name,
                email,
                subject,
                message,
            }).then(() => {
                location.href = "./email-success.html";
            }).catch((error) => {
                console.error('Error sending data to Firebase:', error);
                // location.href = "./email-failure.html"
            });
        })
        .catch(error => {
            console.error('Error:', error);
            location.href = "./email-failure.html"
        });

};