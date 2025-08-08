<?php

class Validator {

    public static function isNotEmpty(...$fields): bool {
        foreach ($fields as $field) {
            if (empty($field)) {
                return false;
            }
        }
        return true;
    }

    public static function isValidUsername(string $username): bool {
        return preg_match('/^[a-zA-Z0-9_]{3,20}$/', $username);
    }

    public static function isValidEmail(string $email): bool {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function isStrongPassword(string $password): bool {
        // at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character
        return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/', $password);
    }

    public static function passwordsMatch(string $password, string $repPassword): bool {
        return $password === $repPassword;
    }

}