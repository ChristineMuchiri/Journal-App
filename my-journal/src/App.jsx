// src/App.jsx
import React from 'react';
import HostedUILogin from './components/HostedUILogin'; // This component now acts as the central auth gate
import HomePage from './components/HomePage';

function App() {
  return (
    // HostedUILogin will handle the authentication flow
    // and conditionally render your main application content or redirect.
    <div>
    <HostedUILogin />
      </div>
  );
}

export default App;