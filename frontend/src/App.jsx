import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './common/Login';
import CourseMain from './feature/coursemain/CourseMain';
import CourseHome from './feature/coursemain/coursehome/CourseHome';
import CourseLearn from './feature/coursemain/courselearn/CourseLearn';
import CoursePractice from './feature/coursemain/coursePractice/CoursePractice';
import CourseProject from './feature/coursemain/courseProject/CourseProject';
import CourseCarriar from './feature/coursemain/coursecarriar/CourseCarriar';
import Jobboard from './feature/coursemain/Jobboard/Jobboard';
import Referearn from './feature/coursemain/courseReferearn/Referearn';
import CourseClassroom from './feature/coursemain/courseClassroom/CourseClassroom';
import Upcoming from './feature/coursemain/courseClassroom/classroom_children/Upcoming';
import Completed from './feature/coursemain/courseClassroom/classroom_children/Completed';
import Mentorship from './feature/coursemain/Mentorship/Mentorship';
import Book_a_session from './feature/coursemain/Mentorship/Mentorship_children/Book_a_session';
import Previous_Booking from './feature/coursemain/Mentorship/Mentorship_children/Previous_Booking';
import Manage_Booking from './feature/coursemain/Mentorship/Mentorship_children/Manage_Booking';
import CodingAssessments from './feature/coursemain/coursePractice/CodingAssessments/CodingAssessments';

export default function App() {
  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <Login />,
    
    },
    {
      path: "/CourseMain",
      element: <CourseMain />,
      children: [
        {
          path: "/CourseMain/courseHome",
          element: <CourseHome />
        },
        {
          path: "/CourseMain/courseLean",
          element: <CourseLearn />
        },
        {
          path: "/CourseMain/courspractice",
          element: <CoursePractice />
        },
        {
          path:"/CourseMain/coursassesment",
          element:<CodingAssessments></CodingAssessments>

        },
        {
          path: "/CourseMain/courseproject",
          element: <CourseProject />
        },
        {
          path: "/CourseMain/CourseCarriar",
          element: <CourseCarriar />
        },
        {
          path: "/CourseMain/jobboard",
          element: <Jobboard />
        },
        {
          path: "/CourseMain/Referearn",
          element: <Referearn />
        },
        {
          path: "/CourseMain/CourseClassroom",
          element: <CourseClassroom />,
          children: [
            {
              path: "/CourseMain/CourseClassroom/upcoming",
              element: <Upcoming />
            },
            {
              path: "/CourseMain/CourseClassroom/Completed",
              element: <Completed />
            }
          ]
        },
        {
          path: "/CourseMain/Mentorship",
          element: <Mentorship />,
          children: [
            {
              path: "/CourseMain/Mentorship/",
              element: <Book_a_session />
            },
            {
              path: "/CourseMain/Mentorship/Book_a_session",
              element: <Book_a_session />
            },
            {
              path: "/CourseMain/Mentorship/Previous_Booking",
              element: <Previous_Booking />
            },
            {
              path: "/CourseMain/Mentorship/Manage_Booking",
              element: <Manage_Booking />
            },
          ]
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