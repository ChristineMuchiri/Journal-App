// src/App.jsx
import React from 'react';

export default function HomePage({user, signOut}) {
  return (
    <div className="main-app-container">
      <header className="app-header">
        <h1>Welcome, {user.username}!</h1>
        <button onClick={signOut} className="app-signout-button">Sign out</button>
      </header>
      <section className="app-dashboard">
        <h2>Your Dashboard</h2>
        <p>This is the main content of your WhistleKE application.</p>
        <p>You are successfully logged in!</p>
        {/* Add more components and features of your application here */}
      </section>
    </div>
  );
}
