// import React, { useState } from 'react';
// import './Signup.css';
// import Particles from 'react-tsparticles';

// const SignUp = () => {
//     const [role, setRole] = useState('panelist');

//     const handleRoleChange = (event) => {
//         setRole(event.target.value);
//     };

//     return (
//         <div className="authi-con">
//             <Particles/>
//             <div className="authi-card">
//                 <h2>Sign Up</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input type="text" id="name" placeholder="Enter your name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" placeholder="Enter your email" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" placeholder="Enter your password" required />
//                     </div>
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyParticles from '../Particles/Particles';
import '../Signup/Signup';

const Login = () => {
    const navigate= useNavigate();
    const [name, setName] = useState('');
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
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            id="name"
                            placeholder="Enter your Full Name"
                            value={name}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
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
                    
                    <button type="submit">Signup</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

export default Login;
