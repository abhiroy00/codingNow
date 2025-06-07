import { CodeBracketIcon, ClockIcon, TrophyIcon, ArrowRightIcon, ChartBarIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'

export default function AlgorithmMasteryTrack() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-purple-100 rounded-xl">
          <CodeBracketIcon className="h-8 w-8 text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Algorithm Mastery</h1>
          <p className="text-gray-600">Master essential algorithms and data structures</p>
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
            <p className="font-semibold text-gray-800">8 problems</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
          <div className="p-2 bg-orange-100 rounded-full">
            <ClockIcon className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Time</p>
            <p className="font-semibold text-gray-800">3 hours</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
          <div className="p-2 bg-blue-100 rounded-full">
            <ChartBarIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Difficulty</p>
            <p className="font-semibold text-gray-800">Intermediate</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">About This Track</h2>
        <p className="text-gray-600 leading-relaxed">
          Dive deep into the world of algorithms and data structures. This track covers essential 
          computer science concepts including sorting, searching, graph algorithms, and complex 
          data structures to help you solve problems efficiently and write optimized code.
        </p>
      </div>

      {/* Challenges List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Challenges</h2>
        <div className="space-y-3">
          {[
            { id: 1, title: "Binary Search Mastery", difficulty: "Medium" },
            { id: 2, title: "Sorting Algorithms", difficulty: "Medium" },
            { id: 3, title: "Graph Traversal", difficulty: "Hard" },
            { id: 4, title: "Dynamic Programming", difficulty: "Hard" },
            { id: 5, title: "Tree Algorithms", difficulty: "Medium" },
            { id: 6, title: "Hash Tables", difficulty: "Medium" },
            { id: 7, title: "Heap Operations", difficulty: "Hard" },
            { id: 8, title: "Advanced Recursion", difficulty: "Hard" },
          ].map((challenge) => (
            <div key={challenge.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 font-medium rounded-full">
                  {challenge.id}
                </div>
                <span className="font-medium text-gray-800">{challenge.title}</span>
              </div>
              <div className={`text-sm px-2 py-1 rounded-full ${
                challenge.difficulty === "Hard" 
                  ? "bg-red-100 text-red-600" 
                  : challenge.difficulty === "Medium" 
                    ? "bg-yellow-100 text-yellow-600" 
                    : "bg-green-100 text-green-600"
              }`}>
                {challenge.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-md">
        Start Mastering Algorithms
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}