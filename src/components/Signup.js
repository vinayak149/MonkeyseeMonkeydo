import React, { useState } from 'react';
import './Signup.css';

const SignUp = () => {
    const [role, setRole] = useState('panelist');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="authi-con">
            <div className="authi-card">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="panelist"
                                    checked={role === 'panelist'}
                                    onChange={handleRoleChange}
                                />
                                Panelist
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="team"
                                    checked={role === 'team'}
                                    onChange={handleRoleChange}
                                />
                                Team
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="judge"
                                    checked={role === 'judge'}
                                    onChange={handleRoleChange}
                                />
                                Judge
                            </label>
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
