// src/App.jsx
import React from 'react';
import HostedUILogin from './components/HostedUILogin'; // This component now acts as the central auth gate

function App() {
  return (
    // HostedUILogin will handle the authentication flow
    // and conditionally render your main application content or redirect.
    <HostedUILogin />
  );
}

export default App;