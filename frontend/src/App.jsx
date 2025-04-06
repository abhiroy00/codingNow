import React, { useState } from 'react';
import Navbar from './common/navbar';
import Home from './home/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './common/Footer';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}