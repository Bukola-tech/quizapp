import React from 'react';
import './result.css';
import { Link } from 'react-router-dom/dist';

const Results = ({ score, wrongAnswers, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Results</h2>
                <p>Total Options Picked Correctly: {score}</p>
                <p>Total Options Picked Wrongly: {wrongAnswers}</p>
                <Link to= '/userdashboard'><button onClick={onClose}>Close</button> </Link>
            </div>
        </div>
    );
}

export default Results;


