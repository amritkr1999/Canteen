import React, { useState } from 'react';
import '../../assets/css/login.css'; // Import your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setLoading(true); // Set loading to true

    if (!username || !password) {
      setError('Username and password are required.');
      setLoading(false); // Set loading to false
      return;
    }

    try {
      // Simulate API call (replace with your actual API call)
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          if (username === 'testuser' && password === 'password') {
            resolve({ success: true }); // Successful login
          } else {
            resolve({ success: false, message: 'Invalid credentials.' });
          }
        }, 1000); // Simulate 1-second delay
      });

      if (response.success) {
        // Redirect to the desired page (e.g., dashboard)
        window.location.href = '/dashboard'; // Or use react-router's useNavigate
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false regardless of success/failure
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <button type="submit" disabled={loading}> {/* Disable button while loading */}
          {loading ? 'Logging in...' : 'Login'} {/* Show loading indicator */}
        </button>
      </form>
    </div>
  );
};

export default Login;