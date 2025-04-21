
import React, { useState, useEffect } from 'react';
import CreateUserForm from '../components/CreateUserForm';
import UpdateUserForm from '../components/UpdateUserForm';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';

function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  const handleCreate = async (userData) => {
    await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    fetchUsers();
  };

  const handleUpdate = async (updatedUser) => {
    await fetch(`http://localhost:5000/api/users/${updatedUser._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
    setSelectedUser(null);
    fetchUsers();
  };

  const handleSuspend = async (userId) => {
    await fetch(`http://localhost:5000/api/users/${userId}/suspend`, { method: 'PATCH' });
    fetchUsers();
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Manage Users</h2>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search Users"
      />
      <CreateUserForm onCreate={handleCreate} />
      {selectedUser && <UpdateUserForm user={selectedUser} onUpdate={handleUpdate} />}
      <UserTable users={filteredUsers} onSuspend={handleSuspend} onEdit={setSelectedUser} />
    </div>
  );
}

export default ManageUsersPage;
