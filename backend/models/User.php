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
}