import React, { useState } from 'react';

const Requests = () => {
  // Sample data for topics and the number of requests
  const initialTopics = [
    { name: 'React Basics', requests: 50 },
    { name: 'Advanced JavaScript', requests: 100 },
    { name: 'CSS Flexbox & Grid', requests: 80 },
    { name: 'Backend with Node.js', requests: 70 },
    { name: 'Database Design', requests: 90 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [topics, setTopics] = useState(initialTopics);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter topics based on search input
  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort topics based on the number of requests (highest first)
  const sortedTopics = filteredTopics.sort((a, b) => b.requests - a.requests);

  return (
    <div className="p-8 mx-24 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Students Requests</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a topic..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Topics Cards */}
      <div className="grid grid-cols-4 gap-6">
        {sortedTopics.map((topic, index) => (
          <div
            key={index}
            className="relative p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-purple-100 transition-all duration-300"
          >
            {/* Topic Name */}
            <h3 className="text-xl font-semibold text-gray-800">{topic.name}</h3>

            {/* Hover Effect: Number of Students Requested */}
            <div className="absolute inset-0 bg-purple-500 bg-opacity-0 hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                {topic.requests} students requested
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
