import React, { useState } from 'react';
import './index.scss';
const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePassword = () => {
    const errors = [];

    // Password length validation
    if (newPassword.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
    if (!passwordRegex.test(newPassword)) {
      errors.push(
        'Password must contain at least one capital letter, one special character, and one number'
      );
    }

    // Confirm password validation
    if (newPassword !== confirmPassword) {
      errors.push('New password and confirm password do not match');
    }

    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validatePassword();

    if (isValid) {
      // Send request to change password

      console.log('Current Password:', currentPassword);
      console.log('New Password:', newPassword);

      // Reset the form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setMessage('Password changed successfully');
    }
  };

  return (
    <div>
      <h4>Password Change Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordChange;
