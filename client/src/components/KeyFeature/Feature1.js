import React, { forwardRef } from 'react';
import './KeyFeature.css'; // Import CSS file

const Feature1 = forwardRef((props,ref) => {
    return (
        <section ref={ref} className="features-section" >
            <div className="features-container">
                {/* Title */}
                <h2 className="features-title">Key Certificate Generator Features</h2>
                
                {/* Content Wrapper */}
                <div className="features-content">
                    {/* Text Section */}
                    <div className="features-text">
                        <h3>Create Certificates Online In Minutes</h3>
                        <p>
                            Effortlessly create customizable certificates with templates, 
                            bulk generation, real-time previews, and secure PDF exports.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="features-image">
                        <img 
                            src="./feature1.png" 
                            alt="Certificate Illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Feature1;