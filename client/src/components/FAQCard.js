import React, { useState } from 'react';
import './FAQCard.css'; // Import CSS for FAQCard styling

const FAQCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={`faq-card ${showAnswer ? 'open' : ''}`} onClick={toggleAnswer}>
      <h3>{question}</h3>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default FAQCard;
