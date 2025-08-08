<?php

use Firebase\JWT\JWT;

require_once '../models/Validator.php';
require_once '../models/User.php';
require_once '../models/Database.php';

class LoginController {
    public function login(array $data): void {

        if (!Validator::isNotEmpty($data['username'], $data['password'])) {
            $this->respondError(400, 'Username and password are required');
            return;
        }

        try {
            $pdo = Database::getConnection();           
            $user = User::attemptLogin($pdo, $data['username'], $data['password']);
            
            if ($user) {
                $payload = [
                    'user_id' => $user['id_user'],
                    'email' => $user['email'],
                    'exp' => time() + 3600 // Token expires in 1 hour
                ];
                
                $jwt = JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');
                $response = [
                    'success' => true,
                    'message' => 'Login successful',
                    'token' => $jwt,
                    'user' => $user
                ];

                $this->respondSuccess($response);
            } else {
                $this->respondError(401, 'Invalid credentials');
            }
        } catch (Exception $e) {
            $this->respondError(500, $e->getMessage());
        }
    }

    private function respondError(int $statusCode, string $message): void {
        http_response_code($statusCode);
        echo json_encode(['success' => false, 'error' => $message]);
    }

    private function respondSuccess(array $data): void {
        http_response_code(200);
        echo json_encode($data);
    }
}