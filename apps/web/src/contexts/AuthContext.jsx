import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(pb.authStore.model);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize state from authStore on mount
    setCurrentUser(pb.authStore.model);
    setLoading(false);

    // Listen for authStore changes (e.g., from other tabs or automatic token refresh)
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentUser(model);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    // PocketBase automatically saves the token and user model to localStorage via authStore
    const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
    setCurrentUser(authData.record);
    return authData;
  };

  const logout = () => {
    pb.authStore.clear(); // Clears localStorage and token
    setCurrentUser(null);
  };

  const signup = async (data) => {
    const record = await pb.collection('users').create({
      ...data,
      role: 'user'
    }, { $autoCancel: false });
    
    // Automatically log in after successful signup
    await login(data.email, data.password);
    return record;
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.role === 'admin',
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};