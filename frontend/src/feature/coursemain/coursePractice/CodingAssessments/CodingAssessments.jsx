import React from 'react';
import { CodeBracketIcon, ClockIcon, TrophyIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CodingAssessments() {
  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      points: 100,
      completed: true,
      time: "15 mins"
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Medium",
      points: 200,
      completed: false,
      time: "25 mins"
    },
    {
      id: 3,
      title: "Binary Tree Zigzag Level Order",
      difficulty: "Hard",
      points: 350,
      completed: false,
      time: "45 mins"
    },
    {
      id: 4,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      points: 250,
      completed: false,
      time: "30 mins"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Coding Assessments</h1>
            <p className="text-gray-600 mt-2">Sharpen your skills with real-world coding challenges</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <TrophyIcon className="h-6 w-6 text-yellow-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Your Score</p>
                <p className="font-bold text-gray-800">1,250</p>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Beginner's Track</h3>
                  <p className="text-gray-500 text-sm">5 challenges • 2 hours</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Start with fundamental problems to build your coding foundation</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Start Assessment
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Algorithm Mastery</h3>
                  <p className="text-gray-500 text-sm">8 challenges • 3 hours</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Master essential algorithms and data structures</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                Start Assessment
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CodeBracketIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">System Design</h3>
                  <p className="text-gray-500 text-sm">3 challenges • 4 hours</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Design scalable systems and architectures</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                Start Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Challenges List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Available Challenges</h2>
            <p className="text-gray-500">Practice individual problems to improve specific skills</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {challenge.completed ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-4" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-4"></div>
                    )}
                    <div>
                      <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                      <div className="flex items-center mt-1 space-x-4">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          challenge.difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-800' 
                            : challenge.difficulty === 'Medium' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {challenge.difficulty}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {challenge.time}
                        </span>
                        <span className="text-sm font-medium text-gray-700">{challenge.points} pts</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    {challenge.completed ? 'Review' : 'Solve'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="flex items-start pb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <ArrowPathIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">You completed "Valid Parentheses" challenge</p>
                <p className="text-sm text-gray-500 mt-1">2 days ago • 150 points earned</p>
              </div>
            </div>
            <div className="flex items-start pt-4">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <TrophyIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">You reached the top 10% in Algorithm Mastery</p>
                <p className="text-sm text-gray-500 mt-1">1 week ago • 500 bonus points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}