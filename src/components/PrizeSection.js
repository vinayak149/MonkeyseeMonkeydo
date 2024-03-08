import React from 'react';
import './PrizeSection.css';

const prizes = [
    { id: 1, title: "Overall First", description: "" },
    { id: 2, title: "Overall Second", description: "" },
    { id: 3, title: "Third Overall", description: "" },
    { id: 4, title: "Best Solo", description: "" },
    { id: 5, title: "Best Beginner", description: "" },
    { id: 6, title: "Best UI/UX", description: "" },
    { id: 7, title: "Best Web App with Qoom", description: "" },
    { id: 8, title: "More prizes", description: "" },
    { id: 9, title: "Innovation Award", description: "" },
    { id: 10, title: "Community Choice", description: "" },
    { id: 11, title: "Best Use of Data", description: "" },
    { id: 12, title: "Eco-friendly Project", description: "" }
];

const PrizeSection = () => {
    return (
        <section className="prize-section">
            <h2>Meet Our Team</h2>
            <p>A collective effort by folks spanning diverse tech stacks resulted in the creation of the Hack-a-Thon portal, showcasing the power of collaboration.</p>
            <div className="prize-container">
                {prizes.map(prize => (
                    <div key={prize.id} className="prize-item">
                        <div className="image-placeholder"></div>
                        <h3>{prize.title}</h3>
                        <p className="role-description">Software Developer Engineer</p> {/* Role description added */}
                        <p>{prize.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PrizeSection;
