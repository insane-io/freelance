import React from 'react'

const Admin = () => {

  // Example data for candidates
  const candidates = [
    { name: 'John Doe', email: 'john@example.com', status: 'Verified', appliedDate: '2023-09-01' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending', appliedDate: '2023-09-05' },
    { name: 'Alice Johnson', email: 'alice@example.com', status: 'Verified', appliedDate: '2023-09-10' },
    { name: 'Mark Wilson', email: 'mark@example.com', status: 'Pending', appliedDate: '2023-09-12' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Admin Panel Title */}
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      {/* Candidate List */}
      <div className="w-full max-w-4xl">
        {candidates.map((candidate, index) => (
          <div key={index} className="flex justify-between items-center bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">{candidate.name}</span>
              <span className="text-gray-500">{candidate.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`font-medium ${candidate.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}`}>
                {candidate.status}
              </span>
              <span className="text-gray-400">{candidate.appliedDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
