// FAQCard.js
import React from 'react';

const FAQCard = ({ question, answer }) => {
  return (
    <div className="faq-card">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default FAQCard;
