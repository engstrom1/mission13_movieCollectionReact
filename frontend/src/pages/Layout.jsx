import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container p-3">
        <Outlet />
      </div>
      <footer class="border-top fixed-bottom footer text-muted bg-white">
        <div class="container">&copy; 2023 - Emma Engstrom</div>
      </footer>
    </>
  );
};

export default Layout;
