import React from 'react';

function ProfileDropdown({ profiles, value, onChange }) {
  return (
    <div>
      <label>User Profile:</label>
      <select 
        name="profileType" 
        value={value} 
        onChange={onChange} 
        required
      >
        <option value="">Select profile</option>
        {profiles.map(profile => (
          <option key={profile._id} value={profile.name}>
            {profile.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProfileDropdown;
