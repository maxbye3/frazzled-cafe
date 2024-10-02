<?php
$phpEmail = [
        'apiKey' => "AIzaSyB8Px8os2qOkMHD6eXglqBbJjHvLf2Z3YQ",
        'authDomain' => "frazzled-cafe.firebaseapp.com",
        'projectId' => "frazzled-cafe",
        'storageBucket' => "frazzled-cafe.appspot.com",
        'messagingSenderId' => "805775727885",
        'appId' => "1:805775727885:web:02a274eed78d358f5d2444"
];
header('Content-Type: application/json');
echo json_encode(['accordion' => $phpEmail]);
?>