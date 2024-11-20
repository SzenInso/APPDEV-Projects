import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const account = {
    username: 'admin',
    password: 'admin',
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (userName === account.username && password === account.password) {
      onLoginSuccess();
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Wormmmy's Reviews!</h1>
      <h4>Login to Continue:</h4>
      <label>
        Username:
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={handleUserNameChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
