import React, { useState } from 'react'
import './CoursePractice.css'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactPaginate from 'react-paginate'


export default function CoursePractice() {
  const [Allproblems, setAllproblems] = useState([
    { "problem": "Count the Characters", "asked_in": ["https://images.seeklogo.com/logo-png/9/1/nissan-logo-png_seeklogo-99770.png?v=1957936019898231880", "https://images.seeklogo.com/logo-png/36/1/accenture-logo-png_seeklogo-369971.png?v=1957672401658995128"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Race for the Armstrong Award", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Microsoft_f28c3c1eef.png", "https://almablog-media.s3.ap-south-1.amazonaws.com/cognizant_875a8dfcea.jpg"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mingle to Single : Repeated Digit Sum", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/meta_1_aeb9b71355.png", ""], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Identify Words with Prime Lengths", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Oracle_Logo_9115ca7108.jpg", "https://almablog-media.s3.ap-south-1.amazonaws.com/blitzpoker_4d42a54886.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Total Salaries", "asked_in": [], "skill": "SQL", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mary’s Client Email Formatter", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/openinapp_6004a2ef15.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Count the Characters", "asked_in": ["https://images.seeklogo.com/logo-png/9/1/nissan-logo-png_seeklogo-99770.png?v=1957936019898231880", "https://images.seeklogo.com/logo-png/36/1/accenture-logo-png_seeklogo-369971.png?v=1957672401658995128"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Race for the Armstrong Award", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Microsoft_f28c3c1eef.png", "https://almablog-media.s3.ap-south-1.amazonaws.com/cognizant_875a8dfcea.jpg"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mingle to Single : Repeated Digit Sum", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/meta_1_aeb9b71355.png", ""], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Identify Words with Prime Lengths", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Oracle_Logo_9115ca7108.jpg", "https://almablog-media.s3.ap-south-1.amazonaws.com/blitzpoker_4d42a54886.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Total Salaries", "asked_in": [], "skill": "SQL", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mary’s Client Email Formatter", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/openinapp_6004a2ef15.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Count the Characters", "asked_in": ["https://images.seeklogo.com/logo-png/9/1/nissan-logo-png_seeklogo-99770.png?v=1957936019898231880", "https://images.seeklogo.com/logo-png/36/1/accenture-logo-png_seeklogo-369971.png?v=1957672401658995128"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Race for the Armstrong Award", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Microsoft_f28c3c1eef.png", "https://almablog-media.s3.ap-south-1.amazonaws.com/cognizant_875a8dfcea.jpg"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mingle to Single : Repeated Digit Sum", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/meta_1_aeb9b71355.png", ""], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Identify Words with Prime Lengths", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Oracle_Logo_9115ca7108.jpg", "https://almablog-media.s3.ap-south-1.amazonaws.com/blitzpoker_4d42a54886.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Total Salaries", "asked_in": [], "skill": "SQL", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mary’s Client Email Formatter", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/openinapp_6004a2ef15.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Count the Characters", "asked_in": ["https://images.seeklogo.com/logo-png/9/1/nissan-logo-png_seeklogo-99770.png?v=1957936019898231880", "https://images.seeklogo.com/logo-png/36/1/accenture-logo-png_seeklogo-369971.png?v=1957672401658995128"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Race for the Armstrong Award", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Microsoft_f28c3c1eef.png", "https://almablog-media.s3.ap-south-1.amazonaws.com/cognizant_875a8dfcea.jpg"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mingle to Single : Repeated Digit Sum", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/meta_1_aeb9b71355.png", ""], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Identify Words with Prime Lengths", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Oracle_Logo_9115ca7108.jpg", "https://almablog-media.s3.ap-south-1.amazonaws.com/blitzpoker_4d42a54886.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Total Salaries", "asked_in": [], "skill": "SQL", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mary’s Client Email Formatter", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/openinapp_6004a2ef15.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Count the Characters", "asked_in": ["https://images.seeklogo.com/logo-png/9/1/nissan-logo-png_seeklogo-99770.png?v=1957936019898231880", "https://images.seeklogo.com/logo-png/36/1/accenture-logo-png_seeklogo-369971.png?v=1957672401658995128"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Race for the Armstrong Award", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Microsoft_f28c3c1eef.png", "https://almablog-media.s3.ap-south-1.amazonaws.com/cognizant_875a8dfcea.jpg"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mingle to Single : Repeated Digit Sum", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/meta_1_aeb9b71355.png", ""], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Identify Words with Prime Lengths", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/Oracle_Logo_9115ca7108.jpg", "https://almablog-media.s3.ap-south-1.amazonaws.com/blitzpoker_4d42a54886.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Total Salaries", "asked_in": [], "skill": "SQL", "difficulty": "Easy", "status": "unsolved"
},
{ "problem": "Mary’s Client Email Formatter", "asked_in": ["https://almablog-media.s3.ap-south-1.amazonaws.com/openinapp_6004a2ef15.png"], "skill": "Python", "difficulty": "Easy", "status": "unsolved"
    }
    
  ]);

  // share  button
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href); // Copy current page URL
      setIsCopied(true);
      
      // Reset copied status after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // share button end


  const [CodingProblems, setCodingProblems]= useState(true);
  const [SupplementaryCourses, setSupplementaryCourses] = useState(false);
  const [CodingAssessments, setCodingAssessments]= useState(false);
  const [QuizAssessments, setQuizAssessments]= useState(false);


  const [CoddAssdata, setCoddAssdata] = useState([
    {
        "field 1": "/src/features/coursemain/Images/CoddAssdata/small_Accenture_Emblem_1deca2b994 (1).png",
        "field 2": "5 Questions | 75 Min"
    },
    {
        "field 1": "/src/features/coursemain/Images/QuizImg/small_adobe_a9ebe257f8.png",
        "field 2": "4 Questions | 60 Min"
    },
    {
        "field 1": "/src/features/coursemain/Images/CoddAssdata/small_hsbc_1_b4965fbd87.png",
        "field 2": "5 Questions | 75 Min"
    },
    {
        "field 1": "/src/features/coursemain/Images/CoddAssdata/small_indiamart_6af6d5ae62.png",
        "field 2": "5 Questions | 75 Min"
    },
    {
        "field 1": "/src/features/coursemain/Images/CoddAssdata/small_Untitled_design_1_d4eb74df8e.png",
        "field 2": "5 Questions | 75 Min"
    },
    {
        "field 1": "/src/features/coursemain/Images/CoddAssdata/small_Untitled_design_8_f73954ab70.png",
        "field 2": "5 Questions | 75 Min"
    }
]);
const [SuplCouData, setSuplCouData] = useState(
  [
    {
        "title": " Introduction to Python",
        "img": " IT ",
        "lesson": "15 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Conditionals And Loops in Python",
        "img": "CA",
        "lesson": "9 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Functions and Methods in Python",
        "img": "AF",
        "lesson": "9 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Analytics Frameworks for Beginners",
        "img": "IT",
        "lesson": "16 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Data Science for Beginners",
        "img": "JR",
        "lesson": "14 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Introduction to Python 15 Lessons 180 min",
        "img": "IT",
        "lesson": "5 Lessons",
        "min": "180 min",
        "desc": "Dive into the world of 'Deep Learning.' Explore why neural networ..."
    },
    {
        "title": " Conditionals And Loops in Python",
        "img": "IN",
        "lesson": "4 Lessons",
        "min": "180 min",
        "desc": "Boost your neural networks with short course on 'Improving Neural..."
    },
    {
        "title": " Functions and Methods in Python",
        "img": "ML",
        "lesson": "3 Lessons",
        "min": "180 min",
        "desc": "Elevate your ML game with 'Machine Learning Strategy.' Dive into ..."
    },
    {
        "title": " Analytics Frameworks for Beginners",
        "img": "CV",
        "lesson": "5 Lessons",
        "min": "180 min",
        "desc": "Unleash the power of 'Computer Vision and Convolutional Networks...."
    },
    {
        "title": " Data Science for Beginners",
        "img": "RN",
        "lesson": "4 Lessons",
        "min": "180 min",
        "desc": "Dive into the realm of 'Recurrent Neural Networks and NLP.' Disco..."
    },
    {
        "title": " Introduction to Python 15 Lessons 180 min",
        "img": "FO",
        "lesson": "4 Lessons",
        "min": "180 min",
        "desc": "Discover the essence of Machine Learning Engineering. Cover Linux..."
    },
    {
        "title": " Conditionals And Loops in Python",
        "img": "WA",
        "lesson": "4 Lessons",
        "min": "180 min",
        "desc": "Explore 'Web APIs and Microservices' to master the basics with Fl..."
    },
    {
        "title": " Functions and Methods in Python",
        "img": "CA",
        "lesson": "4 Lessons",
        "min": "180 min",
        "desc": "Dive into 'Containerization and Cloud Platforms' with an intro to..."
    },
    {
        "title": " Analytics Frameworks for Beginners",
        "img": "MA",
        "lesson": "3 Lessons",
        "min": "180 min",
        "desc": "Unlock the world of 'MLOps and Big Data Tools.' Streamline ML wor..."
    },
    {
        "title": " Data Science for Beginners",
        "img": "CW",
        "lesson": "15 Lessons",
        "min": "120 min",
        "desc": "A short course on Business Communication to pique your interests...."
    }

]
);

const [QuizData, setQuizData] = useState(
  [
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_Accenture_Emblem_1deca2b994.png",
        "title": "Microsoft Data Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_adobe_a9ebe257f8.png",
        "title": "Meta Data Scientist Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_Capgemini_Emblem_b3ee9f3498.png",
        "title": "Cisco Junior Data Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_cisco_41f2a09251.png",
        "title": "Cognizant Associate Data Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_HCL_Technologies_Symbol_20bd1ab075.png",
        "title": "Accenture ML Engineer Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_ibm_445d234dfc.png",
        "title": "Capgemini Associate Business Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_Logo_Cognizant_644b10e455.png",
        "title": "HCL Business Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_microsoft_5867d21a95.jpg",
        "title": "IBM Associate Data Scientist Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_Oracle_Logo_9115ca7108.jpg",
        "title": "Adobe Junior Data Scientist Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_adobe_a9ebe257f8.png",
        "title": "Oracle Data Analyst Mock Test"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_Accenture_Emblem_1deca2b994.png",
        "title": "Dealing With Multiple Tables"
    },
    {
        "Image": "/src/features/coursemain/Images/QuizImg/small_ibm_445d234dfc.png",
        "title": "Unsupervised Algorithm Implementation"
    }
]
);


// Pagination start

const [data, setData] = useState([]);       // To store data
const [loading, setLoading] = useState(true); // To handle loading state
const [currentPage, setCurrentPage] = useState(0);  // To store current page
const itemsPerPage = 4; // Number of items per page

// Fetch data from API
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      // const response = await axios.get('http://localhost:5000/posts');
      setData(Allproblems);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

// Get data for the current page
const currentItems = Allproblems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

// Handle page change
const handlePageClick = (selectedItem) => {
  setCurrentPage(selectedItem.selected);
};

// pagination end



  return (


    <>
<div className='p-5'>
<div className=" ">
        <div className="row">
          <div className="col-md-8">
          <h1>Practice</h1>
          <h6>Put your learning to use. Practice and test your skills through curated coding problems and assessments.</h6>

          </div>

          <div className="col-md-4  m-auto">
              <img className='shadow' width={'100%'} src="/src/features/coursemain/Images/1st.jpg" alt="" />
          </div>
        </div>
    </div>


    <div className="">
        <div class="navbarrrr">
            <a href="#" class={`nav-itemmmm ${CodingProblems===true ? ' active': ''}`}
              onClick={()=>{
                  setCodingProblems(true);
                  setSupplementaryCourses(false);
                  setCodingAssessments(false);
                  setQuizAssessments(false);
              }}            
              >Coding Problems</a>

            <a href="#" class={`nav-itemmmm ${SupplementaryCourses===true ? ' active': ''} }`} 
                onClick={()=>{
                      setCodingProblems(false);
                      setSupplementaryCourses(true);
                      setCodingAssessments(false);
                      setQuizAssessments(false);
                  }}
                >Supplementary Courses</a>

            <a href="#" class={`nav-itemmmm ${CodingAssessments===true ? ' active': ''} }`} 
                onClick={()=>{
                      setCodingProblems(false);
                      setSupplementaryCourses(false);
                      setCodingAssessments(true);
                      setQuizAssessments(false);
                  }}
                >Coding Assessments</a>
            <a href="#" class={`nav-itemmmm ${QuizAssessments===true ? ' active': ''} }`} 
                  onClick={()=>{
                    setCodingProblems(false)
                    setSupplementaryCourses(false)
                    setCodingAssessments(false)
                    setQuizAssessments(true)
                  }}
                  >Quiz Assessments</a>
        </div>
    </div>


  {CodingProblems==true ? 
    <>
    <div class="filter-container">
        <div class="filter-item active">All Problems <span class="filter-count">132</span></div>
        <div class="filter-item">Solved <span class="filter-count">0</span></div>
        <div class="filter-item active">Unsolved <span class="filter-count">132</span></div>
        <select class="filter-item active " style={{padding:"0.7rem"}}>
        
          <option value="">Python</option>
          <option value="">Sql</option>
          <option value="">Intiger,Float,Bulion</option>
        </select>
        <select class="filter-item active" style={{ padding: "0.7rem" , width: "13%" }} placeholder="Company"
              id="course-lms-select">
              <option value="default">Company</option>
              <option value="HCL">HCL</option>
              <option value="Fingent">Fingent</option>
              <option value="OpeninApp">OpeninApp</option>
              <option value="Microsoft">Microsoft</option>
              <option value="SwanCapital">SwanCapital</option>
              <option value="Quantzig">Quantzig</option>
              <option value="Oracle">Oracle</option>
              <option value="Capgemini">Capgemini</option>
              <option value="Unacademy">Unacademy</option>
              <option value="Meta">Meta</option>
              <option value="Nissan">Nissan</option>
              <option value="Cartesian">Cartesian</option>
              <option value="GOQii">GOQii</option>
              <option value="Eaglytics">Eaglytics</option>
              <option value="Agoda">Agoda</option>
              <option value="Freecharge">Freecharge</option>
              <option value="StayVista">StayVista</option>
              <option value="Novartis">Novartis</option>
              <option value="Accenture">Accenture</option>
              <option value="Cisco">Cisco</option>
              <option value="Cognizant">Cognizant</option>
              <option value="Blitzpoker">Blitzpoker</option>
              <option value="Adobe">Adobe</option>
              <option value="IBM">IBM</option>
              <option value="HSBC">HSBC</option>
              <option value="Airtel">Airtel</option>
              <option value="IndiaMART">IndiaMART</option>
              <option value="HCLTech">HCLTech</option>
              <option value="Octalogic Tech">Octalogic Tech</option>
              <option value="Kriyadocs">Kriyadocs</option>
              <option value="Seven Square Technosoft">Seven Square Technosoft</option>
              <option value="CostaCloud">CostaCloud</option>
              <option value="Next Labs">Next Labs</option>
              <option value="Unstop">Unstop</option>
              <option value="Vishleshan">Vishleshan</option>
              <option value="Richpanel Inc">Richpanel Inc</option>
            </select> <button class="reset-button">Reset</button>

        
    </div>
      
      <hr />
      
    <div className="">

    
          <table align=''  width={'100%'} className='table table-striped'>  
          <thead className='bg-white m'>
              <tr>
                <th className='ps-3' >Problem</th>
                <th className='ps-3'>Ask in</th>
                <th className='ps-3'>Skill</th>
                <th className='ps-3'>Difficulty</th>
                <th className='ps-3'>Status</th>
                <th className='ps-3'></th>
              </tr>
          </thead>
          <tbody align='left'>
           {currentItems.map((item,index)=>
            <tr>
              <td>{item.problem}</td>
              <td>
              {item.asked_in.map((icon,index)=>
                <><img className='ms-1' width={'30px'} src={icon} alt="" /></>)}</td>
              <td>{item.skill}</td>
              <td>{item.difficulty}</td>
              <td><button className='border btn-color' >{item.status}</button></td>
              <td className=' '>
              <label onClick={handleCopy} className='btn-color bg-warning rounded-circle p-2'>{isCopied ? 'Done' : <i class="bi bi-share"></i>}</label>
              </td>
            </tr>
           )}
          </tbody>
          </table>

          <ReactPaginate
            previousLabel="< Previous"
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            pageCount={Math.ceil(data.length / itemsPerPage)}
            marginPagesDisplayed={2} //view number page
            pageRangeDisplayed={3} //first number to page .... phala
            onPageChange={handlePageClick} //function get next link 
            containerClassName={"pagination"} //css view
            pageClassName={'p-0 m-0'} //size style
            pageLinkClassName={'page-link'} //every page link view number 
        
            breakClassName={'page-item m-0 '}
            breakLinkClassName={'page-link'}
            activeClassName={'active '}  //view current page bg-active

            nextClassName={'page-item m-0'}
            nextLinkClassName={'page-link'}
            nextLabel="Next >" 

        />
          
        </div>
      
        {/* <div align='right' className='p-4'>
          <button  onClick={BackButton} className='border-success btn:hover ms-2 bg-white p-2 rounded-circle '><i class="bi bi-caret-left-fill"></i></button>
              {pageNumbers.map(number => (
                <button className='border-success btn:hover ms-2 bg-white p-2 rounded-circle ' key={number} onClick={() => paginate(number)}>
                  {number}
                </button>
              ))}
          <button  onClick={NextButton} className='border-success btn:hover ms-2 bg-white p-2 rounded-circle '><i class="bi bi-caret-right-fill"></i></button> */}
      {/* </div> */}

      </> 
    : 
    <></>}
    
  {SupplementaryCourses===true ? 
  <>
  <div className='row mt-3 p-5'>
  {SuplCouData.map((item,index)=>
    <div className="col-md-4 mb-4 ">
          <div className='bg-white p-2 shadow' style={{height:"16rem"}}>
          <div className='d-flex m-auto '>
              <label htmlFor="" className='bg-primary  fs-5 p-1 ps-2 text-white' 
                  style={{borderRadius:'50%',width:"40px",height:"40px"}}>
                  {item.img}
              </label>
              <label htmlFor="" className='pt-2 ps-2'>{item.title}</label>
          </div>
          <div className='d-flex mt-2 text-white mt-3 mb-3'>
                <label htmlFor="" className='rounded-3 bg-success me-3 p-1'>{item.lesson}</label>
                <label htmlFor="" className='rounded-3 bg-success p-1'>{item.min}</label>
          </div>

          <div>
                {item.desc}
                <br />
                <button className='pt-3 ps-2 pe-2 text-danger' style={{background:"transparent",border:"0"}}>
                    View &nbsp;
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M14.312 5.42426C14.5464 5.18995 14.5464 4.81005 14.312 4.57574L10.4937 0.757359C10.2593 0.523045 9.87945 0.523045 9.64513 0.757359C9.41082 0.991674 9.41082 1.37157 9.64513 1.60589L13.0392 5L9.64513 8.39411C9.41082 8.62843 9.41082 9.00833 9.64513 9.24264C9.87945 9.47696 10.2593 9.47696 10.4937 9.24264L14.312 5.42426ZM0.186401 5.6H13.8878V4.4H0.186401V5.6Z" fill="#F00037"></path></svg>
                </button>
          </div>
          </div>
      </div>
  )}
      
  </div>
  <br /><br /><br />
  </> 
  :
  <></>}

  {CodingAssessments===true ? 
  <div className='p-5'>
         <div className="row">
         {CoddAssdata.map((item,index)=><>
                <div className='col-md-4 '>
                <div className='text-center bg-white shadow mb-3' style={{height:"200px"}}>
                    <img width={'80px'} className='p-2' src={item['field 1']} alt="" />
                    <hr />
                    <div htmlFor="" className='p-2'>{item['field 2']}</div>
                    <button className='pt-3 ps-2 pe-2 text-danger' 
                             style={{background:"transparent",border:"0"}}>
                        View &nbsp;
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M14.312 5.42426C14.5464 5.18995 14.5464 4.81005 14.312 4.57574L10.4937 0.757359C10.2593 0.523045 9.87945 0.523045 9.64513 0.757359C9.41082 0.991674 9.41082 1.37157 9.64513 1.60589L13.0392 5L9.64513 8.39411C9.41082 8.62843 9.41082 9.00833 9.64513 9.24264C9.87945 9.47696 10.2593 9.47696 10.4937 9.24264L14.312 5.42426ZM0.186401 5.6H13.8878V4.4H0.186401V5.6Z" fill="#F00037"></path></svg>
                    </button>

                </div>
                </div>
          </>)}
         </div>
  </div> 
  :
  <></>}

  {QuizAssessments===true ? 
  <> 
  <div className="row">
  {QuizData.map((item,index)=>

  <div className='col-md-4 '>
                <div className='text-center bg-white shadow mb-3' style={{height:"190px"}}>
                    <img width={'80px'} className='p-2' src={item.Image} alt="" />
                    <br />
                    <label htmlFor="" className='p-2'>{item.title}</label>
                    
                    <br />
                    <button className='pt-3 ps-2 pe-2 text-danger' style={{background:"transparent",border:"0"}}>
                        View &nbsp;
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M14.312 5.42426C14.5464 5.18995 14.5464 4.81005 14.312 4.57574L10.4937 0.757359C10.2593 0.523045 9.87945 0.523045 9.64513 0.757359C9.41082 0.991674 9.41082 1.37157 9.64513 1.60589L13.0392 5L9.64513 8.39411C9.41082 8.62843 9.41082 9.00833 9.64513 9.24264C9.87945 9.47696 10.2593 9.47696 10.4937 9.24264L14.312 5.42426ZM0.186401 5.6H13.8878V4.4H0.186401V5.6Z" fill="#F00037"></path></svg>
                    </button>

                </div>
                </div>
  
  )}
  </div>
  </> 
  :
  <></>}


{/* ----------------------------------------------- */}

{/* <div className="">
       <div className="row">
        <div className="col-md-8">
        <div class="">
            <h1 class="">AlmaX Career Track</h1>
            <div class="">With the AlmaX career program, get a guaranteed job in your domain. It is an
              intensive 12 weeks program where we work hard to make you market &amp; job ready. We focus on your core technical
              skills, help you in resume building and boost your confidence through mock interviews. We also ensure that your
              communication &amp; interpersonal skills are sharpened to make you an impeccable &amp; desirable candidate.</div>
            <div class="">
            <button class="btn btn-danger">Start your application</button></div>
        </div>
        </div>
        <div className="col-md-4">
        <svg width={293} height={204} viewBox="0 0 293 204" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto" style={{ height: "100%" }}>
  <rect x="0.212463" width="292.788" height={204} rx={12} fill="#ECEFFE" />
  <path    d="M171.357 185.266C142.194 185.266 118.552 183.142 118.552 180.521C118.552 177.901 142.194 175.776 171.357 175.776C200.52 175.776 224.162 177.901 224.162 180.521C224.162 183.142 200.52 185.266 171.357 185.266Z"
    fill="#EBEBEB"  />
  <path d="M119.805 124.815H137.058V173.214H119.805V124.815Z" fill="url(#paint0_linear_13064_55002)"/>
  <g opacity="0.1"> <path d="M119.805 124.815H123.756V173.214H119.805V124.815Z" fill="black" /></g>
  <path d="M97.0735 106.524H114.326V173.214H97.0735V106.524Z" fill="url(#paint1_linear_13064_55002)"/>
  <g opacity="0.1"> <path d="M97.0766 106.524H101.028V173.214H97.0766V106.524Z" fill="black" /></g>
  <path d="M142.484 135.713H159.737V173.21H142.484V135.713Z" fill="url(#paint2_linear_13064_55002)"/>
  <g opacity="0.1"> <path d="M142.483 135.713H146.434V173.21H142.483V135.713Z" fill="black" /></g>
  <path d="M74.3454 82.1631H91.5983V173.21H74.3454V82.1631Z" fill="url(#paint3_linear_13064_55002)"/>
  <g opacity="0.1"> <path d="M74.3449 82.1631H78.2959V173.21H74.3449V82.1631Z" fill="black" /></g>
  <path d="M165.848 158.675V149.343C165.848 149.343 103.007 143.996 77.6227 74.3818L75.0978 75.0328C75.0978 75.0328 91.9593 146.385 165.848 158.675Z" fill="#37474F"/>
  <path d="M72.7429 77.3737L80.6826 74.7472L74.1051 68.1885L72.7429 77.3737Z" fill="#37474F"/>
  <path d="M225.475 173.215L205.626 173.12L185.777 173.09L146.078 173.026L106.379 173.087L86.5302 173.12L66.6809 173.215L86.5302 173.305L106.379 173.339L146.078 173.403L185.777 173.339L205.626 173.305L225.475 173.215Z" fill="#263238"/>
  <path d="M128.616 44.5806C127.487 50.9776 131.25 57.9314 139.468 60.509C146.937 62.8533 155.389 58.9662 157.248 54.0443C159.216 48.8289 155.863 43.828 151.66 43.3953C147.611 42.9626 144.39 45.194 141.395 43.9823C139.961 43.3991 138.354 41.3483 136.273 40.385C133.952 39.3126 129.334 40.4791 128.616 44.5806Z" fill="#263238"/>
  <path d="M154.188 58.424C152.079 60.0719 149.585 61.1546 146.941 61.5698C144.295 61.9764 141.592 61.7704 139.038 60.9678C136.459 60.2068 134.131 58.7669 132.299 56.7985C130.506 54.808 129.286 52.3683 128.769 49.7393C129.393 52.3097 130.662 54.6785 132.457 56.6216C133.363 57.5735 134.393 58.3988 135.52 59.075C136.649 59.7447 137.856 60.273 139.114 60.6479C140.371 61.0312 141.665 61.2834 142.974 61.4005C145.606 61.6329 148.255 61.2463 150.711 60.2716C151.946 59.8103 153.115 59.1892 154.188 58.424Z" fill="#263238"/>
  <path d="M152.784 43.2822C152.001 43.0373 151.185 42.918 150.365 42.9285C149.551 42.9307 148.74 43.0279 147.949 43.2182C147.151 43.4139 146.346 43.5945 145.533 43.7375C144.714 43.8936 143.879 43.9542 143.046 43.9181C142.625 43.8961 142.207 43.8369 141.796 43.7413C141.388 43.6253 140.996 43.4571 140.63 43.2408C139.93 42.801 139.257 42.3185 138.617 41.7959C137.978 41.2919 137.277 40.8709 136.532 40.5428C135.776 40.2258 134.969 40.0486 134.15 40.0198C134.98 39.9866 135.808 40.1144 136.589 40.3961C137.36 40.7024 138.09 41.1058 138.76 41.5964C139.437 42.0668 140.077 42.5861 140.777 42.9849C141.12 43.1893 141.49 43.3463 141.875 43.4515C142.266 43.5397 142.664 43.5913 143.065 43.6058C144.679 43.7074 146.289 43.2973 147.896 42.9849C148.709 42.8184 149.539 42.7489 150.368 42.778C151.196 42.8088 152.013 42.9793 152.784 43.2822Z" fill="#263238"/>
  <path d="M210.914 56.4529C210.12 54.6128 185.492 53.7097 164.555 53.4426H164.517C155.069 53.3259 145.992 52.4567 140.273 52.754C136.638 52.9459 134.692 54.2591 134.252 54.7784C132.849 56.4642 130.279 61.8715 139.957 68.7011C147.279 73.8676 155.682 78.4847 161.925 86.3868C168.167 94.2889 171.67 104.249 171.226 111.038C170.782 117.826 165.853 124.306 166.335 123.602C166.485 123.384 168.318 123.493 170.876 122.01C174.018 120.189 177.668 116.336 180.137 115.203C185.183 112.893 192.005 113.284 197.333 107.88C202.982 102.206 204.355 92.1779 207.038 84.2382C210.289 74.5938 217.781 72.3436 210.914 56.4529Z" fill="url(#paint4_linear_13064_55002)"/>
  <g opacity="0.2"> <path   d="M210.914 56.4529C210.12 54.6128 185.492 53.7097 164.555 53.4426H164.517C155.069 53.3259 145.992 52.4567 140.273 52.754C136.638 52.9459 134.692 54.2591 134.252 54.7784C132.849 56.4642 130.279 61.8715 139.957 68.7011C147.279 73.8676 155.682 78.4847 161.925 86.3868C168.167 94.2889 171.67 104.249 171.226 111.038C170.782 117.826 165.853 124.306 166.335 123.602C166.485 123.384 168.318 123.493 170.876 122.01C174.018 120.189 177.668 116.336 180.137 115.203C185.183 112.893 192.005 113.284 197.333 107.88C202.982 102.206 204.355 92.1779 207.038 84.2382C210.289 74.5938 217.781 72.3436 210.914 56.4529Z"   fill="black" /></g>
  <path opacity="0.1" d="M205.908 87.8306C206.266 86.6039 206.627 85.396 207.037 84.237C207.834 82.0024 208.864 79.8582 210.111 77.8401C210.111 77.8401 188.034 72.3462 181.596 75.0216C178.063 76.4817 188.407 77.4036 205.908 87.8306Z" fill="black"/>
  <path opacity="0.1" d="M176.262 117.98C177.703 116.795 179.061 115.722 180.171 115.222C181.468 114.659 182.81 114.209 184.183 113.875C182.764 104.704 181.172 98.3715 177.202 94.1721C174.678 91.4778 181.052 106.94 176.262 117.98Z" fill="black"/>
  <path opacity="0.1" d="M203.996 94.6804C204.324 93.5741 204.636 92.4565 204.948 91.3389C197.825 88.464 191.778 84.3098 191.729 85.2806C191.654 86.3493 199.327 91.6174 203.996 94.6804Z" fill="black"/>
  <path d="M217.465 76.5643C217.465 76.5643 219.5 67.5334 213.295 56.6209C212.693 55.5598 202.187 51.0744 195.166 50.4837C188.144 49.8929 182.805 51.9888 174.47 53.1967C166.135 54.4046 143.949 51.7216 138.583 52.8656C134.895 53.652 134.301 54.7959 134.301 54.7959C134.301 54.7959 138.609 53.4338 141.198 53.4752C151.445 53.6407 169.634 59.0706 174.406 58.9991C180.231 58.9126 186.718 58.3857 191.444 59.5221C196.727 60.7601 214.372 73.2342 217.465 76.5643Z" fill="url(#paint5_linear_13064_55002)"/>
  <path d="M159.807 144.545C160.367 143.924 169.436 123.096 169.274 122.076C169.221 121.7 149.786 115.721 149.786 115.721L144.458 129.245L156.751 131.901C156.751 131.901 156.849 141.429 157.127 142.524C157.406 143.619 159.25 145.165 159.807 144.545Z" fill="#EB9481"/>
  <path d="M159.806 144.545C160.051 144.27 161.94 140.097 163.968 135.416C164.1 135.107 164.235 134.795 164.367 134.483C164.717 133.685 165.059 132.876 165.402 132.074C165.533 131.762 165.661 131.45 165.778 131.141C165.906 130.833 166.038 130.52 166.154 130.219C166.354 129.753 166.53 129.294 166.726 128.846C166.847 128.552 166.963 128.263 167.08 127.984L167.415 127.156C167.58 126.75 167.735 126.362 167.881 125.99C167.983 125.742 168.081 125.493 168.171 125.256C168.352 124.797 168.514 124.376 168.649 123.999C168.724 123.811 168.788 123.623 168.845 123.469C168.991 123.055 169.101 122.716 169.161 122.49C169.203 122.369 169.225 122.242 169.225 122.114C169.225 121.979 166.933 121.049 163.957 119.879C163.535 122.091 162.643 126.084 160.946 132.052C158.177 141.862 156.916 138.012 156.773 136.071C156.773 136.052 156.773 136.033 156.773 136.014C156.773 136.131 156.773 136.251 156.773 136.368V136.394C156.773 136.609 156.773 136.827 156.792 137.042C156.811 137.256 156.792 137.516 156.792 137.753C156.792 138.129 156.811 138.535 156.83 138.915C156.849 139.295 156.852 139.668 156.871 140.003C156.871 140.21 156.871 140.409 156.897 140.597C156.897 140.695 156.897 140.786 156.897 140.88C156.897 140.974 156.897 141.124 156.92 141.256C156.92 141.512 156.95 141.741 156.973 141.937C156.969 141.982 156.969 142.027 156.973 142.073C156.988 142.23 157.012 142.388 157.044 142.543C157.432 143.612 159.249 145.162 159.806 144.545Z" fill="#263238"/>
  <path d="M152.528 133.062L157.822 117.367C157.822 117.367 137.743 109.589 137.401 108.268C137.265 107.753 150.417 88.5129 152.863 81.0849C154.488 76.1405 150.469 70.6768 150.469 70.6768L135.994 74.5601C135.994 74.5601 136.746 78.6993 136.261 79.5233C131.681 87.1206 118.854 108.095 120.058 115.384C121.209 122.36 152.528 133.062 152.528 133.062Z" fill="#263238"/>
  <path d="M149.394 131.034C149.966 129.213 152.405 121.849 153.093 120.027C153.289 119.501 153.47 118.974 153.688 118.454C153.872 117.927 154.086 117.411 154.328 116.908C154.331 116.902 154.336 116.897 154.343 116.894C154.35 116.891 154.357 116.891 154.364 116.893C154.371 116.895 154.376 116.9 154.38 116.906C154.384 116.912 154.385 116.92 154.384 116.927C154.276 117.412 154.141 117.89 153.981 118.36C153.842 118.838 153.692 119.312 153.541 119.787C153.248 120.724 152.943 121.668 152.638 122.59C152.036 124.411 150.049 130.116 149.549 131.09C149.507 131.169 149.364 131.128 149.394 131.034Z" fill="#37474F"/>
  <path d="M135.166 108.67C136.897 106.581 149.213 84.9633 149.841 83.699C150.492 82.5476 150.988 81.3152 151.316 80.0339C151.911 77.2155 151.023 74.2804 149.811 71.7555C149.806 71.7405 149.807 71.7243 149.813 71.7097C149.818 71.6951 149.829 71.6829 149.843 71.6753C149.857 71.6678 149.873 71.6652 149.888 71.6682C149.904 71.6712 149.918 71.6794 149.928 71.6916C151.139 73.8891 151.986 76.3877 151.809 78.9238C151.702 80.2158 151.348 81.4752 150.767 82.6341C150.172 83.9022 149.514 85.1439 148.885 86.397C147.583 88.9783 136.408 107.563 135.486 108.741C137.642 109.9 139.802 111.055 141.996 112.128C144.253 113.257 146.556 114.306 148.863 115.341C150.165 115.923 151.474 116.493 152.791 117.05C152.848 117.072 152.821 117.162 152.765 117.14C148.035 115.366 143.42 113.299 138.948 110.95C137.683 110.288 136.419 109.614 135.185 108.899C135.167 108.886 135.153 108.869 135.142 108.85C135.132 108.831 135.126 108.81 135.124 108.789C135.122 108.767 135.125 108.745 135.132 108.725C135.139 108.704 135.151 108.685 135.166 108.67Z" fill="#37474F"/>
  <path d="M139.347 104.961C143.073 99.0265 151.012 86.6917 152.864 81.0849C154.489 76.1405 150.47 70.6768 150.47 70.6768L144.898 72.1819L139.347 104.961Z" fill="#37474F"/>
  <path d="M175.053 158.516C175.84 158.223 193.492 143.909 193.808 142.934C193.939 142.558 192.001 139.875 189.571 136.688L189.492 136.59C188.991 135.931 179.332 125.595 179.332 125.595L167.975 135.213L178.007 145.7L178.169 145.888C178.169 145.888 173.868 154.388 173.623 155.495C173.379 156.601 174.301 158.81 175.053 158.516Z" fill="#EB9481"/>
  <path d="M190.789 138.276C192.626 140.734 193.935 142.63 193.826 142.939C193.491 143.921 175.858 158.22 175.053 158.517C174.248 158.814 173.375 156.598 173.619 155.507C173.766 154.833 175.422 151.413 176.694 148.843C175.888 150.653 175.267 154.321 182.338 147.277C186.744 142.92 189.352 139.981 190.789 138.276Z" fill="#263238"/>
  <path d="M135.994 74.56C135.994 74.56 139.358 82.3717 142.102 84.1403C142.102 84.1403 152.081 108.671 155.249 115.117C159.43 123.628 173.924 143.222 173.924 143.222L187.734 132.727C187.734 132.727 169.563 110.225 169.33 109.66C168.009 106.451 157.56 82.8158 157.597 82.1911C157.973 75.7942 153.458 69.8789 153.458 69.8789L135.994 74.56Z" fill="#263238"/>
  <path d="M142.177 84.1551C142.316 84.3294 142.421 84.5286 142.486 84.7421C142.572 84.9378 142.655 85.1184 142.738 85.3329C142.903 85.7092 143.073 86.1231 143.234 86.522C143.569 87.3461 143.912 88.1664 144.254 88.9904C144.597 89.8145 144.939 90.6386 145.266 91.4664C145.594 92.2943 145.917 93.0807 146.173 93.9086C146.173 93.9387 146.136 93.9575 146.121 93.9086C145.677 93.156 145.3 92.3319 144.932 91.5266C144.563 90.7214 144.205 89.9011 143.867 89.0807C143.528 88.2604 143.193 87.4288 142.866 86.601C142.711 86.2247 142.568 85.8258 142.422 85.4383C142.346 85.2388 142.275 85.0356 142.203 84.8324C142.104 84.6327 142.045 84.4153 142.03 84.1927C142.034 84.1778 142.042 84.1641 142.053 84.1532C142.064 84.1423 142.078 84.1345 142.093 84.1306C142.108 84.1268 142.123 84.127 142.138 84.1313C142.153 84.1357 142.166 84.1439 142.177 84.1551Z" fill="#37474F"/>
  <path d="M136.137 75.7261C137.248 77.5474 138.309 79.395 139.524 81.1522C139.78 81.5285 140.047 82.0553 140.457 82.2811C140.541 82.3301 140.635 82.3559 140.732 82.3559C140.829 82.3559 140.923 82.3301 141.007 82.2811C141.24 82.1193 141.123 81.7957 141.025 81.5925C140.792 81.1071 140.499 80.6442 140.239 80.1701C139.979 79.696 139.693 79.1654 139.419 78.665C138.809 77.5361 138.267 76.4072 137.654 75.2783C137.635 75.2445 137.684 75.2144 137.703 75.2482C138.339 76.347 139.039 77.4082 139.678 78.5069L140.664 80.1889L141.123 80.9942C141.273 81.2211 141.391 81.4665 141.477 81.7242C141.512 81.8191 141.528 81.9203 141.522 82.0214C141.516 82.1225 141.489 82.2212 141.442 82.3112C141.396 82.4012 141.331 82.4805 141.252 82.544C141.173 82.6075 141.082 82.6538 140.984 82.68C140.777 82.7154 140.564 82.6923 140.369 82.6132C140.174 82.534 140.005 82.4021 139.882 82.2322C139.536 81.796 139.218 81.3386 138.93 80.8625C138.602 80.362 138.279 79.8578 137.974 79.3573C137.269 78.1952 136.648 76.9842 136.115 75.7337C136.104 75.7224 136.126 75.7073 136.137 75.7261Z" fill="#37474F"/>
  <path d="M141.067 82.4493C141.342 82.6788 142.388 84.052 142.452 84.1272C142.516 84.2025 142.301 84.2965 142.271 84.2664C141.787 83.7039 141.341 83.1094 140.936 82.487C140.928 82.4644 141.045 82.4268 141.067 82.4493Z" fill="#37474F"/>
  <path d="M139.938 83.6573C140.877 83.7257 141.809 83.8755 142.722 84.1051C143.178 84.2029 143.629 84.3045 144.081 84.4212C144.565 84.5201 145.042 84.6534 145.507 84.8201C145.513 84.8222 145.518 84.8261 145.521 84.8311C145.525 84.8361 145.527 84.8421 145.527 84.8483C145.527 84.8544 145.525 84.8604 145.521 84.8655C145.518 84.8705 145.513 84.8744 145.507 84.8765C145.017 84.8487 144.529 84.7871 144.047 84.6921C143.603 84.6282 143.163 84.5529 142.722 84.4664C141.774 84.3239 140.84 84.0985 139.93 83.7928C139.912 83.7918 139.896 83.7837 139.884 83.7703C139.872 83.7569 139.865 83.7393 139.866 83.7213C139.867 83.7033 139.875 83.6865 139.889 83.6745C139.902 83.6625 139.92 83.6563 139.938 83.6573Z" fill="#37474F"/>
  <path d="M172.796 139.752C174.301 138.574 180.483 133.893 182.086 132.783C182.545 132.463 183.004 132.136 183.467 131.824C183.918 131.495 184.387 131.191 184.871 130.913C184.877 130.91 184.885 130.909 184.891 130.911C184.898 130.913 184.904 130.917 184.909 130.923C184.913 130.929 184.915 130.936 184.914 130.943C184.913 130.951 184.91 130.957 184.905 130.962C184.546 131.3 184.169 131.618 183.776 131.914C183.399 132.226 182.993 132.531 182.602 132.84C181.849 133.446 181.048 134.04 180.269 134.635C178.737 135.794 173.872 139.38 172.905 139.884C172.796 139.925 172.709 139.812 172.796 139.752Z" fill="#37474F"/>
  <path d="M151.674 71.1989C152.838 72.7483 153.711 74.4963 154.251 76.3578C154.513 77.2748 154.694 78.2128 154.793 79.1612C154.906 80.2261 154.834 81.3211 155.169 82.3521C155.552 83.4058 155.988 84.4394 156.475 85.449L157.856 88.6098L160.577 94.8864L166.055 107.488C166.492 108.501 166.921 109.517 167.429 110.499C167.926 111.448 168.5 112.355 169.145 113.212C170.488 115.029 171.926 116.779 173.31 118.563C176.106 122.149 178.917 125.712 181.649 129.355L182.68 130.732C182.702 130.762 182.68 130.803 182.639 130.773C179.752 127.244 176.934 123.661 174.112 120.075C172.699 118.284 171.293 116.488 169.894 114.687C169.261 113.874 168.633 113.054 168.072 112.188C167.487 111.271 166.973 110.312 166.533 109.317C164.652 105.178 162.891 100.96 161.073 96.7829C159.256 92.606 157.42 88.3803 155.606 84.1734C155.14 83.2547 154.819 82.2698 154.654 81.2534C154.545 80.211 154.541 79.1687 154.36 78.1302C154.012 76.1663 153.337 74.2749 152.362 72.5347C152.121 72.102 151.858 71.6805 151.583 71.2704C151.538 71.2102 151.632 71.1425 151.674 71.1989Z" fill="#37474F"/>
  <path d="M183.298 84.1445L189.257 100.844L161.692 110.681L155.733 93.9817L183.298 84.1445Z" fill="#455A64"/>
  <path d="M183.296 84.1418L186.103 92.0059L158.538 101.843L155.731 93.9789L183.296 84.1418Z" fill="#37474F"/>
  <path d="M185.854 89.2423L156.984 99.5449L154.203 91.7517L183.072 81.4491L185.854 89.2423Z" fill="#455A64"/>
  <path d="M173.13 79.9902L174.718 84.4342L172.626 85.1793L171.723 82.6506L163.75 85.4991L164.653 88.0278L162.561 88.7728L160.976 84.3251L173.13 79.9902Z" fill="#263238"/>
  <path d="M163.489 99.3196L161.607 99.9912L160.279 96.27L162.161 95.5984L163.489 99.3196Z" fill="#263238"/>
  <path d="M182.557 92.5218L180.675 93.1934L179.347 89.4722L181.229 88.8006L182.557 92.5218Z" fill="#263238"/>
  <path d="M136.642 58.9929C131.889 66.7182 125.868 73.7962 123.095 73.8489C119.362 73.9204 111.43 70.086 107.487 67.6928C106.331 66.9966 111.949 58.1049 113.187 58.8499C114.693 59.7493 122.343 64.5357 122.516 64.5771C122.892 64.6674 131.501 58.7897 133.526 57.3335C136.909 54.9064 138.749 55.5649 136.642 58.9929Z" fill="#EB9481"/>
  <path d="M101.763 63.8242C103.189 65.5589 107.501 67.9634 108.762 68.144C110.022 68.3246 114.357 61.1375 113.887 59.9145C113.416 58.6916 108.152 53.2279 105.909 52.765C103.667 52.3022 100.284 62.0255 101.763 63.8242Z" fill="#EB9481"/>
  <path d="M109.202 54.1712C109.375 55.349 107.889 54.8786 107.889 54.8786C107.889 54.8786 109.865 56.0752 109.571 57.3583C109.278 58.6415 107.509 57.9604 107.381 57.9153C107.486 57.9792 109.262 59.1269 108.849 60.3837C108.435 61.6405 106.73 60.76 106.621 60.6885C106.7 60.7788 107.727 62.0055 107.185 62.8898C106.252 64.395 103.543 61.3433 102.102 61.3169C102.102 61.3169 101.774 63.7515 101.752 63.823C101.752 63.823 99.1177 60.9594 99.2569 59.0178C99.2734 58.7352 99.3861 58.4668 99.5765 58.2572C99.7668 58.0477 100.023 57.9097 100.303 57.8663C100.303 57.8663 99.351 57.0347 99.6558 56.0338C99.8138 55.5221 100.785 55.3151 100.785 55.3151C100.579 55.116 100.433 54.8643 100.361 54.5875C100.29 54.3108 100.295 54.0196 100.378 53.746C100.638 53.0461 101.56 52.952 101.56 52.952C101.56 52.952 101.165 51.9548 101.661 51.3264C102.659 50.0583 108.826 51.65 109.202 54.1712Z" fill="#EB9481"/>
  <path d="M101.706 52.9157C101.684 52.9157 101.684 52.8818 101.706 52.8818C103.954 52.9017 106.143 53.6037 107.983 54.895C108.039 54.9401 107.983 55.0493 107.922 55.0154C105.964 54.0165 103.869 53.3092 101.706 52.9157Z" fill="#263238"/>
  <path d="M100.758 55.2971C100.735 55.2971 100.739 55.252 100.758 55.252C103.237 55.2999 105.617 56.2343 107.467 57.886C107.531 57.9462 107.527 58.0628 107.467 57.9989C106.15 56.9302 102.805 55.6358 100.758 55.2971Z" fill="#263238"/>
  <path d="M106.719 60.8546C104.894 59.2629 102.741 58.4125 100.405 57.8443C100.375 57.8443 100.405 57.7953 100.405 57.7953C101.62 57.7539 103.073 58.2619 104.168 58.7549C105.194 59.1897 106.088 59.8865 106.76 60.7756C106.802 60.8282 106.756 60.8884 106.719 60.8546Z" fill="#263238"/>
  <path d="M107.9 54.8789C108.257 55.1433 108.59 55.4393 108.894 55.7632C109.2 56.0663 109.421 56.4455 109.533 56.862C109.576 57.0555 109.545 57.2581 109.447 57.4302C109.344 57.602 109.199 57.7445 109.025 57.8441C108.845 57.9301 108.648 57.9769 108.449 57.9814C108.249 57.9859 108.05 57.9481 107.866 57.8704L106.948 57.5318L107.701 58.1677C108.034 58.4481 108.318 58.7811 108.544 59.1536C108.657 59.3194 108.735 59.5074 108.77 59.7052C108.806 59.903 108.799 60.1062 108.751 60.3012C108.704 60.4827 108.596 60.6425 108.445 60.7541C108.294 60.8657 108.11 60.9223 107.923 60.9146C107.506 60.8887 107.103 60.7594 106.749 60.5383L105.755 59.9475L106.508 60.8281C106.717 61.0726 106.892 61.3433 107.031 61.6333C107.173 61.9012 107.231 62.205 107.2 62.5063C107.179 62.6411 107.122 62.7677 107.034 62.8724C106.947 62.9771 106.833 63.0561 106.704 63.1008C106.399 63.1531 106.086 63.1179 105.801 62.9992C105.179 62.7484 104.578 62.4503 104.002 62.1074C103.708 61.9456 103.407 61.7801 103.103 61.6296C102.805 61.4616 102.476 61.3589 102.135 61.3285C102.466 61.3919 102.78 61.5198 103.061 61.7048C103.351 61.8741 103.633 62.0623 103.915 62.2467C104.478 62.6377 105.076 62.9741 105.703 63.2514C106.04 63.4079 106.415 63.4628 106.783 63.4094C106.976 63.3554 107.15 63.2469 107.283 63.0968C107.417 62.9466 107.504 62.7612 107.535 62.5627C107.585 62.1887 107.52 61.8085 107.351 61.4715C107.202 61.1464 107.012 60.8417 106.786 60.5646L106.534 60.8544C106.946 61.1308 107.424 61.2931 107.919 61.3248C108.19 61.3314 108.455 61.2466 108.672 61.0839C108.879 60.9122 109.031 60.6831 109.108 60.4254C109.17 60.1779 109.179 59.92 109.134 59.6689C109.088 59.4178 108.99 59.1792 108.845 58.9692C108.593 58.5626 108.275 58.2013 107.904 57.9005L107.731 58.1978C107.963 58.2845 108.212 58.3199 108.459 58.3017C108.707 58.2835 108.947 58.2121 109.165 58.0924C109.372 57.956 109.541 57.7697 109.658 57.5506C109.772 57.3265 109.802 57.0684 109.74 56.8243C109.597 56.3862 109.337 55.9958 108.988 55.6955C108.657 55.3831 108.292 55.1091 107.9 54.8789Z" fill="#263238"/>
  <path d="M113.152 58.8262C113.152 58.8262 110.481 49.6748 107.414 52.4706C106.503 53.3022 103.756 57.8027 104.648 58.3709C105.803 59.1234 107.301 57.4452 108.076 56.2486C108.076 56.2486 108.547 59.4922 110.898 59.8346C111.331 59.8911 111.77 59.8268 112.168 59.6488C112.566 59.4708 112.906 59.1861 113.152 58.8262Z" fill="#EB9481"/>
  <path d="M107.697 52.2568C107.301 52.5404 106.948 52.8801 106.65 53.2653C106.345 53.6441 106.064 54.0412 105.808 54.4544C105.287 55.2809 104.839 56.1508 104.468 57.0545C104.37 57.2953 104.307 57.5486 104.28 57.8071C104.265 57.956 104.283 58.1063 104.332 58.2474C104.386 58.4042 104.492 58.5373 104.634 58.6237C104.882 58.7763 105.177 58.835 105.465 58.7892C105.73 58.7428 105.984 58.6511 106.218 58.5183C106.647 58.2561 107.029 57.9227 107.347 57.5324C107.667 57.1598 107.959 56.7636 108.22 56.3471L107.911 56.2756C107.979 56.6429 108.081 57.0032 108.216 57.3518C108.347 57.699 108.514 58.0319 108.713 58.3452C108.915 58.6561 109.16 58.9362 109.443 59.1768C109.723 59.4134 110.046 59.5947 110.395 59.7111C110.072 59.5546 109.778 59.3447 109.525 59.0903C109.278 58.8343 109.066 58.5456 108.897 58.2323C108.725 57.9233 108.584 57.5981 108.475 57.2615C108.368 56.9267 108.291 56.5828 108.246 56.2342L108.197 55.8015L107.937 56.1778C107.671 56.5734 107.378 56.9506 107.061 57.3067C106.761 57.6577 106.407 57.9576 106.011 58.1947C105.843 58.3125 105.647 58.3854 105.443 58.4065C105.239 58.4276 105.033 58.3961 104.844 58.3151C104.555 58.1608 104.671 57.6415 104.822 57.2163C104.984 56.7695 105.168 56.3312 105.375 55.9031C105.582 55.4704 105.789 55.0376 106.018 54.6162C106.452 53.7475 107.018 52.9515 107.697 52.2568Z" fill="#263238"/>
  <path d="M118.718 62.0519L114.244 72.08C114.244 72.08 121.491 74.635 123.854 73.7997C126.217 72.9643 132.885 65.9202 136.065 60.4602C139.245 55.0002 137.371 54.2853 132.121 57.9767C126.872 61.6681 122.714 64.2607 122.56 64.193C122.406 64.1253 118.718 62.0519 118.718 62.0519Z" fill="#EBEBEB"/>
  <path d="M120.186 63.5302C120.186 63.5001 120.25 63.5302 120.242 63.5528C119.296 66.5256 118.189 69.4449 116.927 72.2978C116.927 72.3279 116.859 72.2978 116.871 72.2752C117.815 69.3019 118.922 66.3825 120.186 63.5302Z" fill="#263238"/>
  <path d="M127.859 70.7095C130.682 67.9625 134.068 63.8948 136.066 60.4593C138.636 56.0417 137.899 54.7284 134.738 56.3502L127.859 70.7095Z" fill="#C7C7C7"/>
  <path d="M135.283 71.9033L136.035 77.7772C136.035 77.7772 148.332 76.5505 154.669 71.1357C154.669 71.1357 147.896 57.5629 141.029 54.6504C137.589 53.1904 134.967 54.6052 134.037 57.1377C133.8 57.7774 131.159 64.9494 131.802 67.8281C132.359 70.3643 135.283 71.9033 135.283 71.9033Z" fill="#EBEBEB"/>
  <path d="M135.543 58.3553L135.566 58.2499V58.2086C135.566 58.2086 135.543 58.1897 135.539 58.2086L135.513 58.2575C135.487 58.3252 135.46 58.3929 135.438 58.4607C135.393 58.5961 135.355 58.7354 135.317 58.8746C135.242 59.1493 135.174 59.4315 135.111 59.71C134.983 60.2706 134.896 60.8388 134.817 61.407C134.662 62.549 134.611 63.7026 134.663 64.8538C134.704 66.014 134.912 67.1621 135.28 68.263C135.634 69.3801 136.271 70.387 137.127 71.1868L137.101 71.1454C137.447 72.1802 137.809 73.2075 138.174 74.2348L138.73 75.77C138.922 76.278 139.107 76.7935 139.348 77.2752C139.129 76.7747 138.971 76.2554 138.791 75.7399L138.279 74.1896L137.293 71.0777V71.0551L137.274 71.0363C136.501 70.2173 135.93 69.229 135.607 68.1501C135.282 67.0697 135.088 65.9542 135.028 64.8275C134.969 63.6987 134.986 62.5673 135.08 61.4409C135.126 60.8765 135.201 60.312 135.276 59.7476C135.314 59.4616 135.359 59.1831 135.408 58.9009L135.494 58.4832C135.494 58.4118 135.524 58.344 135.543 58.2763C135.542 58.26 135.542 58.2437 135.543 58.2274C135.543 58.2274 135.543 58.2537 135.543 58.265V58.3553Z" fill="#263238"/>
  <path d="M132.002 63.4667L132.047 63.2823C132.038 63.0423 132.048 62.802 132.077 62.5636C132.117 62.2741 132.185 61.9892 132.28 61.7131C132.28 61.6943 132.311 61.7131 132.307 61.7131C132.216 62.1132 132.156 62.5195 132.126 62.9286C132.32 62.0948 132.578 61.2771 132.898 60.4827C132.898 60.4777 132.9 60.4729 132.903 60.4694C132.907 60.4658 132.911 60.4639 132.916 60.4639C132.921 60.4639 132.926 60.4658 132.93 60.4694C132.933 60.4729 132.935 60.4777 132.935 60.4827C132.687 61.4761 132.423 62.4657 132.213 63.4667C132.002 64.4676 131.836 65.4723 131.663 66.477C131.663 66.5146 131.596 66.5033 131.599 66.477C131.643 65.4635 131.778 64.456 132.002 63.4667Z" fill="#263238"/>
  <path d="M135.634 61.2207C135.63 61.2958 135.649 61.3703 135.688 61.4346C135.727 61.4988 135.784 61.55 135.852 61.5814C135.921 61.6127 135.997 61.6229 136.071 61.6106C136.145 61.5983 136.214 61.564 136.269 61.5122C136.323 61.4604 136.361 61.3935 136.377 61.3201C136.393 61.2466 136.387 61.17 136.359 61.1002C136.331 61.0304 136.283 60.9705 136.221 60.9282C136.159 60.886 136.085 60.8634 136.01 60.8633C135.913 60.8632 135.82 60.9002 135.75 60.9667C135.68 61.0333 135.639 61.1242 135.634 61.2207Z" fill="#263238"/>
  <path d="M135.907 65.0192C135.708 65.0192 135.546 64.8575 135.546 64.658C135.546 64.4586 135.708 64.2969 135.907 64.2969C136.106 64.2969 136.268 64.4586 136.268 64.658C136.268 64.8575 136.106 65.0192 135.907 65.0192Z" fill="#263238"/>
  <path d="M137.917 71.0368C137.718 71.0368 137.556 70.8751 137.556 70.6756C137.556 70.4762 137.718 70.3145 137.917 70.3145C138.117 70.3145 138.278 70.4762 138.278 70.6756C138.278 70.8751 138.117 71.0368 137.917 71.0368Z" fill="#263238"/>
  <path d="M138.986 74.2096C138.787 74.2096 138.625 74.0479 138.625 73.8485C138.625 73.649 138.787 73.4873 138.986 73.4873C139.186 73.4873 139.348 73.649 139.348 73.8485C139.348 74.0479 139.186 74.2096 138.986 74.2096Z" fill="#263238"/>
  <path d="M136.355 68.1022C136.156 68.1022 135.994 67.9405 135.994 67.741C135.994 67.5416 136.156 67.3799 136.355 67.3799C136.555 67.3799 136.716 67.5416 136.716 67.741C136.716 67.9405 136.555 68.1022 136.355 68.1022Z" fill="#263238"/>
  <path d="M142.775 53.9876C151.72 54.0214 158.73 55.9217 160.355 57.9574C161.699 59.6357 165.861 66.9884 167.618 71.4662C168.111 72.7231 158.079 77.2197 157.721 75.8199C157.165 73.6525 152.596 63.1578 152.547 62.9884C152.45 62.6121 143.468 58.9283 141.172 58.0967C136.961 56.5125 138.034 53.9575 142.775 53.9876Z" fill="#EB9481"/>
  <path d="M164.254 87.5597C164.579 87.5141 164.883 87.3699 165.124 87.1466C165.365 86.9232 165.531 86.6314 165.601 86.3104C166.102 86.5557 166.674 86.6169 167.215 86.4835C168.156 86.2088 168.137 84.602 168.137 84.602C168.71 84.7471 169.313 84.717 169.868 84.5155C170.745 84.158 170.952 82.54 170.952 82.54C171.552 82.3837 172.076 82.0163 172.427 81.5052C173.311 80.1054 172.209 77.825 171.524 76.3688C170.839 74.9125 167.531 71.4206 166.971 70.6943L157.564 75.0104C157.564 75.0104 158.779 82.4158 159.821 84.015C160.732 85.3621 163.012 87.6838 164.254 87.5597Z" fill="#EB9481"/>
  <path d="M165.42 86.315C164.137 85.1108 163.279 83.5906 162.338 82.1231C162.319 82.0892 162.368 82.0554 162.391 82.0892C163.309 83.5605 164.509 84.8324 165.484 86.2623C165.491 86.2708 165.494 86.2817 165.493 86.2926C165.492 86.3036 165.486 86.3136 165.478 86.3206C165.47 86.3276 165.459 86.3309 165.448 86.3299C165.437 86.3288 165.427 86.3234 165.42 86.315Z" fill="#263238"/>
  <path d="M167.997 84.6327C167.732 84.331 167.508 83.9957 167.331 83.6355C167.12 83.2592 166.917 82.8829 166.718 82.5066C166.319 81.754 165.935 81.0015 165.589 80.2188C165.589 80.1849 165.623 80.1548 165.642 80.1887C166.041 80.9413 166.447 81.6938 166.88 82.4125C167.094 82.7888 167.312 83.1425 167.531 83.5076C167.763 83.8357 167.957 84.1892 168.11 84.5612C168.12 84.5761 168.123 84.5943 168.119 84.6115C168.115 84.6288 168.104 84.6439 168.089 84.6534C168.074 84.6628 168.056 84.666 168.039 84.6621C168.022 84.6582 168.007 84.6476 167.997 84.6327Z" fill="#263238"/>
  <path d="M170.936 82.5142C170.7 82.2384 170.513 81.924 170.383 81.5848C170.206 81.2386 170.033 80.8924 169.853 80.5462C169.476 79.8576 169.141 79.169 168.758 78.4917C168.754 78.4847 168.753 78.4764 168.755 78.4686C168.757 78.4609 168.762 78.4543 168.769 78.4503C168.776 78.4463 168.784 78.4452 168.792 78.4474C168.8 78.4495 168.806 78.4546 168.81 78.4616C169.187 79.1464 169.601 79.8237 169.984 80.5161C170.172 80.851 170.361 81.1934 170.545 81.5321C170.741 81.8276 170.885 82.1548 170.97 82.4992C170.97 82.4992 170.948 82.5255 170.936 82.5142Z" fill="#263238"/>
  <path d="M155.381 70.8788L165.488 65.8929C165.488 65.8929 162.135 58.3333 160.099 56.862C158.063 55.3907 149.398 53.8517 143.087 53.9119C136.671 53.9758 136.408 56.5083 142.436 58.702C148.464 60.8958 152.34 62.8939 152.374 63.0632C152.408 63.2326 155.381 70.8788 155.381 70.8788Z" fill="#EBEBEB"/>
  <path d="M154.82 69.7128C154.38 68.6592 152.321 63.124 152.254 63.0788C152.111 62.9885 149.804 61.8672 149.119 61.5323C148.54 61.2501 147.953 60.9791 147.366 60.7082C146.869 60.6028 146.368 60.4975 145.883 60.3319C145.877 60.3298 145.872 60.3259 145.869 60.3209C145.865 60.3158 145.863 60.3098 145.863 60.3037C145.863 60.2975 145.865 60.2915 145.869 60.2865C145.872 60.2814 145.877 60.2776 145.883 60.2755C146.228 60.3216 146.57 60.3907 146.906 60.4824L144.976 59.5981C144.976 59.5981 144.976 59.5718 144.976 59.5756C146.432 60.0836 152.4 62.7326 152.412 62.8229C152.423 62.9133 154.857 69.4645 154.873 69.5962C154.899 69.6677 154.831 69.7429 154.82 69.7128Z" fill="#263238"/>
  <path d="M155.381 68.1398C155.347 68.1398 155.325 68.0985 155.355 68.0834C158.099 66.6003 160.923 65.2688 163.814 64.0947C163.848 64.0947 163.87 64.1324 163.84 64.1512C161.094 65.632 158.27 66.9635 155.381 68.1398Z" fill="#263238"/>
  <path d="M138.037 54.57C138.037 54.9463 136.909 57.7346 135.245 58.077C134.7 58.1862 133.966 55.2436 133.966 55.2436L133.861 55.0404L132.408 52.1693L135.4 48.9708L135.84 48.5381C135.84 48.5381 136.182 49.3471 136.593 50.3631C136.611 50.4083 136.634 50.4534 136.653 50.5061C136.672 50.5588 136.702 50.6152 136.724 50.6717C136.788 50.8222 136.856 50.9727 136.916 51.1307C136.976 51.2888 137.01 51.3603 137.055 51.507L137.198 51.8833C137.536 52.7596 137.817 53.6571 138.037 54.57Z" fill="#EB9481"/>
  <path d="M136.604 50.3631C136.514 51.2951 136.222 52.1963 135.748 53.004C135.274 53.8117 134.631 54.5066 133.861 55.0404L132.409 52.1693L135.4 48.9708L135.841 48.5381C135.841 48.5381 136.183 49.3471 136.604 50.3631Z" fill="#263238"/>
  <path d="M127.287 46.5367C126.158 52.0644 129.342 53.3664 130.531 53.6072C131.614 53.8292 135.328 54.4426 137.025 49.0579C138.723 43.6731 136.506 41.4041 134.057 40.7795C131.607 40.1548 128.416 41.009 127.287 46.5367Z" fill="#EB9481"/>
  <path d="M129.146 49.6183C129.253 49.8762 129.424 50.1027 129.643 50.2766C129.766 50.3664 129.915 50.4162 130.068 50.4196C130.399 50.4196 130.485 50.1374 130.493 49.8778C130.496 49.7402 130.484 49.6025 130.455 49.4678C130.046 49.6559 129.587 49.7086 129.146 49.6183Z" fill="#263238"/>
  <path d="M129.639 50.2769C129.763 50.3667 129.912 50.4166 130.065 50.4199C130.396 50.4199 130.482 50.1377 130.49 49.8782C130.324 49.8384 130.149 49.8562 129.995 49.9286C129.84 50.0011 129.715 50.1239 129.639 50.2769Z" fill="#FF9BBC"/>
  <path d="M128.615 45.1855C128.74 45.1925 128.866 45.1925 128.991 45.1855C129.128 45.2038 129.267 45.176 129.386 45.1065C129.421 45.078 129.444 45.0385 129.453 44.9947C129.462 44.9509 129.456 44.9054 129.435 44.8657C129.385 44.7928 129.317 44.7347 129.237 44.6976C129.156 44.6605 129.068 44.6458 128.98 44.655C128.798 44.6461 128.619 44.7036 128.476 44.8168C128.447 44.8465 128.428 44.8838 128.419 44.9242C128.411 44.9646 128.414 45.0065 128.429 45.0451C128.443 45.0837 128.469 45.1174 128.502 45.1422C128.535 45.1671 128.574 45.1821 128.615 45.1855Z" fill="#263238"/>
  <path d="M132.156 46.4391C132.03 46.4331 131.904 46.4181 131.78 46.3939C131.645 46.395 131.513 46.3528 131.404 46.2735C131.374 46.2408 131.356 46.1992 131.352 46.1551C131.348 46.1109 131.358 46.0666 131.381 46.029C131.44 45.9624 131.515 45.9124 131.599 45.884C131.683 45.8557 131.772 45.8498 131.859 45.8672C132.041 45.8793 132.212 45.9568 132.341 46.0854C132.369 46.1179 132.387 46.1581 132.392 46.2008C132.397 46.2435 132.389 46.2868 132.369 46.3249C132.349 46.363 132.318 46.3943 132.28 46.4146C132.242 46.435 132.199 46.4435 132.156 46.4391Z" fill="#263238"/>
  <path d="M131.099 47.5107C131.099 47.5107 131.122 47.5371 131.118 47.5521C131.02 47.9283 130.971 48.3647 131.283 48.5679C131.283 48.5679 131.283 48.5904 131.283 48.5867C130.873 48.4324 130.945 47.8493 131.099 47.5107Z" fill="#263238"/>
  <path d="M131.521 47.2151C132.134 47.3054 131.897 48.5243 131.336 48.4377C130.776 48.3512 131.009 47.121 131.521 47.2151Z" fill="#263238"/>
  <path d="M131.75 47.3085C131.844 47.395 131.923 47.5379 132.051 47.5756C132.179 47.6132 132.333 47.5116 132.454 47.4063C132.416 47.6395 132.281 47.8615 132.021 47.8502C131.762 47.8389 131.664 47.6019 131.645 47.3536C131.664 47.3273 131.713 47.2708 131.75 47.3085Z" fill="#263238"/>
  <path d="M129.047 46.9893C129.047 46.9893 129.013 46.9893 129.013 47.0156C128.957 47.3918 128.825 47.8244 128.464 47.8884C128.889 47.926 129.055 47.3579 129.047 46.9893Z" fill="#263238"/>
  <path d="M128.77 46.5327C128.172 46.3747 127.905 47.5861 128.458 47.7291C129.011 47.872 129.285 46.6606 128.77 46.5327Z" fill="#263238"/>
  <path d="M128.51 46.556C128.401 46.5974 128.28 46.6952 128.164 46.6764C128.047 46.6576 127.961 46.5033 127.904 46.3604C127.904 46.3604 127.904 46.3604 127.882 46.3604C127.825 46.5898 127.848 46.8494 128.062 46.9435C128.277 47.0375 128.438 46.8607 128.555 46.6425C128.574 46.6124 128.555 46.5372 128.51 46.556Z" fill="#263238"/>
  <path d="M129.218 48.8131C129.218 48.8131 129.026 49.3587 128.973 49.6259C128.973 49.6522 129.03 49.6748 129.12 49.6974C129.34 49.7847 129.579 49.8098 129.812 49.77C130.045 49.7301 130.263 49.6269 130.441 49.4716C130.447 49.4676 130.451 49.4614 130.452 49.4544C130.454 49.4473 130.452 49.44 130.448 49.434C130.444 49.428 130.438 49.4238 130.431 49.4224C130.424 49.421 130.417 49.4225 130.411 49.4265C130.026 49.5914 129.598 49.6258 129.192 49.5243C129.192 49.449 129.549 48.5986 129.508 48.5873C129.299 48.5595 129.088 48.5595 128.879 48.5873C129.255 47.4585 129.79 46.3559 130.136 45.2007C130.136 45.1593 130.087 45.133 130.068 45.1669C129.449 46.3108 128.945 47.5133 128.563 48.7567C128.514 48.926 129.101 48.8357 129.218 48.8131Z" fill="#263238"/>
  <path d="M136.532 49.7391C135.598 49.5661 135.899 47.6018 135.899 47.6018C135.899 47.6018 134.044 47.1126 134.138 44.2867C133.981 45.0991 134.063 45.9398 134.375 46.7062C134.375 46.7062 131.2 45.4946 130.552 42.394C130.552 42.394 130.729 43.933 131.113 44.5652C130.351 44.0922 129.773 43.3744 129.472 42.5294C129.472 42.5294 128.479 43.9556 127.926 44.2716C127.926 44.2716 128.106 41.3065 129.683 40.1964C133.01 37.8597 136.231 41.679 136.231 41.679C136.231 41.679 138.368 42.6687 138.676 44.5764C139.151 47.519 136.532 49.7391 136.532 49.7391Z" fill="#263238"/>
  <path d="M135.885 49.2085C135.885 49.2085 137.232 47.534 137.999 48.0231C138.767 48.5123 137.672 51.0034 136.713 51.2856C136.592 51.3311 136.464 51.3518 136.335 51.3463C136.207 51.3409 136.081 51.3094 135.965 51.2538C135.848 51.1983 135.745 51.1197 135.66 51.023C135.575 50.9263 135.511 50.8133 135.471 50.691L135.885 49.2085Z" fill="#EB9481"/>
  <path d="M137.668 48.7197V48.7423C136.991 48.9643 136.607 49.5511 136.321 50.1643C136.364 50.1015 136.42 50.0486 136.486 50.0094C136.551 49.9701 136.624 49.9454 136.7 49.9368C136.775 49.9282 136.852 49.936 136.924 49.9597C136.997 49.9834 137.063 50.0224 137.119 50.0741C137.121 50.0777 137.122 50.0819 137.122 50.0862C137.122 50.0904 137.121 50.0945 137.118 50.0981C137.116 50.1016 137.113 50.1044 137.109 50.1062C137.105 50.1079 137.101 50.1085 137.096 50.1079C136.983 50.064 136.859 50.056 136.742 50.0849C136.624 50.1139 136.518 50.1784 136.438 50.2697C136.308 50.4249 136.193 50.5924 136.096 50.77C136.062 50.8265 135.956 50.77 135.983 50.7211C136.035 49.8822 136.765 48.7536 137.668 48.7197Z" fill="#263238"/>
  <path d="M133.974 55.3007L135.543 57.4869L137.801 53.6826L138.896 54.4578C138.896 54.4578 137.134 60.057 137.063 59.8425L135.558 57.9949L134.467 59.8011L133.691 56.1172L133.974 55.3007Z" fill="#EBEBEB"/>
  <path d="M133.986 58.0016C133.88 57.3882 133.752 56.7749 133.673 56.1577C133.673 56.1577 133.703 56.1201 133.715 56.1577C133.978 56.7109 134.377 59.0552 134.512 59.6083C134.558 59.5293 135.54 57.9978 135.558 58.0166C135.856 58.2951 136.962 59.6384 137.045 59.7664C137.323 58.8746 138.422 55.6272 138.795 54.7542C138.795 54.7316 138.843 54.7542 138.836 54.7542C138.625 55.6761 137.184 60.0448 137.146 60.0448C136.584 59.4203 136.054 58.7672 135.558 58.0881C135.226 58.7528 134.849 59.3939 134.43 60.0072C134.247 59.3467 134.099 58.6772 133.986 58.0016Z" fill="#263238"/>
  <path d="M137.639 53.6935C137.91 53.0538 138.64 54.4009 138.06 55.1987C137.202 56.3576 135.581 57.7311 135.223 57.7386C134.866 57.7461 133.718 56.3125 133.571 56.0002C133.424 55.6878 133.748 54.9879 133.861 55.0557C133.974 55.1234 134.967 56.6474 135.107 56.7189C135.246 56.7904 137.048 55.067 137.639 53.6935Z" fill="url(#paint6_linear_13064_55002)"/>
  <path d="M191.771 174.762H208.794V178.525H191.771V174.762Z" fill="url(#paint7_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M208.09 175.104C207.839 176.091 207.839 177.126 208.09 178.114C208.225 177.624 208.289 177.117 208.278 176.609C208.286 176.101 208.223 175.594 208.09 175.104Z"   fill="black" /> <path   d="M206.822 175.104C206.571 176.091 206.571 177.126 206.822 178.114C207.073 177.126 207.073 176.091 206.822 175.104Z"   fill="black" /> <path   d="M206.204 175.104C205.954 176.091 205.954 177.126 206.204 178.114C206.455 177.126 206.455 176.091 206.204 175.104Z"   fill="black" /> <path   d="M202.803 175.104C202.553 176.091 202.553 177.126 202.803 178.114C203.054 177.126 203.054 176.091 202.803 175.104Z"   fill="black" /> <path   d="M201.885 175.104C201.752 175.594 201.689 176.101 201.697 176.609C201.686 177.117 201.75 177.624 201.885 178.114C202.136 177.126 202.136 176.091 201.885 175.104Z"   fill="black" /> <path   d="M198.08 175.104C197.95 175.594 197.886 176.101 197.892 176.609C197.884 177.117 197.947 177.623 198.08 178.114C198.215 177.624 198.279 177.117 198.269 176.609C198.276 176.101 198.213 175.594 198.08 175.104Z"   fill="black" /> <path   d="M197.205 175.104C196.954 176.091 196.954 177.126 197.205 178.114C197.456 177.126 197.456 176.091 197.205 175.104Z"   fill="black" /> <path   d="M195.589 175.104C195.457 175.594 195.393 176.101 195.401 176.609C195.391 177.117 195.454 177.624 195.589 178.114C195.722 177.623 195.786 177.117 195.777 176.609C195.783 176.101 195.72 175.594 195.589 175.104Z"   fill="black" /> <path   d="M198.815 175.104C198.564 176.091 198.564 177.126 198.815 178.114C199.066 177.126 199.066 176.091 198.815 175.104Z"   fill="black" /> <path   d="M205.081 175.104C204.95 175.594 204.887 176.101 204.893 176.609C204.884 177.117 204.948 177.623 205.081 178.114C205.216 177.624 205.279 177.117 205.269 176.609C205.277 176.101 205.213 175.594 205.081 175.104Z"   fill="black" /> <path   d="M200.674 175.104C200.423 176.091 200.423 177.126 200.674 178.114C200.925 177.126 200.925 176.091 200.674 175.104Z"   fill="black" /> <path   d="M200.042 175.104C199.909 175.594 199.846 176.101 199.854 176.609C199.844 177.117 199.907 177.624 200.042 178.114C200.293 177.126 200.293 176.091 200.042 175.104Z"   fill="black" /> <path   d="M193.491 175.104C193.36 175.594 193.297 176.101 193.303 176.609C193.293 177.117 193.356 177.624 193.491 178.114C193.624 177.623 193.687 177.117 193.679 176.609C193.685 176.101 193.622 175.594 193.491 175.104Z"   fill="black" /> <path   d="M192.534 175.104C192.284 176.091 192.284 177.126 192.534 178.114C192.785 177.126 192.785 176.091 192.534 175.104Z"   fill="black" /> <path   d="M194.84 175.104C194.708 175.594 194.644 176.101 194.652 176.609C194.642 177.117 194.705 177.624 194.84 178.114C195.091 177.126 195.091 176.091 194.84 175.104Z"   fill="black" /> <path   d="M203.537 175.104C203.286 176.091 203.286 177.126 203.537 178.114C203.787 177.126 203.787 176.091 203.537 175.104Z"   fill="black" /></g>
  <path opacity="0.1" d="M191.771 174.762V175.559L208.794 176.098V174.762H191.771Z" fill="black"/>
  <path d="M192.934 170.999H209.957V174.762H192.934V170.999Z" fill="url(#paint8_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M209.256 171.345C209.005 172.332 209.005 173.367 209.256 174.355C209.507 173.367 209.507 172.332 209.256 171.345Z"   fill="black" /> <path   d="M207.988 171.345C207.738 172.332 207.738 173.367 207.988 174.355C208.239 173.367 208.239 172.332 207.988 171.345Z"   fill="black" /> <path   d="M207.367 171.345C207.236 171.836 207.172 172.342 207.178 172.85C207.171 173.358 207.234 173.865 207.367 174.355C207.501 173.865 207.564 173.358 207.555 172.85C207.563 172.342 207.499 171.835 207.367 171.345Z"   fill="black" /> <path   d="M203.97 171.345C203.719 172.332 203.719 173.367 203.97 174.355C204.221 173.367 204.221 172.332 203.97 171.345Z"   fill="black" /> <path   d="M203.047 171.345C202.796 172.332 202.796 173.367 203.047 174.355C203.181 173.865 203.245 173.358 203.235 172.85C203.243 172.342 203.18 171.835 203.047 171.345Z"   fill="black" /> <path   d="M199.246 171.345C198.996 172.332 198.996 173.367 199.246 174.355C199.497 173.367 199.497 172.332 199.246 171.345Z"   fill="black" /> <path   d="M198.382 171.345C198.251 171.836 198.188 172.342 198.194 172.85C198.184 173.358 198.247 173.865 198.382 174.355C198.516 173.865 198.58 173.358 198.57 172.85C198.576 172.342 198.513 171.836 198.382 171.345Z"   fill="black" /> <path   d="M196.751 171.345C196.5 172.332 196.5 173.367 196.751 174.355C197.002 173.367 197.002 172.332 196.751 171.345Z"   fill="black" /> <path   d="M199.981 171.345C199.73 172.332 199.73 173.367 199.981 174.355C200.232 173.367 200.232 172.332 199.981 171.345Z"   fill="black" /> <path   d="M206.243 171.345C205.992 172.332 205.992 173.367 206.243 174.355C206.494 173.367 206.494 172.332 206.243 171.345Z"   fill="black" /> <path   d="M201.839 171.345C201.588 172.332 201.588 173.367 201.839 174.355C202.09 173.367 202.09 172.332 201.839 171.345Z"   fill="black" /> <path   d="M201.204 171.345C200.953 172.332 200.953 173.367 201.204 174.355C201.338 173.865 201.402 173.358 201.392 172.85C201.4 172.342 201.337 171.835 201.204 171.345Z"   fill="black" /> <path   d="M194.649 171.345C194.398 172.332 194.398 173.367 194.649 174.355C194.9 173.367 194.9 172.332 194.649 171.345Z"   fill="black" /> <path   d="M193.701 171.345C193.45 172.332 193.45 173.367 193.701 174.355C193.952 173.367 193.952 172.332 193.701 171.345Z"   fill="black" /> <path   d="M196.002 171.345C195.752 172.332 195.752 173.367 196.002 174.355C196.137 173.865 196.2 173.358 196.191 172.85C196.199 172.342 196.135 171.835 196.002 171.345Z"   fill="black" /> <path   d="M204.703 171.345C204.57 171.835 204.506 172.342 204.514 172.85C204.505 173.358 204.568 173.865 204.703 174.355C204.835 173.865 204.899 173.358 204.891 172.85C204.897 172.342 204.834 171.836 204.703 171.345Z"   fill="black" /></g>
  <path opacity="0.1" d="M192.937 170.999V171.801L209.957 172.335V170.999H192.937Z" fill="black"/>
  <path d="M190.303 163.507H207.326V167.27H190.303V163.507Z" fill="url(#paint9_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M206.627 163.865C206.376 164.853 206.376 165.888 206.627 166.876C206.878 165.888 206.878 164.853 206.627 163.865Z"   fill="black" /> <path   d="M205.359 163.865C205.226 164.356 205.163 164.862 205.171 165.37C205.161 165.879 205.225 166.385 205.359 166.876C205.61 165.888 205.61 164.853 205.359 163.865Z"   fill="black" /> <path   d="M204.737 163.865C204.486 164.853 204.486 165.888 204.737 166.876C204.872 166.385 204.935 165.879 204.925 165.37C204.933 164.862 204.87 164.356 204.737 163.865Z"   fill="black" /> <path   d="M201.341 163.865C201.09 164.853 201.09 165.888 201.341 166.876C201.592 165.888 201.592 164.853 201.341 163.865Z"   fill="black" /> <path   d="M200.419 163.865C200.168 164.853 200.168 165.888 200.419 166.876C200.669 165.888 200.669 164.853 200.419 163.865Z"   fill="black" /> <path   d="M196.617 163.865C196.366 164.853 196.366 165.888 196.617 166.876C196.868 165.888 196.868 164.853 196.617 163.865Z"   fill="black" /> <path   d="M195.749 163.865C195.498 164.853 195.498 165.888 195.749 166.876C195.883 166.385 195.947 165.879 195.937 165.37C195.945 164.862 195.882 164.356 195.749 163.865Z"   fill="black" /> <path   d="M194.122 163.865C193.871 164.853 193.871 165.888 194.122 166.876C194.373 165.888 194.373 164.853 194.122 163.865Z"   fill="black" /> <path   d="M197.351 163.865C197.219 164.356 197.155 164.862 197.163 165.37C197.154 165.879 197.217 166.385 197.351 166.876C197.484 166.385 197.547 165.878 197.54 165.37C197.546 164.862 197.482 164.356 197.351 163.865Z"   fill="black" /> <path   d="M203.617 163.865C203.367 164.853 203.367 165.888 203.617 166.876C203.868 165.888 203.868 164.853 203.617 163.865Z"   fill="black" /> <path   d="M199.21 163.865C198.959 164.853 198.959 165.888 199.21 166.876C199.46 165.888 199.46 164.853 199.21 163.865Z"   fill="black" /> <path   d="M198.574 163.865C198.323 164.853 198.323 165.888 198.574 166.876C198.825 165.888 198.825 164.853 198.574 163.865Z"   fill="black" /> <path   d="M192.02 163.865C191.774 164.854 191.774 165.887 192.02 166.876C192.271 165.888 192.271 164.853 192.02 163.865Z"   fill="black" /> <path   d="M191.072 163.865C190.939 164.356 190.876 164.862 190.884 165.37C190.874 165.879 190.937 166.385 191.072 166.876C191.323 165.888 191.323 164.853 191.072 163.865Z"   fill="black" /> <path   d="M193.374 163.865C193.123 164.853 193.123 165.888 193.374 166.876C193.625 165.888 193.625 164.853 193.374 163.865Z"   fill="black" /> <path   d="M202.073 163.865C201.942 164.356 201.879 164.862 201.885 165.37C201.876 165.879 201.939 166.385 202.073 166.876C202.206 166.385 202.269 165.878 202.262 165.37C202.268 164.862 202.204 164.356 202.073 163.865Z"   fill="black" /></g>
  <path opacity="0.1" d="M190.307 163.51V164.307L207.326 164.846V163.51H190.307Z" fill="black"/>
  <path d="M190.732 159.747H207.756V163.51H190.732V159.747Z" fill="url(#paint10_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M191.499 163.112C191.63 162.621 191.694 162.115 191.687 161.607C191.697 161.099 191.633 160.592 191.499 160.102C191.365 160.592 191.301 161.099 191.311 161.607C191.305 162.115 191.368 162.621 191.499 163.112Z"   fill="black" /> <path   d="M192.767 163.112C192.898 162.621 192.962 162.115 192.955 161.607C192.963 161.099 192.9 160.592 192.767 160.102C192.633 160.592 192.569 161.099 192.579 161.607C192.571 162.115 192.634 162.621 192.767 163.112Z"   fill="black" /> <path   d="M193.389 163.112C193.635 162.124 193.635 161.09 193.389 160.102C193.138 161.089 193.138 162.124 193.389 163.112Z"   fill="black" /> <path   d="M196.785 163.112C196.917 162.621 196.98 162.115 196.974 161.607C196.981 161.099 196.918 160.592 196.785 160.102C196.651 160.592 196.588 161.099 196.597 161.607C196.591 162.115 196.654 162.621 196.785 163.112Z"   fill="black" /> <path   d="M197.705 163.112C197.956 162.124 197.956 161.089 197.705 160.102C197.454 161.089 197.454 162.124 197.705 163.112Z"   fill="black" /> <path   d="M201.509 163.112C201.64 162.621 201.704 162.115 201.697 161.607C201.707 161.099 201.643 160.592 201.509 160.102C201.376 160.592 201.313 161.099 201.321 161.607C201.315 162.115 201.378 162.621 201.509 163.112Z"   fill="black" /> <path   d="M202.388 163.112C202.639 162.124 202.639 161.089 202.388 160.102C202.137 161.089 202.137 162.124 202.388 163.112Z"   fill="black" /> <path   d="M203.999 163.112C204.25 162.124 204.25 161.089 203.999 160.102C203.749 161.089 203.749 162.124 203.999 163.112Z"   fill="black" /> <path   d="M200.775 163.112C201.026 162.124 201.026 161.089 200.775 160.102C200.641 160.592 200.577 161.099 200.587 161.607C200.579 162.115 200.642 162.621 200.775 163.112Z"   fill="black" /> <path   d="M194.509 163.112C194.642 162.621 194.705 162.115 194.697 161.607C194.706 161.099 194.643 160.592 194.509 160.102C194.376 160.592 194.313 161.099 194.321 161.607C194.314 162.115 194.377 162.621 194.509 163.112Z"   fill="black" /> <path   d="M198.915 163.112C199.046 162.621 199.109 162.115 199.103 161.607C199.111 161.099 199.048 160.592 198.915 160.102C198.781 160.592 198.717 161.099 198.727 161.607C198.72 162.115 198.784 162.621 198.915 163.112Z"   fill="black" /> <path   d="M199.548 163.112C199.798 162.124 199.798 161.089 199.548 160.102C199.297 161.089 199.297 162.124 199.548 163.112Z"   fill="black" /> <path   d="M206.103 163.112C206.354 162.124 206.354 161.089 206.103 160.102C205.852 161.089 205.852 162.124 206.103 163.112Z"   fill="black" /> <path   d="M207.036 163.112C207.167 162.621 207.231 162.115 207.224 161.607C207.232 161.099 207.169 160.592 207.036 160.102C206.902 160.592 206.838 161.099 206.848 161.607C206.84 162.115 206.903 162.621 207.036 163.112Z"   fill="black" /> <path   d="M204.747 163.112C204.998 162.124 204.998 161.089 204.747 160.102C204.496 161.089 204.496 162.124 204.747 163.112Z"   fill="black" /> <path   d="M196.053 163.112C196.304 162.124 196.304 161.089 196.053 160.102C195.802 161.089 195.802 162.124 196.053 163.112Z"   fill="black" /></g>
  <path opacity="0.1" d="M190.736 159.747V160.545L207.756 161.083V159.747H190.736Z" fill="black"/>
  <path d="M191.771 155.984H208.794V159.747H191.771V155.984Z" fill="url(#paint11_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M208.09 156.339C207.959 156.83 207.896 157.336 207.902 157.844C207.894 158.352 207.958 158.859 208.09 159.349C208.225 158.859 208.288 158.352 208.279 157.844C208.287 157.336 208.223 156.829 208.09 156.339Z"   fill="black" /> <path   d="M206.823 156.339C206.572 157.327 206.572 158.361 206.823 159.349C206.957 158.859 207.02 158.352 207.011 157.844C207.019 157.336 206.956 156.829 206.823 156.339Z"   fill="black" /> <path   d="M206.204 156.339C205.954 157.327 205.954 158.361 206.204 159.349C206.455 158.361 206.455 157.327 206.204 156.339Z"   fill="black" /> <path   d="M202.804 156.339C202.553 157.327 202.553 158.361 202.804 159.349C202.939 158.859 203.002 158.352 202.992 157.844C203.001 157.336 202.937 156.829 202.804 156.339Z"   fill="black" /> <path   d="M201.885 156.339C201.634 157.327 201.634 158.361 201.885 159.349C202.136 158.361 202.136 157.327 201.885 156.339Z"   fill="black" /> <path   d="M198.08 156.339C197.949 156.83 197.886 157.336 197.892 157.844C197.885 158.352 197.948 158.859 198.08 159.349C198.215 158.859 198.278 158.352 198.269 157.844C198.275 157.336 198.212 156.83 198.08 156.339Z"   fill="black" /> <path   d="M197.205 156.339C196.954 157.327 196.954 158.361 197.205 159.349C197.451 158.361 197.451 157.327 197.205 156.339Z"   fill="black" /> <path   d="M195.59 156.339C195.339 157.327 195.339 158.361 195.59 159.349C195.841 158.361 195.841 157.327 195.59 156.339Z"   fill="black" /> <path   d="M198.815 156.339C198.564 157.327 198.564 158.361 198.815 159.349C199.065 158.361 199.065 157.327 198.815 156.339Z"   fill="black" /> <path   d="M205.079 156.339C204.948 156.83 204.885 157.336 204.891 157.844C204.881 158.352 204.945 158.859 205.079 159.349C205.212 158.859 205.275 158.352 205.267 157.844C205.274 157.336 205.21 156.83 205.079 156.339Z"   fill="black" /> <path   d="M200.673 156.339C200.542 156.83 200.478 157.336 200.485 157.844C200.477 158.352 200.54 158.859 200.673 159.349C200.807 158.859 200.871 158.352 200.861 157.844C200.869 157.336 200.806 156.829 200.673 156.339Z"   fill="black" /> <path   d="M200.042 156.339C199.791 157.327 199.791 158.361 200.042 159.349C200.293 158.361 200.293 157.327 200.042 156.339Z"   fill="black" /> <path   d="M193.49 156.339C193.357 156.829 193.294 157.336 193.302 157.844C193.292 158.352 193.355 158.859 193.49 159.349C193.741 158.361 193.741 157.327 193.49 156.339Z"   fill="black" /> <path   d="M192.535 156.339C192.284 157.327 192.284 158.361 192.535 159.349C192.67 158.859 192.733 158.352 192.723 157.844C192.732 157.336 192.668 156.829 192.535 156.339Z"   fill="black" /> <path   d="M194.84 156.339C194.589 157.327 194.589 158.361 194.84 159.349C195.091 158.361 195.091 157.327 194.84 156.339Z"   fill="black" /> <path   d="M203.537 156.339C203.286 157.327 203.286 158.361 203.537 159.349C203.787 158.361 203.787 157.327 203.537 156.339Z"   fill="black" /></g>
  <path opacity="0.1" d="M191.771 155.984V156.786L208.794 157.32V155.984H191.771Z" fill="black"/>
  <path d="M191.771 167.27H208.794V171.032H191.771V167.27Z" fill="url(#paint12_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M192.534 170.638C192.785 169.651 192.785 168.616 192.534 167.628C192.282 168.616 192.282 169.651 192.534 170.638Z"   fill="black" /> <path   d="M193.803 170.638C193.936 170.148 193.999 169.641 193.991 169.133C194.001 168.625 193.938 168.118 193.803 167.628C193.67 168.118 193.606 168.625 193.615 169.133C193.608 169.641 193.672 170.147 193.803 170.638Z"   fill="black" /> <path   d="M194.423 170.638C194.674 169.651 194.674 168.616 194.423 167.628C194.171 168.616 194.171 169.651 194.423 170.638Z"   fill="black" /> <path   d="M197.821 170.638C197.954 170.148 198.018 169.641 198.009 169.133C198.02 168.625 197.956 168.118 197.821 167.628C197.57 168.616 197.57 169.651 197.821 170.638Z"   fill="black" /> <path   d="M198.759 170.638C199.01 169.651 199.01 168.616 198.759 167.628C198.507 168.616 198.507 169.651 198.759 170.638Z"   fill="black" /> <path   d="M202.544 170.638C202.795 169.651 202.795 168.616 202.544 167.628C202.292 168.616 202.292 169.651 202.544 170.638Z"   fill="black" /> <path   d="M203.424 170.638C203.675 169.651 203.675 168.616 203.424 167.628C203.289 168.118 203.226 168.625 203.236 169.133C203.228 169.641 203.291 170.148 203.424 170.638Z"   fill="black" /> <path   d="M205.039 170.638C205.291 169.651 205.291 168.616 205.039 167.628C204.788 168.616 204.788 169.651 205.039 170.638Z"   fill="black" /> <path   d="M201.81 170.638C201.941 170.147 202.005 169.641 201.998 169.133C202.008 168.625 201.945 168.118 201.81 167.628C201.677 168.118 201.613 168.625 201.622 169.133C201.615 169.641 201.679 170.147 201.81 170.638Z"   fill="black" /> <path   d="M195.545 170.638C195.797 169.651 195.797 168.616 195.545 167.628C195.294 168.616 195.294 169.651 195.545 170.638Z"   fill="black" /> <path   d="M199.951 170.638C200.084 170.148 200.147 169.641 200.139 169.133C200.149 168.625 200.086 168.118 199.951 167.628C199.699 168.616 199.699 169.651 199.951 170.638Z"   fill="black" /> <path   d="M200.587 170.638C200.839 169.651 200.839 168.616 200.587 167.628C200.336 168.616 200.336 169.651 200.587 170.638Z"   fill="black" /> <path   d="M207.139 170.638C207.391 169.651 207.391 168.616 207.139 167.628C206.888 168.616 206.888 169.651 207.139 170.638Z"   fill="black" /> <path   d="M208.09 170.638C208.223 170.148 208.287 169.641 208.278 169.133C208.289 168.625 208.225 168.118 208.09 167.628C207.957 168.118 207.894 168.625 207.902 169.133C207.896 169.641 207.959 170.147 208.09 170.638Z"   fill="black" /> <path   d="M205.787 170.638C206.038 169.651 206.038 168.616 205.787 167.628C205.535 168.616 205.535 169.651 205.787 170.638Z"   fill="black" /> <path   d="M197.087 170.638C197.218 170.147 197.281 169.641 197.275 169.133C197.283 168.625 197.22 168.118 197.087 167.628C196.952 168.118 196.888 168.625 196.899 169.133C196.892 169.641 196.955 170.147 197.087 170.638Z"   fill="black" /></g>
  <path opacity="0.1" d="M191.771 167.27V168.067L208.794 168.605V167.27H191.771Z" fill="black"/>
  <path d="M174.748 178.853H191.771V182.615H174.748V178.853Z" fill="url(#paint13_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M191.066 179.197C190.814 180.185 190.814 181.22 191.066 182.208C191.317 181.22 191.317 180.185 191.066 179.197Z"   fill="black" /> <path   d="M189.798 179.197C189.547 180.185 189.547 181.22 189.798 182.208C190.05 181.22 190.05 180.185 189.798 179.197Z"   fill="black" /> <path   d="M189.181 179.197C189.048 179.688 188.984 180.194 188.993 180.702C188.982 181.211 189.046 181.718 189.181 182.208C189.432 181.22 189.432 180.185 189.181 179.197Z"   fill="black" /> <path   d="M185.78 179.197C185.528 180.185 185.528 181.22 185.78 182.208C186.031 181.22 186.031 180.185 185.78 179.197Z"   fill="black" /> <path   d="M184.861 179.197C184.728 179.688 184.664 180.194 184.673 180.702C184.663 181.211 184.726 181.718 184.861 182.208C184.994 181.717 185.057 181.21 185.049 180.702C185.056 180.194 184.992 179.688 184.861 179.197Z"   fill="black" /> <path   d="M181.073 179.197C180.821 180.185 180.821 181.22 181.073 182.208C181.324 181.22 181.324 180.185 181.073 179.197Z"   fill="black" /> <path   d="M180.18 179.197C179.928 180.185 179.928 181.22 180.18 182.208C180.431 181.22 180.431 180.185 180.18 179.197Z"   fill="black" /> <path   d="M178.566 179.197C178.435 179.688 178.372 180.194 178.378 180.702C178.368 181.211 178.431 181.718 178.566 182.208C178.699 181.717 178.763 181.21 178.754 180.702C178.761 180.194 178.698 179.688 178.566 179.197Z"   fill="black" /> <path   d="M181.791 179.197C181.545 180.186 181.545 181.219 181.791 182.208C182.042 181.22 182.042 180.185 181.791 179.197Z"   fill="black" /> <path   d="M188.056 179.197C187.804 180.185 187.804 181.22 188.056 182.208C188.191 181.718 188.254 181.211 188.244 180.702C188.252 180.194 188.189 179.688 188.056 179.197Z"   fill="black" /> <path   d="M183.649 179.197C183.397 180.185 183.397 181.22 183.649 182.208C183.9 181.22 183.9 180.185 183.649 179.197Z"   fill="black" /> <path   d="M183.016 179.197C182.883 179.688 182.82 180.194 182.828 180.702C182.818 181.211 182.881 181.718 183.016 182.208C183.149 181.717 183.213 181.21 183.204 180.702C183.211 180.194 183.148 179.688 183.016 179.197Z"   fill="black" /> <path   d="M176.462 179.197C176.331 179.688 176.268 180.194 176.274 180.702C176.266 181.21 176.329 181.717 176.462 182.208C176.597 181.718 176.661 181.211 176.65 180.702C176.659 180.194 176.595 179.688 176.462 179.197Z"   fill="black" /> <path   d="M175.511 179.197C175.259 180.185 175.259 181.22 175.511 182.208C175.762 181.22 175.762 180.185 175.511 179.197Z"   fill="black" /> <path   d="M177.817 179.197C177.684 179.688 177.62 180.194 177.629 180.702C177.618 181.211 177.682 181.718 177.817 182.208C177.95 181.717 178.013 181.21 178.005 180.702C178.011 180.194 177.948 179.688 177.817 179.197Z"   fill="black" /> <path   d="M186.517 179.197C186.265 180.185 186.265 181.22 186.517 182.208C186.768 181.22 186.768 180.185 186.517 179.197Z"   fill="black" /></g>
  <path opacity="0.1" d="M174.748 178.853V179.65L191.771 180.188V178.853H174.748Z" fill="black"/>
  <path d="M171.894 175.089H188.917V178.852H171.894V175.089Z" fill="url(#paint14_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M188.222 175.435C187.971 176.422 187.971 177.457 188.222 178.445C188.473 177.457 188.473 176.422 188.222 175.435Z"   fill="black" /> <path   d="M186.951 175.435C186.7 176.422 186.7 177.457 186.951 178.445C187.202 177.457 187.202 176.422 186.951 175.435Z"   fill="black" /> <path   d="M186.342 175.435C186.091 176.422 186.091 177.457 186.342 178.445C186.476 177.955 186.54 177.448 186.53 176.94C186.538 176.432 186.474 175.925 186.342 175.435Z"   fill="black" /> <path   d="M182.932 175.435C182.682 176.422 182.682 177.457 182.932 178.445C183.183 177.457 183.183 176.422 182.932 175.435Z"   fill="black" /> <path   d="M182.01 175.435C181.759 176.422 181.759 177.457 182.01 178.445C182.261 177.457 182.261 176.422 182.01 175.435Z"   fill="black" /> <path   d="M178.209 175.435C177.958 176.422 177.958 177.457 178.209 178.445C178.459 177.457 178.459 176.422 178.209 175.435Z"   fill="black" /> <path   d="M177.309 175.435C177.178 175.925 177.115 176.432 177.121 176.94C177.113 177.448 177.176 177.954 177.309 178.445C177.444 177.955 177.507 177.448 177.497 176.94C177.505 176.432 177.442 175.925 177.309 175.435Z"   fill="black" /> <path   d="M175.713 175.435C175.463 176.422 175.463 177.457 175.713 178.445C175.964 177.457 175.964 176.422 175.713 175.435Z"   fill="black" /> <path   d="M178.944 175.435C178.811 175.925 178.747 176.432 178.755 176.94C178.746 177.448 178.809 177.955 178.944 178.445C179.194 177.457 179.194 176.422 178.944 175.435Z"   fill="black" /> <path   d="M185.213 175.435C184.962 176.422 184.962 177.457 185.213 178.445C185.463 177.457 185.463 176.422 185.213 175.435Z"   fill="black" /> <path   d="M180.801 175.435C180.55 176.422 180.55 177.457 180.801 178.445C181.052 177.457 181.052 176.422 180.801 175.435Z"   fill="black" /> <path   d="M180.165 175.435C179.915 176.422 179.915 177.457 180.165 178.445C180.416 177.457 180.416 176.422 180.165 175.435Z"   fill="black" /> <path   d="M173.612 175.435C173.361 176.422 173.361 177.457 173.612 178.445C173.862 177.457 173.862 176.422 173.612 175.435Z"   fill="black" /> <path   d="M172.663 175.435C172.413 176.422 172.413 177.457 172.663 178.445C172.914 177.457 172.914 176.422 172.663 175.435Z"   fill="black" /> <path   d="M174.965 175.435C174.715 176.422 174.715 177.457 174.965 178.445C175.216 177.457 175.216 176.422 174.965 175.435Z"   fill="black" /> <path   d="M183.665 175.435C183.532 175.925 183.469 176.432 183.477 176.94C183.467 177.448 183.53 177.955 183.665 178.445C183.798 177.954 183.861 177.448 183.853 176.94C183.859 176.432 183.796 175.925 183.665 175.435Z"   fill="black" /></g>
  <path opacity="0.1" d="M171.898 175.089V175.89L188.917 176.428V175.089H171.898Z" fill="black"/>
  <path d="M173.32 171.359H190.343V175.122H173.32V171.359Z" fill="url(#paint15_linear_13064_55002)"/>
  <g opacity="0.1"> <path   d="M174.083 174.711C174.335 173.724 174.335 172.689 174.083 171.701C173.832 172.689 173.832 173.724 174.083 174.711Z"   fill="black" /> <path   d="M175.352 174.711C175.485 174.221 175.549 173.714 175.54 173.206C175.551 172.698 175.487 172.191 175.352 171.701C175.101 172.689 175.101 173.724 175.352 174.711Z"   fill="black" /> <path   d="M175.972 174.711C176.224 173.724 176.224 172.689 175.972 171.701C175.837 172.191 175.774 172.698 175.784 173.206C175.776 173.714 175.839 174.221 175.972 174.711Z"   fill="black" /> <path   d="M179.371 174.711C179.623 173.724 179.623 172.689 179.371 171.701C179.12 172.689 179.12 173.724 179.371 174.711Z"   fill="black" /> <path   d="M180.292 174.711C180.543 173.724 180.543 172.689 180.292 171.701C180.04 172.689 180.04 173.724 180.292 174.711Z"   fill="black" /> <path   d="M184.082 174.711C184.334 173.724 184.334 172.689 184.082 171.701C183.831 172.689 183.831 173.724 184.082 174.711Z"   fill="black" /> <path   d="M184.973 174.711C185.104 174.221 185.168 173.714 185.161 173.206C185.169 172.698 185.106 172.192 184.973 171.701C184.838 172.191 184.775 172.698 184.785 173.206C184.777 173.714 184.84 174.221 184.973 174.711Z"   fill="black" /> <path   d="M186.588 174.711C186.84 173.724 186.84 172.689 186.588 171.701C186.337 172.689 186.337 173.724 186.588 174.711Z"   fill="black" /> <path   d="M183.359 174.711C183.492 174.221 183.556 173.714 183.547 173.206C183.558 172.698 183.494 172.191 183.359 171.701C183.226 172.192 183.163 172.698 183.171 173.206C183.165 173.714 183.228 174.221 183.359 174.711Z"   fill="black" /> <path   d="M177.095 174.711C177.346 173.724 177.346 172.689 177.095 171.701C176.843 172.689 176.843 173.724 177.095 174.711Z"   fill="black" /> <path   d="M181.501 174.711C181.752 173.724 181.752 172.689 181.501 171.701C181.249 172.689 181.249 173.724 181.501 174.711Z"   fill="black" /> <path   d="M182.136 174.711C182.388 173.724 182.388 172.689 182.136 171.701C181.885 172.689 181.885 173.724 182.136 174.711Z"   fill="black" /> <path   d="M188.692 174.711C188.944 173.724 188.944 172.689 188.692 171.701C188.441 172.689 188.441 173.724 188.692 174.711Z"   fill="black" /> <path   d="M189.64 174.711C189.773 174.221 189.836 173.714 189.828 173.206C189.838 172.698 189.775 172.191 189.64 171.701C189.388 172.689 189.388 173.724 189.64 174.711Z"   fill="black" /> <path   d="M187.336 174.711C187.588 173.724 187.588 172.689 187.336 171.701C187.085 172.689 187.085 173.724 187.336 174.711Z"   fill="black" /> <path   d="M178.638 174.711C178.769 174.221 178.832 173.714 178.826 173.206C178.836 172.698 178.773 172.191 178.638 171.701C178.504 172.192 178.441 172.698 178.449 173.206C178.443 173.714 178.506 174.221 178.638 174.711Z"   fill="black" /></g>
  <path opacity="0.1" d="M173.32 171.359V172.161L190.343 172.695V171.359H173.32Z" fill="black"/>
  <path d="M210.213 165.399C199.007 167.408 201.969 184.006 213.189 181.993C224.41 179.98 221.438 163.385 210.213 165.399Z" fill="url(#paint16_linear_13064_55002)"/>
  <path opacity="0.1" d="M210.213 165.399C199.007 167.408 201.969 184.006 213.189 181.993C224.41 179.98 221.438 163.385 210.213 165.399Z" fill="black"/>
  <path d="M211.266 165.212C200.587 167.127 203.544 183.725 214.242 181.806C224.94 179.887 221.96 163.293 211.266 165.212Z" fill="url(#paint17_linear_13064_55002)"/>
  <path opacity="0.1" d="M219.526 173.899C219.47 176.853 217.746 179.721 213.987 180.394C205.114 181.986 202.653 168.21 211.519 166.622L211.692 166.592C203.379 168.255 205.761 181.293 214.224 179.762C217.678 179.156 219.342 176.601 219.526 173.899Z" fill="black"/>
  <g opacity="0.1"> <path   d="M211.831 168.341C211.759 168.36 211.697 168.407 211.659 168.471C211.62 168.534 211.608 168.61 211.624 168.683L211.741 169.131C211.014 169.371 210.376 169.824 209.912 170.433C209.872 170.471 209.842 170.518 209.825 170.571C209.809 170.624 209.806 170.68 209.818 170.734C209.827 170.773 209.845 170.81 209.869 170.843C209.894 170.875 209.925 170.902 209.96 170.922C209.995 170.942 210.034 170.954 210.075 170.958C210.115 170.962 210.156 170.957 210.194 170.945C210.233 170.938 210.27 170.922 210.303 170.899C210.335 170.877 210.362 170.847 210.382 170.813C210.76 170.287 211.283 169.883 211.887 169.65L212.681 172.845C211.041 173.639 210.473 174.471 210.751 175.588C211.052 176.796 212.279 177.398 213.716 177.093L213.938 177.981C213.956 178.053 214.002 178.116 214.065 178.154C214.128 178.193 214.205 178.205 214.277 178.188C214.349 178.17 214.412 178.123 214.45 178.059C214.489 177.995 214.501 177.919 214.484 177.846L214.258 176.947C215.194 176.637 215.999 176.024 216.546 175.204C216.587 175.157 216.612 175.098 216.618 175.035C216.624 174.973 216.609 174.91 216.577 174.856C216.545 174.803 216.497 174.76 216.439 174.736C216.381 174.711 216.317 174.705 216.256 174.719C216.218 174.727 216.182 174.743 216.15 174.765C216.118 174.788 216.092 174.817 216.072 174.851C215.616 175.588 214.924 176.148 214.108 176.439L213.299 173.195C214.913 172.393 215.462 171.588 215.18 170.452C214.898 169.315 213.675 168.672 212.271 168.988L212.166 168.552C212.148 168.48 212.103 168.418 212.041 168.379C211.978 168.34 211.903 168.326 211.831 168.341ZM213.159 172.604L212.384 169.507C213.513 169.255 214.39 169.733 214.593 170.553C214.796 171.374 214.54 171.885 213.159 172.604ZM212.832 173.424L213.618 176.57C212.49 176.83 211.568 176.356 211.361 175.49C211.157 174.704 211.436 174.124 212.832 173.424Z"   fill="black" /></g>
  <defs> <linearGradient   id="paint0_linear_13064_55002"   x1="129.38"   y1="149.015"   x2="122.084"   y2="149.015"   gradientUnits="userSpaceOnUse" >   <stop offset="0.348958" stopColor="#684AA7" />    <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_13064_55002"
      x1="106.648"
      y1="139.869"
      x2="99.3525"
      y2="139.869"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_13064_55002"
      x1="152.058"
      y1="154.462"
      x2="144.763"
      y2="154.462"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_13064_55002"
      x1="83.9202"
      y1="127.687"
      x2="76.6244"
      y2="127.687"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_13064_55002"
      x1="177.734"
      y1="88.1733"
      x2="143.541"
      y2="88.1733"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint5_linear_13064_55002"
      x1="180.631"
      y1="63.4726"
      x2="145.328"
      y2="63.4726"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint6_linear_13064_55002"
      x1="136.167"
      y1="55.6325"
      x2="134.16"
      y2="55.6325"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint7_linear_13064_55002"
      x1="201.218"
      y1="176.643"
      x2="194.019"
      y2="176.643"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint8_linear_13064_55002"
      x1="202.381"
      y1="172.88"
      x2="195.182"
      y2="172.88"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint9_linear_13064_55002"
      x1="199.75"
      y1="165.388"
      x2="192.551"
      y2="165.388"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint10_linear_13064_55002"
      x1="200.18"
      y1="161.629"
      x2="192.981"
      y2="161.629"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint11_linear_13064_55002"
      x1="201.218"
      y1="157.866"
      x2="194.019"
      y2="157.866"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint12_linear_13064_55002"
      x1="201.218"
      y1="169.151"
      x2="194.019"
      y2="169.151"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint13_linear_13064_55002"
      x1="184.195"
      y1="180.734"
      x2="176.996"
      y2="180.734"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint14_linear_13064_55002"
      x1="181.341"
      y1="176.97"
      x2="174.143"
      y2="176.97"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint15_linear_13064_55002"
      x1="182.767"
      y1="173.241"
      x2="175.569"
      y2="173.241"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint16_linear_13064_55002"
      x1="212.646"
      y1="173.696"
      x2="205.407"
      y2="173.696"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
    <linearGradient
      id="paint17_linear_13064_55002"
      x1="213.656"
      y1="173.509"
      x2="206.744"
      y2="173.509"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.348958" stopColor="#684AA7" />
      <stop offset={1} stopColor="#E15F7A" />
    </linearGradient>
  </defs>
        </svg>

        </div>
       </div>
</div>

<div className=' '>
  <h2 className="">AlmaX Placement Programme Status Board</h2> <br />
  <div className="row">
    <div className="col-md-3 bg-white">
      <div className=''>
        <h3 style={{ background: "-webkit-linear-gradient(top, rgb(104, 74, 167), rgb(225, 95, 122)) text",WebkitTextFillColor: "transparent" }}>
          450
        </h3>
        <p className="mt-1 text-sm text-gray-600">Students placed</p>
      </div>
    </div>

    <div className="col-md-3 bg-white ">
      <h3 style={{
          background:
            "-webkit-linear-gradient(top, rgb(104, 74, 167), rgb(225, 95, 122)) text",
          WebkitTextFillColor: "transparent"
        }}
      >
        40
      </h3>
      <p className="mt-1 text-sm text-gray-600">Highest LPA</p>
    </div>

    <div className="col-md-3 bg-white ">
      <h3
      
        style={{
          background:
            "-webkit-linear-gradient(top, rgb(104, 74, 167), rgb(225, 95, 122)) text",
          WebkitTextFillColor: "transparent"
        }}
      >
        8 LPA
      </h3>
      <p className="mt-1 text-sm text-gray-600">Median salary</p>
    </div>

    <div className="col-md-3 bg-white ">
      <h3
      
        style={{
          background:
            "-webkit-linear-gradient(top, rgb(104, 74, 167), rgb(225, 95, 122)) text",
          WebkitTextFillColor: "transparent"
        }}
      >
        500+
      </h3>
      <p className="mt-1 text-sm text-gray-600">Hiring partners</p>
    </div>
  </div>
</div> 
 */}

</div>

<div className='mt-10'>


</div>

   
    </>
  )
}
