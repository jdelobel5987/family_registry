<?php

function generateSlug($name) {
    $slug = strtolower($name);                          // Minuscules
    $slug = iconv('UTF-8', 'ASCII//TRANSLIT', $slug);   // Enlève les accents
    $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);  // Supprime les caractères spéciaux
    $slug = trim($slug);                                // Supprime les espaces au début/fin
    $slug = preg_replace('/[\s-]+/', '-', $slug);       // Remplace espaces & tirets multiples par un seul tiret
    return $slug;
}