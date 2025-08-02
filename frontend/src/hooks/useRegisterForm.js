import {useState} from 'react';

// custom hook for managing registration form state and submission
function useRegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
        // const response = await fetch('http://php/api/register.php', {
        const response = await fetch('http://localhost:80/api/register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password, repPassword }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Registration successful:', result);
        alert('Registration successful! You can now log in.');

        // Optionally redirect to the login page
        window.location.href = '/login';
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    }
  };

  return {
    username, setUsername,
    email, setEmail,
    password, setPassword,
    repPassword, setRepPassword,
    handleSubmit
  };
}

export default useRegisterForm;