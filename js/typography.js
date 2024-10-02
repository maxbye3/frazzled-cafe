// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Px8os2qOkMHD6eXglqBbJjHvLf2Z3YQ",
    authDomain: "frazzled-cafe.firebaseapp.com",
    projectId: "frazzled-cafe",
    storageBucket: "frazzled-cafe.appspot.com",
    messagingSenderId: "805775727885",
    appId: "1:805775727885:web:02a274eed78d358f5d2444"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

// Example usage: Send a name to Firebase
function typo() {
    // Get the name from the form
    const email = document.getElementById('email').value.trim();
    console.log('email', email)

    // Send the name to Firebase
    sendNameToFirebase(email);
}

// Function to send name to Firebase
function sendNameToFirebase(name) {
    // Reference to the 'names' node in the database
    const namesRef = database.ref('names');

    // Push the name to the database
    namesRef.push({
        name: name
    }).then(() => {
        console.log('Name sent to Firebase successfully');
    }).catch((error) => {
        console.error('Error sending name to Firebase:', error);
    });
}