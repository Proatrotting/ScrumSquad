import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManageUsersPage from './pages/ManageUsersPage';
import ManageProfilesPage from './pages/ManageProfilesPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admindpage" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<ManageUsersPage />} />
          <Route path="/admin/profiles" element={<ManageProfilesPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
