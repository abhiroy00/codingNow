import './CourseMain.css';
import CouserLeftbar from './couserleftbar/CouserLeftbar';
import CourseHeader from './courseHeader/CourseHeader';
import { Outlet, useLocation } from 'react-router-dom'; // useLocation will help us determine if a child route is matched
import CourseHome from './coursehome/CourseHome';

export default function CourseMain() {
  const location = useLocation(); // Get the current location

  // Check if the current route is the default route
  const isHomePage = location.pathname === "/CourseMain" || location.pathname === "/CourseMain/";

  return (
    <div>
      <CourseHeader />
      <div className="coursemainheader">
        <div className="coursemainheader-left-side">
          <CouserLeftbar />
        </div>
        <div className="coursemainheader-right-side">
          <div className="coursemainheader-scroll">
            {isHomePage ? <CourseHome /> : null} {/* Render CourseHome if we're on the main page */}
            <Outlet /> {/* Render child route content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
