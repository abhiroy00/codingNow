import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign, FaUserAlt, FaShareAlt } from 'react-icons/fa';
import { useGetJobPostsQuery } from './jobBoardApi';

export default function Jobboard() {
  const { data: jobPosts, isLoading, isError } = useGetJobPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="p-6">
      <h1 className="text-black font-bold text-center bg-none text-3xl mb-5">Job Openings</h1>

      {jobPosts?.map((job) => (
        <div key={job.id} className="bg-white rounded-md shadow-md p-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="company-logo h-16 w-16 bg-red-600 rounded-md">
              <img src={job.company_logo} alt="Company Logo" className="h-full w-full rounded-md" />
            </div>
            <div>
              <h4 className="font-bold text-xl">{job.job_title}</h4>
              <p className="text-gray-500">{job.company_name}</p>
            </div>
          </div>

          {/* Job Details Section */}
          <div className="flex gap-10 mb-1 mt-2">
            <div className="experience flex items-center gap-2">
              <FaUserAlt className="text-gray-600" />
              <p className="text-gray-700">{job.year_of_experience} years</p>
            </div>
            <div className="joining-date flex items-center gap-2">
              <FaBriefcase className="text-gray-600" />
              <p className="text-gray-700">Joining by {job.joining_date}</p>
            </div>
            <div className="package flex items-center gap-2">
              <FaDollarSign className="text-gray-600" />
              <p className="text-gray-700">${job.packages}</p>
            </div>
            <div className="positions flex items-center gap-2">
              <FaBriefcase className="text-gray-600" />
              <p className="text-gray-700">{job.number_of_positions} positions</p>
            </div>
          </div>

          {/* Location and Skills Section */}
          <div className="mb-1 mt-3">
            <div className="location flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <p className="text-gray-700">{job.location}</p>
            </div>
            <div className="skills flex items-center gap-3 mt-2">
              <p className="text-gray-700">Skills:</p>
              {job.skills.map((skill, index) => (
                <button key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  {skill.name}
                </button>
              ))}
            </div>
          </div>

          {/* Posted Info and Actions Section */}
          <div className="flex justify-between items-center">
            <div className="posted-info text-gray-500">
              <p>Posted by: User {job.posted_by}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md">Apply Now</button>
              <FaShareAlt className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}