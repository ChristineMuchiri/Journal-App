import React, { useEffect, useState } from 'react';
import { signInWithRedirect, signIn, getCurrentUser, signOut } from 'aws-amplify/auth';
import HomePage from './HomePage'

export default function HostedUILogin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatusAndHandleRedirect = async () => {
      try {
        await signIn();
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.log('No user signed in: ', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatusAndHandleRedirect();
  }, []); //empty dependency array, this runs once on mount

  useEffect(() => {
    if (!loading && !user) {
      console.log('No user found, redirecting to HostedUI');
      signInWithRedirect();
    }
  }, [loading, user]);
  
  const handleSignOut = async () => {
    try {
      await signOut({ global: true });
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className='login-container'>
        <p>Loading authentication status..</p>
      </div>
    );
  }

    if (!user) {
      return (
        <div className='login-container'>
          <h2 className='welcome-title'>Welcome to your Journal</h2>
          <p className='login-message'>Redirecting you to Login</p>
        </div>
      );
    }
    return (
      <App user={user} signOut={handleSignOut} />
    );
  
}