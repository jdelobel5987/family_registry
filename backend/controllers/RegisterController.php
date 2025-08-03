<?php

require_once '../models/Validator.php';
require_once '../models/User.php';
require_once '../models/Database.php';

class RegisterController {
    public function register(array $data): void {

        $error = $this->validate($data);

        if ($error !== null) {
            $this->respondError(400, $error);
            return;
        }

        try {
            $pdo = Database::getConnection();
            $user = new User($data['username'], $data['email'], $data['password']);
            $success = $user->saveToDatabase($pdo);

            if ($success) {
                http_response_code(201);
                echo json_encode(['message' => 'User registered successfully']);
            } else {
                $this->respondError(500, 'Failed to register user');
            }
        } catch (Exception $e) {
            $this->respondError(500, $e->getMessage());
        }
    }

    private function validate(array $data): ?string {
        if (!Validator::isNotEmpty($data['username'], $data['email'], $data['password'], $data['repPassword'])) {
            return 'All fields are required';
        }
        if (!Validator::isValidUsername($data['username'])) {
            return 'Invalid username. It must be 3-20 characters long and can only contain letters, numbers, and underscores.';
        }
        if (!Validator::isValidEmail($data['email'])) {
            return 'Invalid email format';
        }
        if (!Validator::isStrongPassword($data['password'])) {
            return 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character.';
        }
        if (!Validator::passwordsMatch($data['password'], $data['repPassword'])) {
            return 'Passwords do not match';
        }

        return null;
    }

    private function respondError(int $statusCode, string $message): void {
        http_response_code($statusCode);
        echo json_encode(['error' => $message]);
    }
}