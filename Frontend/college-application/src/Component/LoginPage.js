import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage.css'; // Ensure this path is correct

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role }),
            });
            if (response.ok) {
                const data = await response.json();
                // Assuming the response contains the role of the user
                switch (data.role) {
                    case 'Student':
                        navigate('/student-dashboard');
                        break;
                    case 'Faculty Member':
                        navigate('/faculty-dashboard');
                        break;
                    case 'Administrator':
                        navigate('/admin-dashboard');
                        break;
                    default:
                        setError('Invalid role');
                }
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="Student">Student</option>
                        <option value="Faculty Member">Faculty Member</option>
                        <option value="Administrator">Administrator</option>
                    </select>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
