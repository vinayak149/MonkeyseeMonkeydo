import React from 'react';
import './About.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube , FaGithub } from "react-icons/fa";

const prizes = [
    { id: 1, title: "Vinayak Sharma", description: "" },
    { id: 2, title: "Rahul Kalia", description: "" },
    { id: 3, title: "Nitish Hans", description: "" },
    { id: 4, title: "Varish Sanghvi", description: "" },
    { id: 5, title: "Abhirup Datta", description: "" },
    { id: 6, title: "Ajin AN", description: "" },
    { id: 7, title: "Aman Raj", description: "" },
    { id: 8, title: "Pabba Nithin Kumar Goud", description: "" },
    { id: 9, title: "Gandhivaram Nithish Kumar Reddy", description: "" },
    { id: 10, title: "Nithish Soorya SS", description: "" },
    { id: 11, title: "Jasbinder Singh", description: "" },
    { id: 12, title: "Shaik Anas Moinuddin", description: "" }
];

const PrizeSection = () => {
    return (
        <section className="prize-section">
            <h2>Meet Our Team</h2>
            <p>A collective effort by folks spanning diverse tech stacks resulted in the creation of the Hack-a-Thon portal, showcasing the power of collaboration.</p>
            <div className="prize-container">
                {prizes.map(prize => (
                    <div key={prize.id} className="prize-item">
                        <div className="image-placeholder">
                            <img src={require('../components/person.png')} alt={prize.title} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </div>
                        <h3>{prize.title}</h3>
                        <p className="role-description">Software Developer Engineer</p> {/* Role description added */}
                        <p>{prize.description}</p>
                        <div className="social-icons">
                            <FaGithub />
                            <FaLinkedinIn />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PrizeSection;
