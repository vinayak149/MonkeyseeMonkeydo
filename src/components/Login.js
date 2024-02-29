import React, { useState } from 'react';
import './AuthPage.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('participant'); // Default role is participant
    const [error, setError] = useState('');

    // Dummy user data
    const dummyUsers = [
        { email: 'user1@example.com', password: 'password1', role: 'panelist' },
        { email: 'user2@example.com', password: 'password2', role: 'judge' },
        { email: 'user3@example.com', password: 'password3', role: 'participant' },
        // Add more dummy users as needed
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the entered email, password, and role match any dummy user
        const user = dummyUsers.find(user => user.email === email && user.password === password && user.role === role);
        if (user) {
            // Login successful, perform actions like redirecting to a protected route
            window.location.href = '/dashboard';
        } else {
            // Login failed, display error message
            setError('Invalid email, password, or role');
        }
    };

    return (
        <div className="auth-container">
            <div className="auths-card">
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Role:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="panelist"
                                    checked={role === 'panelist'}
                                    onChange={() => setRole('panelist')}
                                />
                                Panelist
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="judge"
                                    checked={role === 'judge'}
                                    onChange={() => setRole('judge')}
                                />
                                Judge
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="participant"
                                    checked={role === 'participant'}
                                    onChange={() => setRole('participant')}
                                />
                                Participant
                            </label>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
