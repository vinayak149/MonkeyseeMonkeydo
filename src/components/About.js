import React from 'react';
import './About.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube , FaGithub } from "react-icons/fa";
import p1 from '../components/avatars/vinayak.jpg'
import p2 from '../components/avatars/rahul.jpg'
import p3 from '../components/avatars/nitish.jpg'
import p4 from '../components/avatars/varish.png'
import p5 from '../components/avatars/abhirup.jpg'
import p6 from '../components/avatars/ajin.jpeg'
import p7 from '../components/avatars/aman raj.jpeg'
import p8 from '../components/avatars/nithin.jpeg'
import p9 from '../components/avatars/nitish reddy.jpeg'
import p10 from '../components/avatars/nithish soorya.jpeg'
import p11 from '../components/avatars/jasbinder.jpeg'
import p12 from '../components/avatars/anas.jpeg'

const prizes = [
    { id: 1, title: "Vinayak Sharma", description: "",image:p1},
    { id: 2, title: "Rahul Kalia", description: "",image:p2 },
    { id: 3, title: "Nitish Hans", description: "",image:p3},
    { id: 4, title: "Varish Sanghvi", description: "",image:p4},
    { id: 5, title: "Abhirup Datta", description: "",image:p5 },
    { id: 6, title: "Ajin AN", description: "",image:p6 },
    { id: 7, title: "Aman Raj", description: "",image:p7},
    { id: 8, title: "Pabba Nithin Kumar", description: "",image:p8 },
    { id: 9, title: "Gandhivaram Nithish", description: "" ,image:p9},
    { id: 10, title: "Nithish Soorya SS", description: "",image:p10 },
    { id: 11, title: "Jasbinder Singh", description: "",image:p11 },
    { id: 12, title: "Shaik Anas Moinuddin", description: "",image:p12 }
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
                            {/* Use prize.image for the src attribute */}
                            <img src={prize.image} alt={prize.title} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
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


