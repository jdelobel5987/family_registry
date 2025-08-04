<?php

class Login {
    private string $username;
    private string $email;
    private string $password;

    // Constructor to initialize login properties
    public function __construct(string $username, string $password) {
        $this->username = $username;
        $this->password = $password;    
    }

    // Method to validate login credentials
    public function validate(PDO $pdo): bool {
        $stmt = $pdo->prepare("
            SELECT email, password
            FROM sitb_users
            WHERE name = :username OR email = :username
        ");

        $stmt->execute([
            ':username' => $this->username
        ]);
        
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            return password_verify($this->password, $user['password']);
        }
        return false;
    }
}