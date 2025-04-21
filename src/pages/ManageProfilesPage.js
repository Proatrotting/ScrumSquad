
import React, { useState, useEffect } from 'react';
import CreateProfileForm from '../components/CreateProfileForm';
import UpdateProfileForm from '../components/UpdateProfileForm';
import UserProfileTable from '../components/UserProfileTable';
import SearchBar from '../components/SearchBar';

function ManageProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const res = await fetch('http://localhost:5000/api/profiles');
    const data = await res.json();
    setProfiles(data);
  };

  const handleCreate = async (profileData) => {
    await fetch('http://localhost:5000/api/profiles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
    });
    fetchProfiles();
  };

  const handleUpdate = async (updatedData) => {
    await fetch(`http://localhost:5000/api/profiles/${updatedData._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    setSelectedProfile(null);
    fetchProfiles();
  };

  const handleSuspend = async (profileId) => {
    await fetch(`http://localhost:5000/api/profiles/${profileId}/suspend`, { method: 'PATCH' });
    fetchProfiles();
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Manage Profiles</h2>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search Profiles"
      />
      <CreateProfileForm formData={{ name: '', description: '' }} onChange={() => {}} onSubmit={handleCreate} />
      {selectedProfile && <UpdateProfileForm profile={selectedProfile} onUpdate={handleUpdate} />}
      <UserProfileTable profiles={filteredProfiles} onSuspend={handleSuspend} />
    </div>
  );
}

export default ManageProfilesPage;
