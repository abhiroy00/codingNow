import { useState } from 'react';
import './CouserLeftbar.css';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
// Heroicons imports (all outline version, 24px)
import {
  HomeIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  PuzzlePieceIcon,
  BriefcaseIcon,
  ShareIcon,
  UserGroupIcon,
  UserPlusIcon,
  TvIcon,
  PhotoIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function CouserLeftbar() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (section) => {
    setClicked(section);
  };

  return (
    <div className='course-main-div'>
      <Link to="/CourseMain/courseHome"  style={{ textDecoration: "none" }} >
        <div className={`home-left ${clicked === 'home' ? 'clicked' : ''}`} onClick={() => handleClick('home')}>
          <div className="modern-icon">
            <HomeIcon />
          </div>
          <p className='icon-label'>Home</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/courseLean"  style={{ textDecoration: "none" }} >
        <div className={`learn-left ${clicked === 'learn' ? 'clicked' : ''}`} onClick={() => handleClick('learn')}>
          <div className="modern-icon">
            <AcademicCapIcon />
          </div>
          <p className='icon-label'>Learn</p>
        </div>
      </Link>
      
      <Link to="/courseMain/CourseClassroom"  style={{ textDecoration: "none" }} >
        <div className={`classroom-left ${clicked === 'classroom' ? 'clicked' : ''}`} onClick={() => handleClick('classroom')}>
          <div className="modern-icon">
            <BuildingOffice2Icon />
          </div>
          <p className='icon-label'>Classroom</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/courspractice"  style={{ textDecoration: "none" }} >
        <div className={`practice-left ${clicked === 'practice' ? 'clicked' : ''}`} onClick={() => handleClick('practice')}>
          <div className="modern-icon">
            <SparklesIcon />
          </div>
          <p className='icon-label'>Practice</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/courseproject"  style={{ textDecoration: "none" }} >
        <div className={`projects-left ${clicked === 'projects' ? 'clicked' : ''}`} onClick={() => handleClick('projects')}>
          <div className="modern-icon">
            <PuzzlePieceIcon />
          </div>
          <p className='icon-label'>Projects</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/CourseCarriar"  style={{ textDecoration: "none" }} >
        <div className={`carriar-left ${clicked === 'carriar' ? 'clicked' : ''}`} onClick={() => handleClick('carriar')}>
          <div className="modern-icon">
            <BriefcaseIcon />
          </div>
          <p className='icon-label'>Carriar</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/Mentorship"  style={{ textDecoration: "none" }} >
        <div className={`mentorship-left ${clicked === 'mentorship' ? 'clicked' : ''}`} onClick={() => handleClick('mentorship')}>
          <div className="modern-icon">
            <ShareIcon />
          </div>
          <p className='icon-label'>Mentorship</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/jobboard"  style={{ textDecoration: "none" }} >
        <div className={`job-bord-left ${clicked === 'job-bord' ? 'clicked' : ''}`} onClick={() => handleClick('job-bord')}>
          <div className="modern-icon">
            <BriefcaseIcon />
          </div>
          <p className='icon-label'>Jobboard</p>
        </div>
      </Link>
      
      <Link to="/CourseMain/Referearn"  style={{ textDecoration: "none" }} >
        <div className={`refer-eran-left ${clicked === 'refer-eran' ? 'clicked' : ''}`} onClick={() => handleClick('refer-eran')}>
          <div className="modern-icon">
            <UserPlusIcon />
          </div>
          <p className='icon-label'>Refer&earn</p>
        </div>
      </Link>



       <Link to="/CourseMain/coursehelp" style={{ textDecoration: "none" }}>
  <div className={`help-left ${clicked === 'help' ? 'clicked' : ''}`} onClick={() => handleClick('help')}>
    <div className="modern-icon">
      <UserPlusIcon />
    </div>
    <p className='icon-label'>Help</p>
  </div>
</Link>
      
      <div className={`community-left ${clicked === 'community' ? 'clicked' : ''}`} onClick={() => handleClick('community')}>
        <div className="modern-icon">
          <UserGroupIcon />
        </div>
        <p className='icon-label'>Community</p>
      </div>
      
      <div className="follow-us">
        <p>Follow us</p>
        <div className="follow-icons">
          <FaYoutube className='follow-icons' />{/* YouTube */}
          <FaInstagramSquare />{/* Instagram */}
         <FaLinkedin  /> {/* LinkedIn */}
         <FaDiscord /> {/* Discord */}
        </div>
      </div>
    </div>
  );
}