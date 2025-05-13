import React from 'react';
import '../../Styles/New/DeanMessage.css';
import { Quote } from 'lucide-react';

const DeanMessage = () => {
    return (
        <div className="dean-message-section">
            <div className="dean-message-container">
                <div className="dean-message-left">
                    <h2>MESSAGE<br />FROM DEAN<br />Educational Outreach</h2>
                    <h3>Prof. Devendra L. Deshmukh</h3>
                    <p>Dean, Educational Outreach</p>
                </div>
                <div className="dean-message-center">
                    <img src="/Images/devendra_sir.jpg" alt="Dean" />
                </div>
                <div className="dean-message-right">
                    <Quote size={30} color="#1e3a8a" />
                    <h4>IIT Indore</h4>
                    <p>
                        The vision of the Education Outreach Department is driven by a deep belief in the transformative power of education to shape lives, build communities, and create a prosperous world. At the core of our mission lies a commitment to excellence, equity, and empowerment in education. We believe that education is not merely a pathway to personal success but a powerful catalyst for positive change in our communities and beyond.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DeanMessage;
