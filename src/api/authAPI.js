export const login = async (credentials) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return res.json();
  };
  
  export const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
  };
  