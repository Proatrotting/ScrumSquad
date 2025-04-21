import React from 'react';

function UserProfileTable({ profiles, onSuspend, onEdit}) {
  return (
    <div>
      <h4>User Profiles</h4>
      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>
            {profile.name}
            <button onClick={() => onEdit(profile)}>Edit</button>
            <button onClick={() => onSuspend(profile._id)}>Terminate</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfileTable;