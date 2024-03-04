import React, { useState } from 'react';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';
import MyParticles from '../Particles/Particles';

const Login = () => {
    const navigate= useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dummyUsers = [
        { email: 'user1@example.com', password: 'varish@178'  },
        { email: 'user2@example.com', password: 'password2'  },
        { email: 'user3@example.com', password: 'password3' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = dummyUsers.find(user => user.email === email && user.password === password );
        if (user) {
            navigate('/participant-board');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="auth-container">
            <MyParticles />
            <div className="auths-card">
                <h2>Login</h2>
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
                    <button type="submit">Login</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

export default Login;
