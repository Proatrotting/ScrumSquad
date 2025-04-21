import React from 'react';

function UserTable({ users, onSuspend, onEdit }) {
  return (
    <div>
      <h3>User Accounts</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} ({user.role})
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onSuspend(user._id)}>Terminate</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTable;
