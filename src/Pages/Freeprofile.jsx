import React from 'react';
import { FaStar } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";

const Freeprofile = () => {
    return (
        <div className="mt-24 flex items-center justify-center py-8">
            <div className="relative bg-[#F0F0F0] w-full rounded-lg shadow-md mx-16 p-6 pt-16">
                {/* Profile Image */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white">
                        {/* Replace with actual image */}
                        <img
                            src="/path-to-logo.png"
                            alt="Profile Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Contact Button */}
                <button className="absolute top-4 right-4 bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600">
                    Contact Me
                </button>

                {/* Content Below Image */}
                <div className="flex flex-col items-center mt-12">
                    {/* Name */}
                    <h2 className="text-2xl font-semibold mt-1">Tushar Yadav</h2>

                    {/* Star Ratings */}
                    <div className="flex items-center mt-2">
                        <div className="flex items-center">
                            <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                            <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                            <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                            <span className="text-gray-300"><FaStar className="size-8" color="#D1D5DB" /></span>
                            <span className="text-gray-300"><FaStar className="size-8" color="#D1D5DB" /></span>
                        </div>
                        <span className="ml-2 text-2xl font-bold text-gray-600">3</span>

                        {/* Reviews icon */}
                        <BiSolidCommentDetail className='ml-8 size-8 mr-2' color="#A855F7" />89
                    </div>

                    {/* Job Title */}
                    <div className="text-center mt-4">
                        <h3 className="text-6xl font-bold">Graphic Designer | Illustrator</h3>
                    </div>

                    <div className=''>
                        <p className='text-[#848484] text-l mt-12 px-12 pr-96'>
                            Hello! I'm a passionate Frontend Developer with a keen interest in building user-friendly and
                            visually appealing web applications. With extensive experience in React, I have contributed
                            to numerous personal and team projects, focusing on delivering high-quality code and intuitive user experiences.
                            My journey in web development has been marked by active participation in hackathons, where
                            I have excelled at developing innovative solutions under tight deadlines.
                        </p>
                    </div>

                    <div className="mt-10 w-full">
                        <h3 className="text-5xl font-bold mb-4">My Showcase</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Showcase Items */}
                            {/* Item 1 */}
                            <div className="relative bg-gray-300 h-80 rounded-md overflow-hidden group">
                                <img
                                    src="/path-to-showcase1.jpg"
                                    alt="Showcase 1"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-center text-lg font-semibold">Project 1</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="relative bg-gray-300 h-80 rounded-md overflow-hidden group">
                                <img
                                    src="/path-to-showcase2.jpg"
                                    alt="Showcase 2"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-center text-lg font-semibold">Project 2</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="relative bg-gray-300 h-80 rounded-md overflow-hidden group">
                                <img
                                    src="/path-to-showcase3.jpg"
                                    alt="Showcase 3"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-center text-lg font-semibold">Project 3</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-10 w-full ">
                        <h3 className="text-5xl font-bold mb-4">Skills</h3>
                        <div className="flex space-x-4">
                            <button className="bg-purple-200 text-black py-2 px-4 rounded-lg">JavaScript</button>
                            <button className="bg-purple-200 text-black py-2 px-4 rounded-lg">React</button>
                            <button className="bg-purple-200 text-black py-2 px-4 rounded-lg">CSS</button>
                            <button className="bg-purple-200 text-black py-2 px-4 rounded-lg">HTML</button>
                            <button className="bg-purple-200 text-black py-2 px-4 rounded-lg">Figma</button>
                        </div>
                    </div>

                    {/* Client Reviews Section */}
                    <div className="mt-10 w-full">
                        <h3 className="text-5xl font-bold mb-4">Client Reviews</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {/* Review Items */}
                            {/* Review Item 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-gray-300" />
                                    <FaStar className="text-gray-300" />
                                    <span className="ml-2 text-gray-600">3/5</span>
                                </div>
                                <p className="mt-4 text-lg text-gray-600">
                                    "Tushar did a great job on our website. He was fast, reliable, and easy to communicate with."
                                </p>
                                <p className="mt-2 font-semibold">- John Doe</p>
                            </div>

                            {/* Review Item 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <span className="ml-2 text-gray-600">5/5</span>
                                </div>
                                <p className="mt-4 text-lg text-gray-600">
                                    "Excellent work! Highly recommend for any graphic design project."
                                </p>
                                <p className="mt-2 font-semibold">- Jane Smith</p>
                            </div>

                            {/* Review Item 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-gray-300" />
                                    <span className="ml-2 text-gray-600">4/5</span>
                                </div>
                                <p className="mt-4 text-lg text-gray-600">
                                    "Great experience! Tushar was creative and met all our design needs."
                                </p>
                                <p className="mt-2 font-semibold">- Chris Johnson</p>
                            </div>

                            {/* Review Item 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <FaStar className="text-purple-400" />
                                    <span className="ml-2 text-gray-600">5/5</span>
                                </div>
                                <p className="mt-4 text-lg text-gray-600">
                                    "Tushar is a true professional. I would definitely work with him again!"
                                </p>
                                <p className="mt-2 font-semibold">- Emily White</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freeprofile;
