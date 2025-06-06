import { FaArrowRight } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CourseHome() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="course-home-main max-w-7xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <div className="introduction bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h4 className="text-2xl font-bold">
            Introducing our brand new certification course with CodingNow 🎉
          </h4>
          <p className="mt-2">Master in-demand skills with our industry-relevant curriculum</p>
        </div>

        {/* Hero Banner */}
 <div  className="flex flex-col md:flex-row mb-5 gap-3">
        
  <div className="card h-50 w-60 bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
  <img 
    src="https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg" 
    alt="AI & ML Course" 
    className="h-28 w-full object-cover"
  />
  <div className="p-3 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-lg font-bold text-gray-800">AI & ML Bootcamp</h2>
      <p className="text-sm text-gray-600 mt-1">Learn AI, Machine Learning, and Deep Learning with hands-on projects.</p>
    </div>
    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition-all">
      Enroll Now
    </button>
  </div>
</div>
 <div className="card h-50 w-60 bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
  <img 
    src="https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg" 
    alt="AI & ML Course" 
    className="h-28 w-full object-cover"
  />
  <div className="p-3 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-lg font-bold text-gray-800">AI & ML Bootcamp</h2>
      <p className="text-sm text-gray-600 mt-1">Learn AI, Machine Learning, and Deep Learning with hands-on projects.</p>
    </div>
    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition-all">
      Enroll Now
    </button>
  </div>
</div>

 <div className="card h-50 w-60 bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
  <img 
    src="https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg" 
    alt="AI & ML Course" 
    className="h-28 w-full object-cover"
  />
  <div className="p-3 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-lg font-bold text-gray-800">AI & ML Bootcamp</h2>
      <p className="text-sm text-gray-600 mt-1">Learn AI, Machine Learning, and Deep Learning with hands-on projects.</p>
    </div>
    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition-all">
      Enroll Now
    </button>
  </div>
</div>

 <div className="card h-50 w-60 bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
  <img 
    src="https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg" 
    alt="AI & ML Course" 
    className="h-28 w-full object-cover"
  />
  <div className="p-3 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-lg font-bold text-gray-800">AI & ML Bootcamp</h2>
      <p className="text-sm text-gray-600 mt-1">Learn AI, Machine Learning, and Deep Learning with hands-on projects.</p>
    </div>
    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition-all">
      Enroll Now
    </button>
  </div>
</div>
 </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Left Side - Course Info */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-xl text-gray-800 mb-4">Full Stack Data Science Program</h4>

            <div className="flex gap-3 pb-4">
              <div className="bg-blue-50 text-blue-700 py-2 px-4 rounded-md text-sm font-medium">
                6 months
              </div>
              <div className="bg-blue-50 text-blue-700 py-2 px-4 rounded-md text-sm font-medium">
                6 modules
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <img 
                  src="https://grow.almabetter.com/static/media/bookmark.72dd44bc.svg" 
                  alt="Module" 
                  className="w-5 h-5"
                />
                <span className="text-gray-600 text-sm">Module</span>
                <div className="font-semibold text-gray-800 ml-auto">Applied Statistics</div>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <img 
                  src="https://grow.almabetter.com/static/media/book.c6c05f1a.svg" 
                  alt="Lesson" 
                  className="w-5 h-5"
                />
                <span className="text-gray-600 text-sm">Lesson</span>
                <div className="font-semibold text-gray-800 ml-auto">Calculus for ML</div>
              </div>
            </div>

           <Link to="/CourseMain/courseLean">
            <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Continue Learning
            </button>
           </Link>
          </div>

          {/* Right Side - Success Stories */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md">
            <h5 className="font-bold text-lg text-gray-800 mb-4">Our Success Stories</h5>
            <div className="flex justify-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tWkfCJfejkeaq78A0p6L5CZWFFVwxyz0DA&s" 
                alt="Success story" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <p className="mt-4 text-gray-600 text-center">
              "CodingNow transformed my career with their comprehensive curriculum and expert mentors."
            </p>
            <p className="text-gray-800 font-medium text-center mt-2">- Jane Doe, Data Scientist</p>
          </div>
        </div>

        {/* Practice Sections */}
        {['Practice Coding Assessments', 'Practice Quiz Assessments', 'Capstone Projects'].map((section, index) => (
          <div key={index} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{section}</h3>
              <button className="text-red-600 hover:text-red-700 font-medium flex items-center">
                See all <FaArrowRight className="ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center">
                    <img 
                      src={
                        index === 0 ? 
                        (item === 1 ? "https://almablog-media.s3.ap-south-1.amazonaws.com/small_Accenture_Emblem_1deca2b994.png" :
                         item === 2 ? "https://almablog-media.s3.ap-south-1.amazonaws.com/small_Dropbox_aaf7db0466.png" :
                         "https://almablog-media.s3.ap-south-1.amazonaws.com/small_hcl_297d6306b4.png") :
                        index === 1 ?
                        (item === 1 ? "https://i.fbcd.co/products/original/nn-circle-logo-design-2-26efa390c639dff63af2a65534db7225653faa175519ac6117f9dc8e99518f61.jpg" :
                         item === 2 ? "https://almablog-media.s3.ap-south-1.amazonaws.com/small_microsoft_5867d21a95.jpg" :
                         "https://almablog-media.s3.ap-south-1.amazonaws.com/small_meta_1_aeb9b71355.png") :
                        (item === 1 ? "https://almablog-media.s3.ap-south-1.amazonaws.com/Cardiovascular_Risk_Prediction_0b3dca43ec.png" :
                         item === 2 ? "https://almablog-media.s3.ap-south-1.amazonaws.com/Indi_Go_Logo_b6e3eef040.png" :
                         "https://almablog-media.s3.ap-south-1.amazonaws.com/Credit_Card_Default_Prediction_848a34b423.png")
                      } 
                      alt="Company logo" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="text-center text-xl font-semibold mt-4 text-gray-800">
                    {index === 0 ? 
                      (item === 1 ? "Accenture Coding Problems" :
                       item === 2 ? "Dropbox Python Coding Problems" :
                       "HCLTech Python Coding Problems") :
                    index === 1 ?
                      (item === 1 ? "Neural Networks" :
                       item === 2 ? "Microsoft Data Analyst Mock Test" :
                       "Meta Data Scientist Mock Test") :
                      (item === 1 ? "Cardiovascular Risk Prediction" :
                       item === 2 ? "IndiGo Airline Passenger Referral Prediction" :
                       "Credit Card Default Prediction")}
                  </h4>
                  {index !== 1 && (
                    <p className="text-gray-500 text-center mt-2">
                      {index === 0 ? "5 Questions | 75 Min" : "Classification"}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-6">
                  <Link 
  to="/CourseMain/coursassesment" 
  style={{ textDecoration: "none" }}  // Change from textDecorationStyle to textDecoration
>
  <button className="text-red-600 hover:text-red-700 bg-white border border-red-600 hover:border-red-700 px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center">
    Start Now <FaArrowRight className="ml-2" />
  </button>
</Link>
                    <button className="text-red-600 hover:text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-full transition-colors duration-300">
                      <IoShareSocialOutline className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" 
                    alt="Alumni" 
                    className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
                  />
                  <img 
                    src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" 
                    alt="LinkedIn" 
                    className="absolute bottom-0 right-0 w-6 h-6 bg-white p-1 rounded-full cursor-pointer hover:bg-blue-50 transition-colors"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Rochit Jain</h4>
                <p className="text-blue-600 mb-4">Data Scientist</p>
                <div className="flex justify-center">
                  <img 
                    src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" 
                    alt="Company" 
                    className="h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center mt-4">
                  "CodingNow's comprehensive curriculum and industry-relevant projects helped me land my dream job at BCG."
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <button className="bg-white text-red-600 hover:text-white hover:bg-red-600 py-3 px-8 border-2 border-red-600 font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
            Talk to a Mentor
          </button>
        </div>
      </div>
    </div>
  );
}