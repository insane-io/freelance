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
import Signup from "./Pages/Signup"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './Context/MyContext';
import Verify from "./Pages/Verify"
import "./index.css";
import Freeprofile from "./Pages/Freeprofile";
// import Mygig from "./Pages/Mygig";
import Admin from './Pages/Admin';
import Details from './Pages/Details';
import Stats from './Pages/Stats';
import Upload from './Pages/Upload';
import Adminverify from './Pages/AdminVerify';
import Video from './Pages/Video';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<BaseLayout />} >
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<Admin />} />
      <Route path="details" element={<Details/>} />
      <Route path="freelancerprofile" element={<Freeprofile />} />
      <Route path="stats" element={<Stats/>} />
      <Route path="verify" element={<Verify/>} />
      <Route path="upload" element={<Upload/>} />
      <Route path="admin-verify/:id" element={<Adminverify/>} />
      <Route path="video/:id" element={<Video/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
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
