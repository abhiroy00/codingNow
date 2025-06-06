import './CourseHeader.css';

export default function CourseHeader() {
  return (
    <div>
      <header className="course-header">
        {/* Left Section */}
        <div className="course-header-left-side">
          <h1>Coding Now</h1>
          <button className="course-goal-btn">My Goal | Certification Course in Fullstack</button>
        </div>

        {/* Right Section */}
        <div className="course-header-right-side">
          <button className="coin-btn">10,000 Coins</button>
          <button className="master-btn">Learn About Master</button>
          <button className="profile-btn">P</button>
        </div>
      </header>
    </div>
  );
}