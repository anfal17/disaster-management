import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import firebaseConfig from "./firebaseConfig.js";
import firebase from 'firebase/compat/app'


firebase.initializeApp(firebaseConfig)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
