document.addEventListener("DOMContentLoaded", function () {
    // Perform an AJAX request to getEmail.php
    fetch('php/email.php')
        .then(response => response.json())
        .then(data => {
            // Log the email to the console
            console.log(data.email);
            emailjs.init({
                publicKey: data.email,
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {

    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form values
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

        // If all validations pass, submit the form
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
});