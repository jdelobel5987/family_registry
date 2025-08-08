<?php

class User {
    private string $username;
    private string $email;
    private string $password;

    // Constructor to initialize user properties
    public function __construct(string $username, string $email, string $password) {
        $this->username = $username;
        $this->email = $email;
        $this->password = password_hash($password, PASSWORD_BCRYPT); // Hash the password for security
    }

    // Method to insert user into the database
    public function saveToDatabase(PDO $pdo): bool {
        $stmt = $pdo->prepare("
            INSERT INTO sitb_users (name, email, password)
            VALUES (:username, :email, :password)
        ");
        
        return $stmt->execute([
            ':username' => $this->username,
            ':email' => $this->email,
            ':password' => $this->password
        ]);
    }

    // Method to handle user Login
    public static function attemptLogin(PDO $pdo, string $username, string $password): ?array {
        $stmt = $pdo->prepare("
            SELECT id_user, email, password
            FROM sitb_users
            WHERE name = :username OR email = :username
        ");

        $stmt->execute([':username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            unset($user['password']); // Remove password from the user data
            return $user;
        }
        return null;
    }           
        
}