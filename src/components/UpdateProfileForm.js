
import React, { useState, useEffect } from 'react';

function UpdateProfileForm({ profile, onUpdate }) {
  const [formData, setFormData] = useState(profile || {});

  useEffect(() => {
    setFormData(profile || {});
  }, [profile]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name || ''} onChange={handleChange} required />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default UpdateProfileForm;
