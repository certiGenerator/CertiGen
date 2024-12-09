import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import TopNav from "../certifcate/TopNav/topNav";
// import "./generationPage.css";

const CertificateGenerator = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [format, setFormat] = useState("JPG");
  const [previewFile, setPreviewFile] = useState(null); // For previewing files

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setPreviewFile(URL.createObjectURL(acceptedFiles[0])); // Set the first file for preview
    console.log("Files uploaded:", acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleGenerate = () => {
    alert("Generating certificates...");
    // Logic to generate certificates goes here
  };

  const handleDownload = () => {
    if (uploadedFiles.length === 0) {
      alert("No files to download!");
      return;
    }
    alert(`Downloading certificates in ${format} format`);
    // Logic to download certificates goes here
  };

  // const toggleFullScreen = () => {
  //   const element = document.documentElement; // Full page
  //   if (!document.fullscreenElement) {
  //     element.requestFullscreen().catch((err) => console.error(err));
  //   } else {
  //     document.exitFullscreen();
  //   }
  // };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <TopNav/>
        
        {/* <button className="fullscreen-btn" onClick={toggleFullScreen}>
          Toggle Full Screen
        </button> */}
      </header>
      <h1>Certificate Generator</h1>

      {/* Drag-and-Drop Upload Area */}
      <div {...getRootProps()} className={`upload-area ${isDragActive ? "active" : ""}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop your files here, or click to browse</p>
        )}
      </div>

      {/* File Preview */}
      {previewFile && (
        <div className="preview-section">
          <h3>File Preview:</h3>
          <img src={previewFile} alt="Preview" className="preview-image" />
        </div>
      )}

      {/* Generate and Download Buttons */}
      <button onClick={handleGenerate}>Generate All</button>
      <button onClick={handleDownload}>Download All</button>

      {/* Format Options */}
      <div className="format-options">
        <label>
          <input
            type="radio"
            name="format"
            value="JPG"
            checked={format === "JPG"}
            onChange={(e) => setFormat(e.target.value)}
          />
          JPG
        </label>
        <label>
          <input
            type="radio"
            name="format"
            value="PNG"
            checked={format === "PNG"}
            onChange={(e) => setFormat(e.target.value)}
          />
          PNG
        </label>
        <label>
          <input
            type="radio"
            name="format"
            value="PDF"
            checked={format === "PDF"}
            onChange={(e) => setFormat(e.target.value)}
          />
          PDF
        </label>
      </div>

      {/* Uploaded File List */}
      <div className="file-list">
        <h3>Uploaded Files:</h3>
        {uploadedFiles.length > 0 ? (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;