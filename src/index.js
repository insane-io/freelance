import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './Context/MyContext';
import Choose_Profession from './Pages/Onboarding/Choose_Profession';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path='/' element={<BaseLayout />} >
        <Route path='' element={<Home />} />
        <Route path='chat' element={<Chat />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} >
        <Route path='choose-profession' element={<Choose_Profession/>}/>
        </Route>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GoogleOAuthProvider clientId="102941392990-2tg1kf0ahdpavubsgb7nq3lp5pd79stq.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </UserProvider>

  </React.StrictMode>
);

reportWebVitals();
