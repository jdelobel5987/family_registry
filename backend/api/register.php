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
    $data = file_get_contents('php://input'); // maybe localhost:80 ?
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

    require_once '../config/bootstrap.php'; // Load the bootstrap file to initialize environment variables
    require_once '../controllers/RegisterController.php';
    $controller = new RegisterController();
    $controller->register($data);
}