export const fetchProfiles = async () => {
  const res = await fetch('http://localhost:5000/api/profiles');
  return res.json();
};

export const createProfile = async (profileData) => {
  const res = await fetch('http://localhost:5000/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profileData)
  });
  return res.json();
};

export const suspendProfile = async (profileId) => {
  await fetch(`http://localhost:5000/api/profiles/${profileId}/suspend`, { method: 'PATCH' });
};

  