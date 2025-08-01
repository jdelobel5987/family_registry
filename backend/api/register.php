<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { 
    // Handle preflight request
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the request body is empty
    $data = file_get_contents('php://input');
    if (empty($data)) {
        http_response_code(400);
        echo json_encode(['error' => 'No data provided']);
        exit;
    }

    // Decode the JSON data
    $data = json_decode($data, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    // Validate required fields
    if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    } else {
        // Here you would typically handle the registration logic, such as saving to a database
        // For demonstration, we'll just return the received data
        http_response_code(200);
        echo json_encode(['message' => 'Registration successful', 'data' => $data]);
        exit;
    }
}
// Handle POST request
// $data = json_decode(file_get_contents('php://input'), true);
// $username = $data['username'];
// $email = $data['email'];
// $password = $data['password'];

// echo $data;