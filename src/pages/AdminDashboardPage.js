import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminDashboardUI from '../components/AdminDashboardUI';

function AdminDashboardPage() {
  const { user } = useAuth();

  if (!user) return <p>Please log in first.</p>;
  if (user.profileType !== 'User Admin') return <p>Access denied: Only User Admins can view this page.</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AdminDashboardUI />
      <nav>
        <Link to="/admin/users">Manage Users</Link> |{' '}
        <Link to="/admin/profiles">Manage Profiles</Link>
      </nav>
    </div>
  );
}

export default AdminDashboardPage;