import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm'; // Import LoginForm

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    profileType: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/profiles')
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
        const userAdmin = data.find(profile => profile.name === 'User Admin');
        if (userAdmin) {
          setFormData(prev => ({ ...prev, profileType: userAdmin.name }));
        }
      })
      .catch(err => {
        console.error('Error fetching profiles:', err);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          alert('Login successful!');
          login({
            username: formData.username,
            profileType: formData.profileType,
            token: data.token
          });
          navigate('/admindpage'); 
        } else {
          alert(data.message || 'Login failed');
        }
      })
      .catch(err => {
        console.error('Login error:', err);
        alert('An error occurred during login.');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <LoginForm 
        profiles={profiles} 
        formData={formData} 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}

export default LoginPage;
