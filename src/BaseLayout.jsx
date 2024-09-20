import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const BaseLayout = () => {

  return (
    <>
      <Navbar />
      <div className="w-full h-full pt-[4.55rem]">
        <Outlet />
      </div>
    </>
  );
};

export default BaseLayout;
