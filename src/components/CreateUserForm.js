import React, { useState, useEffect } from 'react';

function CreateUserForm({ onCreate }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
    profileType: ''
  });

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/profiles');  // Make sure this route returns all profiles
      const data = await res.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={formData.username}
        required
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        name="role"
        placeholder="Role"
        onChange={handleChange}
        value={formData.role}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
        required
      />
      <select
        name="profileType"
        value={formData.profileType}
        onChange={handleChange}
        required
      >
        <option value="">-- Select Profile --</option>
        {profiles.map(profile => (
          <option key={profile._type} value={profile._type}>
            {profile.name}
          </option>
        ))}
      </select>
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUserForm;
