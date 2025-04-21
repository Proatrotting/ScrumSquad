import React from 'react';
import ProfileDropdown from './ProfileDropdown';

function LoginForm({ profiles, formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <ProfileDropdown 
        profiles={profiles}
        value={formData.profileType}
        onChange={onChange}
      />
      <div>
        <label>Username:</label>
        <input 
          name="username" 
          type="text" 
          value={formData.username} 
          onChange={onChange} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          name="password" 
          type="password" 
          value={formData.password} 
          onChange={onChange} 
          required 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
