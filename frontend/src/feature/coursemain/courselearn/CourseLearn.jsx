import { IoShareSocialOutline } from "react-icons/io5";

export default function CourseLearn() {
  return (
    <div className="bg-gray-100 p-3">
      <div className="flex ">
        <div className="bg-white w-2/3 p-4 rounded-md">
          <h1 className="text-3xl font-semibold">Full Stack Data Science</h1>
          <div className="float-right p-2 bg-red-100 text-red-500 mt-[-40px] rounded-full"> <IoShareSocialOutline /> </div>
          <p className="text-gray-600 font-bold">6 months - 6 modules</p>
          <p className="text-gray-500 my-3">Data science is an essential part of many industries today, given the massive amounts of data that are produced, and is one of the most popular topics in IT circles. Its popularity has grown over the years, and companies have started implementing data science techniques to grow their business and increase </p>
          <p className="text-gray-500 ">Continue from where you left,</p>
          <div className="flex justify-between items-center">
            <div className="w-1/3"><p className="text-gray-500">Module</p><p>Applied Statistics</p></div>
            <div className="w-1/3"><p className="text-gray-500">Lesson</p><p>Calculas for ML</p></div>
            <button className="w-1/3 bg-red-600 text-white rounded-md py-3">Resume Learning</button>
          </div>
        </div>
        <div className="bg-white w-1/3 p-4 rounded-md ml-3">
          <img src="https://cdn-icons-png.freepik.com/512/625/625393.png" alt="" className="w-16 mt-[-25px]" />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/011/459/878/small_2x/set-of-circle-percentage-diagrams-for-infographics-free-png.png" alt="" className="w-48 mx-auto" />
          <p className="text-center text-gray-500">Lesson: <span className="text-black text-lg">80/98</span></p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mt-5">Course Content</h1>
        <div className="bg-white p-4 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-500 text-lg">Module 1</p>
              <p className="text-lg">Introduction to Computer Programming</p>
              <p className="text-gray-500 text-sm">17 Lesson . 4 weeks . 5 credits</p>
            </div>
            <button className="px-5 bg-red-600 text-white rounded-md py-3">Start Learning</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-500 text-lg">Module 2</p>
              <p className="text-lg">Numerical Programming in Python</p>
              <p className="text-gray-500 text-sm">9 Lesson . 4 weeks . 5 credits</p>
            </div>
            <button className="px-5 bg-red-600 text-white rounded-md py-3">Start Learning</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-500 text-lg">Module 3</p>
              <p className="text-lg">Relational Database</p>
              <p className="text-gray-500 text-sm">7 Lesson . 4 weeks . 5 credits</p>
            </div>
            <button className="px-5 bg-red-600 text-white rounded-md py-3">Start Learning</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-500 text-lg">Module 4</p>
              <p className="text-lg">Data Vizualization Tools</p>
              <p className="text-gray-500 text-sm">7 Lesson . 4 weeks . 5 credits</p>
            </div>
            <button className="px-5 bg-red-600 text-white rounded-md py-3">Start Learning</button>
          </div>
        </div>
      </div>
  
    </div>
  )
}
