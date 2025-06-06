import React from 'react'
import image1 from '../../../assets/icons/product-main.png'
import { FaArrowRight } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function CourseProject() {
  return (
    <div className='bg-gray-100 p-5'>
      <div className='bg-white p-7 block md:h-[300px] rounded-lg'>
        <div className='w-full md:float-right md:w-1/3 md:pl-5'>
          <img src={image1} alt="" height={'250px'} />
        </div>
        <h1 className="text-2xl font-bold py-2">Projects</h1>
        <div class="my-1 text-base font-normal mb-4">
          Augment your fundamentals and get hands on with real world problems by completing AlmaBetter’s real world capstone projects.
        </div>
      </div>
      <div className='block md:flex md:my-5'>
        <div className='flex'>
        <div className='bg-white px-3 text-xs md:text-lg py-2 flex text-red-500 rounded-sm mr-3'>New-Projects <div className='mx-2 px-2 bg-red-100 rounded-full hidden md:flex'>31</div></div>
        <div className='bg-white px-3 text-xs md:text-lg py-2 flex text-red-500 rounded-sm mr-3'>Submitted <div className='hidden md:flex mx-2 px-2 bg-red-100 rounded-full'>0</div></div>
        </div>
        <div className='flex'>
        <select class="px-4 py-2 rounded text-blue-c9 border-r-8 border-solid border-transparent md:flex-grow-0 flex-grow w-32 mr-3" placeholder="Skill" id="course-lms-select">
          <option value="default">Skill</option><option value="Python">Python</option><option value="SQL">SQL</option><option value="Tableau">Tableau</option><option value="Excel">Excel</option>
          <option value="Integers, Floats &amp; Boolean">Integers, Floats &amp; Boolean</option><option value="Strings">Strings</option><option value="List">List</option><option value="Tuples">Tuples</option>
          <option value="Sets">Sets</option><option value="Dictionaries">Dictionaries</option><option value="Conditional">Conditional</option><option value="Loops">Loops</option><option value="Function">Function</option>
          <option value="Numpy">Numpy</option><option value="Pandas">Pandas</option><option value="Seaborn">Seaborn</option><option value="Matplotlib">Matplotlib</option><option value="Data Wrangling">Data Wrangling</option>
          <option value="Data Analysis">Data Analysis</option><option value="Probability">Probability</option><option value="Calculus">Calculus</option><option value="Statistics">Statistics</option><option value="OOPS">OOPS</option>
          <option value="Time &amp; Space Complexity">Time &amp; Space Complexity</option><option value="Machine Learning">Machine Learning</option><option value="Deep Learning">Deep Learning</option><option value="EDA">EDA</option>
          <option value="Time Series">Time Series</option><option value="Hypothesis Testing">Hypothesis Testing</option><option value="Classification">Classification</option><option value="Confusion Matrix">Confusion Matrix</option>
          <option value="Collaborative Filtering">Collaborative Filtering</option><option value="Recommendation Engine">Recommendation Engine</option><option value="Sklearn">Sklearn</option><option value="NLTK">NLTK</option><option value="spaCy">spaCy</option>
          <option value="Gensim">Gensim</option><option value="Tensorflow">Tensorflow</option><option value="Keras">Keras</option><option value="PyTorch">PyTorch</option><option value="AWS">AWS</option><option value="Heroku">Heroku</option><option value="Flask">Flask</option>
          <option value="Azure">Azure</option><option value="GCP">GCP</option><option value="MlOps">MlOps</option><option value="PySpark">PySpark</option><option value="Hadoop">Hadoop</option><option value="Hive">Hive</option><option value="Clustering">Clustering</option>
          <option value="Unsupervised ML">Unsupervised ML</option><option value="Meta">Meta</option><option value="Microsoft">Microsoft</option><option value="Cisco">Cisco</option><option value="Cognizant">Cognizant</option><option value="Accenture">Accenture</option>
          <option value="Capgemini">Capgemini</option><option value="HCL">HCL</option><option value="IBM">IBM</option><option value="Adobe">Adobe</option><option value="Oracle">Oracle</option><option value="AlmaBetter Logo">AlmaBetter Logo</option><option value="Accenture - coding">Accenture - coding</option>
          <option value="Company - AirBnb">Company - AirBnb</option><option value="Company - Airtel">Company - Airtel</option><option value="Company - Amazon">Company - Amazon</option><option value="Company - Dropbox">Company - Dropbox</option><option value="Company - Factwise">Company - Factwise</option>
          <option value="Company - HCLTech">Company - HCLTech</option><option value="Company - HSBC">Company - HSBC</option><option value="Company - IndiaMART">Company - IndiaMART</option><option value="Company - Paytm">Company - Paytm</option>
          <option value="Company - Seven Square Technosoft">Company - Seven Square Technosoft</option><option value="Company - Uber">Company - Uber</option><option value="Company - Swipe">Company - Swipe</option><option value="MLOps">MLOps</option><option value="Deployment">Deployment</option>
        </select>
        <select class="px-4 py-2 rounded text-blue-c9 border-r-8 border-solid border-transparent md:flex-grow-0 flex-grow w-32" placeholder="Module" id="course-lms-select">
          <option value="default">Module</option><option value="Machine Learning Projects - Classification">Machine Learning Projects - Classification</option><option value="Numerical Programming in Python">Numerical Programming in Python</option>
          <option value="Machine Learning Projects - Regression">Machine Learning Projects - Regression</option><option value="Introduction to Machine Learning">Introduction to Machine Learning</option>
        </select>
        </div>
      </div>
      <h2 className='text-xl my-3'>Module - Introduction to Machine Learning</h2>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/images_a77d264589.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Myntra Online Retail Customer Segmentation</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Zomato_Restaurant_Clustering_and_Sentiment_Analysis_3d3d83de96.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Zomato Restaurant Clustering</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://images.seeklogo.com/logo-png/50/2/creative-commons-logo-png_seeklogo-502330.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Company Classification</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/png_transparent_kindle_fire_hd_amazon_com_e_readers_android_kindle_store_amazon_text_logo_sign_thumbnail_921c13715c.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Kindle Book Recommendation System</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Netflix_Movies_and_TV_Shows_Clustering_97bf1a9412.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Netflix Movies and TV Shows Clustering</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Topic_Modeling_on_News_Articles_56c32e6df6.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Topic Modeling on News Articles</p>
            <p className="text-blue-900">Unsupervised ML</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
      </div>
      <h2 className='text-xl my-3'>Module - Machine Learning Projects - Regression</h2>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/glassdor_b1c8f638c7.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Glassdoor Jobs Salary Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/rossmann_vector_logo_download_free_11574046603gm6htbk4qp_889ba2f26c.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Rossmann Retail Sales Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Appliances_Energy_Prediction_e578b1bd5d.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Appliances Energy Prediction </p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Yulu_Brand_Identity_Gopigraphy_Main_Logo_28c2a06e76.webp" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Yulu Bike Sharing Demand Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/News_Popularity_Prediction_e74fc0a86e.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">News Popularity Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://i.fbcd.co/products/resized/resized-750-500/nt-round-logo-designs-2-52e1682e97e5b964714957533fa1390273b097d58274195a8f862a8c48c13667.jpg" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">NYC Taxi Trip Time Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://seeklogo.com/images/S/sg-logo-CA28AC3158-seeklogo.com.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">SGEMM GPU Kernel Perfromance</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Transport_Demand_Prediction_60f3b89ab5.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Transport DEmand Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Ted_Talk_Views_Prediction_a43e267dbf.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">TED Talk Views Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Yes_Bank_Stock_Closing_Price_Prediction_4e556f85fc.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">YES Bank Stock Closing Price Prediction</p>
            <p className="text-blue-900">Regression</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
      </div>
      <h2 className='text-xl my-3'>Module - Numerical Programming in Python</h2>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Airbnb_8f42acf952.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">AirBnb Booking Analysis</p>
            <p className="text-blue-900">EDA</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/png_transparent_model_united_nations_india_united_nations_general_assembly_flag_of_the_united_nations_india_text_logo_india_0723ab63f3.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">United Nation Global Terrorism Analysis</p>
            <p className="text-blue-900">EDA</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Booking_Logo_14bc392139.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Booking.com - Hotel Booking Analysis</p>
            <p className="text-blue-900">EDA</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Play_Store_App_Review_Analysis_41d6b20129.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Play Store App Review Analysis</p>
            <p className="text-blue-900">EDA</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/World_Bank_Global_Education_Analysis_382e2c51bf.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">World Bank Global Education Analysis</p>
            <p className="text-blue-900">EDA</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
      </div>
      <h2 className='text-xl my-3'>Module - Machine Learning Projects - Classification</h2>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Cardiovascular_Risk_Prediction_0b3dca43ec.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Cardiovascular Risk Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Indi_Go_Logo_b6e3eef040.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">IndiGo Airline Passesnger Referral Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Credit_Card_Default_Prediction_848a34b423.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Credit Card Default Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Bank_Marketing_Effectiveness_Prediction_c32ef89f74.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Bank Marketing Effectiveness Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Coronavirus_Tweet_Sentiment_Analysis_3bd68a21d6.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Coronavirus Tweet Sentiment Analysis</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/inspire_complete_logo_full_color_version_rgb_12in_300ppi_91ebc6cf0e.webp" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">InspireDirect Email Campaign Effectiveness Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Mobile_Price_Range_Prediction_df12bf79e7.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Mobile Price Range Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Android_Authenticity_Prediction_439cad1606.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Android Authenticity Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Company_Bankruptcy_Prediction_c5a99d95b8.png" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Company Bankruptcy Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
        <div className="relative text-center bg-white p-2 rounded-sm flex flex-col">
          <div className="flex px-4 flex-col gap-2 text-center">
            <div className="flex justify-center h-28 relative">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/download_603c156d51.jpeg" className="w-28 h-28 object-contain rounded-full" />
            </div><p className="text-smallHeading font-semibold">Classification - Max Life Health Insurance Cross Sell Prediction</p>
            <p className="text-blue-900">Classification</p>
          </div>
          <div className="flex justify-between px-4 mt-6 mb-2">
            <div className="text-red-500 cursor-pointer flex items-center"><span>Start now </span><FaArrowRight /></div>
            <div className="flex gap-1 items-center justify-between text-red-500  px-2 py-1 rounded-full cursor-pointer bg-red-100"><IoShareSocialOutline /></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
