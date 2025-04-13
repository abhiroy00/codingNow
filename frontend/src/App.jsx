import React, { useState } from 'react';
import Navbar from './common/navbar';
import Home from './home/Home';
import Nav from './main/Nav';
import Left from './main/leftbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './common/Footer';
import Mentor from './main/Mentor';

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
    {
    path: '/main',
    element: (<>
    <Nav />
    <Left />
    </>),
    children: [
      {
        path: '/main/Mentor',
        element: <Mentor />,
      }
    ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}