import {useState} from 'react';

// custom hook for managing login form state and submission
function useLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('http://php/api/login.php', {   for when in production
            const response = await fetch('http://localhost:80/api/login.php', { // for local development
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Login successful:', result);
            alert('Login successful! You can now access your contact records.');

            // Optionally redirect to the home page or dashboard
            window.location.href = '/';
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return { 
        username, setUsername, 
        password, setPassword, 
        handleSubmit 
    };
}

export default useLoginForm;