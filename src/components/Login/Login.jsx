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

// import MyParticles from '../Particles/Particles';
// import React, { useState, useEffect } from "react";
// import { MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import moment from "moment";
// import Swal from "sweetalert2";
// import Navbar2 from "../Navbar/Navbar";

// import "./AuthPage.css"; // Import the external CSS file

// function Login() {
//   const [isSubmit, setSubmit] = useState(false);
//   const navigate = useNavigate();

//   const [teamForm, setTeamForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInput = (e) => {
//     const { id, value } = e.target;
//     setTeamForm({ ...teamForm, [id]: value });
//   };

//   const handleclick = (e) => {
//     e.preventDefault();
//     setSubmit(true);
//     if (!teamForm?.email || !teamForm.password) {
//       Swal.fire({ icon: "error", title: "Oops...", text: "Username or password is empty!", });
//     }
//     else {
//       axios.post("/login", teamForm).then(
//         (response) => {
//           window.login = true;
//           window.status = "Logout";
//           localStorage.setItem("data", JSON.stringify(response.data));
//           if (response.data.role_id === 4) {
//             navigate("/participant");
//           } else if (response.data.role_id === 3) {
//             navigate("/judge");
//           } else if (response.data.role_id === 2) {
//             navigate("/panelist");
//           } else if (response.data.role_id === 1) {
//             navigate("/AdminDashboard");
//           }
//         },
//         (error) => {
//           console.log(error);
//           Swal.fire({ icon: "error", title: "Oops...", text: "Invalid username or password!", });
//           setTeamForm({ ...teamForm, email: '', password: '' });
//         }
//       );
//     }
//   };

//   const currDate = moment().format("YYYY-MM-DD");
//   const [event, setEvent] = useState({});

//   useEffect(() => {
//     axios.get('/getEvent')
//       .then(response => {
//         setEvent(response.data[0]);
//       }, (error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="login-container">
//       <MyParticles />
//       <MDBContainer fluid className="p-3 my-5 h-custom">
//         <MDBRow>
//           <MDBCol col="10" md="6" className="image-col">
//             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
//           </MDBCol>
//           <MDBCol col="4" md="5" className="form-col">
//             <h1 className="title">Hackcedo</h1>
//             <MDBInput id="email" value={teamForm.email} onChange={(e) => handleInput(e)} wrapperClass="mb-4" label="Email Address" type="email" size="lg" />
//             <MDBInput id="password" value={teamForm.password} onChange={(e) => handleInput(e)} wrapperClass="mb-4" label="Password" type="password" size="lg" />
//             {currDate >= event.startDate && currDate <= event.endDate && (
//               <p className="small fw-bold mt-2 pt-1 mb-2">
//                 Don't have an account?{" "}
//                 <Link to="/registrationForm" className="register-link"> Register </Link>
//               </p>
//             )}
//             <div className="col-12">
//               <MDBBtn onClick={handleclick} type="submit" className="login-btn">
//                 LogIn
//               </MDBBtn>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }
// export default Login;
