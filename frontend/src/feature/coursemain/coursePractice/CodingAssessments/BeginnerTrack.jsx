import { AcademicCapIcon, ClockIcon, TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function BeginnerTrack() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 rounded-xl">
          <AcademicCapIcon className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Beginner's Track</h1>
          <p className="text-gray-600">Start your coding journey with these foundational challenges</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
          <div className="p-2 bg-green-100 rounded-full">
            <TrophyIcon className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Challenges</p>
            <p className="font-semibold text-gray-800">5 problems</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
          <div className="p-2 bg-purple-100 rounded-full">
            <ClockIcon className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Time</p>
            <p className="font-semibold text-gray-800">2 hours</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">About This Track</h2>
        <p className="text-gray-600 leading-relaxed">
          Start with fundamental problems to build your coding foundation. This track introduces 
          basic programming concepts, problem-solving techniques, and algorithmic thinking 
          through carefully curated challenges perfect for beginners.
        </p>
      </div>

      {/* Challenges List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Challenges</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-600 font-medium rounded-full">
                  {item}
                </div>
                <span className="font-medium text-gray-800">Challenge {item}</span>
              </div>
              <div className="text-sm text-gray-500">Easy</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md">
        Start Learning
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}