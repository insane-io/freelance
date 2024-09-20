import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Pages/Home';
// import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Signup from "./Pages/Onboarding/Signup";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './Context/MyContext';
import Choose_Profession from './Pages/Onboarding/Choose_Profession';
import Profession from './Pages/Onboarding/Profession';
import Skills from './Pages/Onboarding/Skills';
import Experience from './Pages/Onboarding/Experience';
import Education from './Pages/Onboarding/Education';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path='/' element={<BaseLayout />} >
        <Route path='' element={<Home />} />
        {/* <Route path='chat' element={<Chat />} /> */}
        <Route path='login' element={<Login />} />
        <Route path='choose-profession' element={<Choose_Profession />} />
        <Route path='details' element={<Signup />} />
        <Route path='profession' element={<Profession/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path='experience' element={<Experience/>} />
        <Route path='education' element={<Education/>} />
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
