import React from "react";
import "./KeyFeature2.css";

const CertificateSection = () => {
  return (
    <div className="certificate-section">
      <div className="certificate-image">
        <img
          src="./feature4.png" // Replace this with the path to your illustration
          alt="Illustration"
        />
      </div>
      <div className="certificate-text">
        <h2>Download Options</h2>
        <p>Bulk download of certificates in PDF format.Option for individual certificate downloads by participants..</p>
      </div>
    </div>
  );
};

export default CertificateSection;
