import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importing amplify and its configurations
import { Amplify } from 'aws-amplify'
import config from './amplifyconfiguration.json'


Amplify.configure(config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
