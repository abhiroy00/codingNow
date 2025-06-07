import { MagnifyingGlassIcon, BriefcaseIcon, MapPinIcon, CurrencyDollarIcon, StarIcon, BuildingOfficeIcon, BookmarkIcon, BellIcon } from '@heroicons/react/24/outline'
import { StarIcon as SolidStarIcon, BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/24/solid'

const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Solutions Inc.",
      location: "Bangalore, Karnataka",
      salary: "₹12L - ₹18L PA",
      experience: "4-7 years",
      skills: ["React", "TypeScript", "Redux", "Node.js"],
      posted: "2 days ago",
      featured: true,
      saved: false
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Digital Innovations",
      location: "Remote",
      salary: "₹10L - ₹15L PA",
      experience: "3-5 years",
      skills: ["JavaScript", "Python", "Django", "AWS"],
      posted: "1 week ago",
      featured: false,
      saved: true
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Minds",
      location: "Mumbai, Maharashtra",
      salary: "₹8L - ₹12L PA",
      experience: "2-4 years",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
      posted: "3 days ago",
      featured: true,
      saved: false
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Data Systems Ltd.",
      location: "Hyderabad, Telangana",
      salary: "₹9L - ₹14L PA",
      experience: "3-6 years",
      skills: ["Java", "Spring Boot", "Microservices", "SQL"],
      posted: "5 days ago",
      featured: false,
      saved: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-600">JobConnect</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Companies</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Salaries</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Career Advice</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-blue-600">
                <BellIcon className="h-6 w-6" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Post Job
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Search */}
      <div className=" py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-6">Find your dream job today</h2>
          <div className="bg-white rounded-lg shadow-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Job title, skills"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Location"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                </div>
                <select className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Experience</option>
                  <option>Fresher</option>
                  <option>0-2 years</option>
                  <option>2-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-medium">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-medium text-lg mb-4">Filters</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map((type) => (
                    <div key={type} className="flex items-center">
                      <input id={`type-${type}`} type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                <div className="space-y-2">
                  {['0-3 LPA', '3-6 LPA', '6-10 LPA', '10-15 LPA', '15+ LPA'].map((range) => (
                    <div key={range} className="flex items-center">
                      <input id={`salary-${range}`} type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor={`salary-${range}`} className="ml-2 text-sm text-gray-700">{range}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Skills</h4>
                <div className="space-y-2">
                  {['React', 'JavaScript', 'Python', 'Java', 'AWS', 'Node.js', 'Angular', 'SQL'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <input id={`skill-${skill}`} type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor={`skill-${skill}`} className="ml-2 text-sm text-gray-700">{skill}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Latest Job Openings</h2>
              <div className="text-sm text-gray-500">1,234 jobs found</div>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${job.featured ? 'border-blue-500' : 'border-transparent'} hover:shadow-md transition-shadow`}>
                  <div className="flex justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="flex flex-wrap items-center mt-2 space-x-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <BriefcaseIcon className="h-4 w-4 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <button className="text-gray-400 hover:text-yellow-500">
                        {job.saved ? (
                          <SolidBookmarkIcon className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <BookmarkIcon className="h-5 w-5" />
                        )}
                      </button>
                      <span className="text-xs text-gray-400">{job.posted}</span>
                      {job.featured && (
                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          <SolidStarIcon className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      )}
                      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm">
                <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-blue-600 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default JobBoard