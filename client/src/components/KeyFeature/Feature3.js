import React from 'react';
import './KeyFeature.css'; // Import CSS file

const Feature3 = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                {/* Title */}
                {/* <h2 className="features-title">Key Certificate Generator Features</h2> */}
                
                {/* Content Wrapper */}
                <div className="features-content">
                    {/* Text Section */}
                    <div className="features-text">
                        <h3>Dynamic Content Insertion</h3>
                        <p>
                        Automatically insert participant names, event titles, dates, and other details.Preview functionality to verify details before generating certificates.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="features-image">
                        <img 
                            src="https://via.placeholder.com/400x300" 
                            alt="Certificate Illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature3;