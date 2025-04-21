import React from 'react';

function CreateProfileForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <label>Profile Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={onChange}
          required
        />
      </div>

      <button type="submit">Create Profile</button>
    </form>
  );
}

export default CreateProfileForm;
