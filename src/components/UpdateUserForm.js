
import React, { useState, useEffect } from 'react';

function UpdateUserForm({ user, onUpdate }) {
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username || ''} onChange={handleChange} required />
      <input name="email" value={formData.email || ''} onChange={handleChange} required />
      <input name="role" value={formData.role || ''} onChange={handleChange} required />
      <button type="submit">Update User</button>
    </form>
  );
}

export default UpdateUserForm;
