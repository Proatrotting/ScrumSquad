export const updateUser = async (userData) => {
  const res = await fetch(`http://localhost:5000/api/users/${userData._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const fetchProfiles = async () => {
  const res = await fetch('http://localhost:5000/api/profiles');
  return res.json();
};

export const createProfile = async (profileData) => {
  const res = await fetch('http://localhost:5000/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profileData),
  });
  return res.json();
};

export const updateProfile = async (profileData) => {
  const res = await fetch(`http://localhost:5000/api/profiles/${profileData._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profileData),
  });
  return res.json();
};

export const suspendProfile = async (profileId) => {
  await fetch(`http://localhost:5000/api/profiles/${profileId}/suspend`, { method: 'PATCH' });
};

