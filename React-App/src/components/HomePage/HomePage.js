import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage({ testData }) {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setMessage('Welcome! You are now logged in.');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  }, [isLoggedIn]);

  const logout = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8080/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      localStorage.removeItem('token');
      setLoggedIn(false);
      navigate('/');
      setMessage('You have been successfully logged out.');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      setMessage('You have been successfully logged out.');
      logout();
    } else {
      setLoggedIn(!isLoggedIn);
      setMessage('Welcome! You are now logged in.');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  return (
    <div className="categories">
      {message && <p className="message">{message}</p>}
      <div className="login">
        {isLoggedIn ? (
          <button className="login-button" onClick={handleLogin}>
            Logout
          </button>
        ) : (
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </Link>
        )}
      </div>
      {testData.map((test) => (
        <Link
          key={test.ID}
          to={`/${test.Category.toLowerCase()}test`}
          style={{ textDecoration: "none" }}
        >
          <button className="buttonStyle" key={test.ID}>
            <img
              src={`data:image/png;base64,${test.ImageBase64}`}
              alt={`Test: ${test.Title}`}
              className="category-image"
            />
            <h2>{test.Title}</h2>
            <p>{test.Description}</p>
          </button>
        </Link>
      ))}
      <div>
        <Link to={`/addtest`} style={{ textDecoration: "none" }}>
          <button className="buttonStyleAdd">
            <h2>Add Test</h2>
          </button>
        </Link>
        <Link to={`/addquestion`} style={{ textDecoration: "none" }}>
          <button className="buttonStyleAdd">
            <h2>Add Question</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;