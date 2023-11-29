import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyCashQs3jkMVAZa1opi1697IkActaJNb1M",
  authDomain: "tecnopoint-xiomarastochetta.firebaseapp.com",
  projectId: "tecnopoint-xiomarastochetta",
  storageBucket: "tecnopoint-xiomarastochetta.appspot.com",
  messagingSenderId: "426785457908",
  appId: "1:426785457908:web:7fe2e3c3b4eaa1494b00a1"
};

export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
