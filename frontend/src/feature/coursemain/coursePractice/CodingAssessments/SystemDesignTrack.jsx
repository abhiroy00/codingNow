import { ServerStackIcon, ClockIcon, TrophyIcon, ArrowRightIcon, CpuChipIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

export default function SystemDesignTrack() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl shadow-lg border border-gray-100">
      {/* Header with Architecture Icon */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-amber-100 rounded-xl">
          <ServerStackIcon className="h-8 w-8 text-amber-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">System Design</h1>
          <p className="text-gray-600">Design scalable systems and architectures</p>
        </div>
      </div>

      {/* Stats Cards with System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="p-2 bg-blue-100 rounded-full">
            <TrophyIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Design Challenges</p>
            <p className="font-semibold text-gray-800">3 complex problems</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
          <div className="p-2 bg-amber-100 rounded-full">
            <ClockIcon className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Time</p>
            <p className="font-semibold text-gray-800">4 hours</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
          <div className="p-2 bg-purple-100 rounded-full">
            <ArrowsPointingOutIcon className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Scalability Focus</p>
            <p className="font-semibold text-gray-800">High Availability</p>
          </div>
        </div>
      </div>

      {/* Architectural Description */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Architecture Focus Areas</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Master the art of designing robust, scalable systems. This track covers distributed systems, 
          microservices architecture, database design, caching strategies, and tradeoffs in system design.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center gap-2">
            <CpuChipIcon className="h-5 w-5 text-amber-500" />
            <span className="text-sm text-gray-700">Load Balancing</span>
          </div>
          <div className="flex items-center gap-2">
            <ServerStackIcon className="h-5 w-5 text-amber-500" />
            <span className="text-sm text-gray-700">Database Sharding</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowsPointingOutIcon className="h-5 w-5 text-amber-500" />
            <span className="text-sm text-gray-700">Horizontal Scaling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 flex items-center justify-center text-amber-500">
              <span className="text-xs font-bold">CDN</span>
            </div>
            <span className="text-sm text-gray-700">Content Delivery</span>
          </div>
        </div>
      </div>

      {/* Design Challenges */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Design Challenges</h2>
        <div className="space-y-4">
          {[
            { 
              id: 1, 
              title: "Design a URL Shortener", 
              complexity: "Advanced",
              focus: "Database design, caching"
            },
            { 
              id: 2, 
              title: "Build a Distributed Chat System", 
              complexity: "Expert",
              focus: "Real-time systems, WebSockets"
            },
            { 
              id: 3, 
              title: "Architect a Social Network", 
              complexity: "Advanced",
              focus: "Graph systems, news feed"
            },
          ].map((challenge) => (
            <div key={challenge.id} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 bg-amber-100 text-amber-600 font-medium rounded-full">
                    {challenge.id}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{challenge.focus}</p>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  challenge.complexity === "Expert" 
                    ? "bg-red-100 text-red-600" 
                    : "bg-amber-100 text-amber-600"
                }`}>
                  {challenge.complexity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-md">
        Start Designing Systems
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}