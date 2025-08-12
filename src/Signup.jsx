import React, { useState, useEffect } from 'react';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordMatchMessage, setPasswordMatchMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateSignupForm = (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return { valid: false, error: "Passwords do not match." };
    }

    // Prepare data for backend (excluding confirmPassword)
    const backendData = {
      ...data,
      confirmPassword: undefined // Remove confirmPassword before sending
    };

    return { valid: true, data: backendData };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateSignupForm(formData);

    if (!result.valid) {
      setPasswordMatchMessage(result.error);
    } else {
      setPasswordMatchMessage("");
      // Send result.data to backend (e.g., via fetch or axios)
      // fetch('/api/signup', { method: 'POST', body: JSON.stringify(result.data) });
      console.log('Signup successful!', result.data);
      // In a real app, you'd navigate to upload page
      // navigate('/upload');
    }
  };

  // Check password match on every change
  useEffect(() => {
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setPasswordMatchMessage("Passwords do not match.");
      setIsValid(false);
    } else if (formData.confirmPassword && formData.password === formData.confirmPassword) {
      setPasswordMatchMessage("");
      setIsValid(true);
    }
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signupForm">
        <div className="input-group">
          <input 
            required 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            required 
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {passwordMatchMessage && (
            <div id="passwordMatchMessage" style={{ color: 'red' }}>
              {passwordMatchMessage}
            </div>
          )}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
