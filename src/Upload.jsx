import React, { useState, useRef } from 'react';
import './upload.css';

const Upload = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  const handleFile = (file) => {
    if (!file) {
      setUploadMessage("Please select a .json file.");
      return;
    }
    
    if (file.type !== "application/json" && !file.name.endsWith('.json')) {
      setUploadMessage("Only .json files are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        JSON.parse(event.target.result);
        setUploadMessage("File uploaded and parsed successfully!");
        setIsFileUploaded(true);
      } catch (err) {
        setUploadMessage("Invalid JSON file.");
        setIsFileUploaded(false);
      }
    };
    reader.readAsText(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFile(files[0]);
    }
  };

  const handleContinue = () => {
    if (isFileUploaded) {
      setIsLoading(true);
      // Simulate processing time
      setTimeout(() => {
        setIsLoading(false);
        // In a real app, you'd navigate to dashboard
        console.log('File processed, navigating to dashboard');
        // navigate('/dashboard');
      }, 2000);
    }
  };

  return (
    <>
      <p className="heading">Upload your takeout file</p>
      <p className="text">Please upload the takeout file.</p>
      
      <div className="video-container">
        <video controls>
          <source src="upload.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div 
        className="upload-box" 
        ref={dropAreaRef}
        style={{
          borderColor: isDragActive ? '#333' : '#A0A0A0',
          background: isDragActive ? '#f7f7f7' : '#fff'
        }}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-text">Drag and drop your file here</div>
        <div style={{ margin: '12px 0', fontSize: '16px', color: '#888' }}>or</div>
        <input 
          type="file" 
          ref={fileInputRef}
          accept=".json" 
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <button className="upload-btn" onClick={handleButtonClick}>
          Choose File
        </button>
      </div>
      
      {isLoading && (
        <div id="loadingBox" style={{ textAlign: 'center' }}>
          <div className="loader"></div>
          <div className="loading-text">Processing your file...</div>
        </div>
      )}
      
      <div id="uploadMessage">{uploadMessage}</div>
      
      <button 
        id="continueBtn" 
        className="continue-btn"
        onClick={handleContinue}
        disabled={!isFileUploaded || isLoading}
      >
        Continue
      </button>
    </>
  );
};

export default Upload;
