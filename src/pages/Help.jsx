import React, { useState } from 'react';
import age from './css/help.module.css'; // Import your CSS file for styling

function Help() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="accordion">
            {helpData.map((item, index) => (
                <div className={age.accordion-item} key={index}>
                    <div className={age.accordion-title} onClick={() => handleClick(index)}>
                        {item.question}
                        <span className={`icon ${index === activeIndex ? 'active' : ''}`}>&#9660;</span>
                    </div>
                    <div className={`accordion-content ${index === activeIndex ? 'active' : ''}`}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const helpData = [
    { question: 'Question 1', answer: 'Answer to question 1' },
    { question: 'Question 2', answer: 'Answer to question 2' },
    { question: 'Question 3', answer: 'Answer to question 3' },
    // Add more question-answer pairs as needed
];

export default Help;
