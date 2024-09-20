import React from 'react'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { IoBookmark } from "react-icons/io5";
import home1 from '../Assets/home1.png'

const Mygig = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Toggle bookmark state
    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };
    return (
        <>
            <div className='mt-24  py-8 grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className="relative bg-[#F0F0F0] w-full rounded-lg shadow-md mx-16 p-6 pt-16">
                        {/* Profile Image */}
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                            <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white">
                                {/* Replace with actual image */}
                                <img
                                    src={home1}
                                    alt="Profile Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Contact Button */}
                        <div className="absolute top-4 light-4">
                            <div className="flex items-center mt-2">
                                <div className="flex items-center">
                                    <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>

                                </div>
                                <span className="ml-2 text-2xl font-bold text-gray-600">3</span>

                                {/* Reviews icon */}

                            </div>
                        </div>
                        <button className="absolute top-4 right-4" onClick={toggleBookmark}>
                            {/* Icon changes color based on whether it's bookmarked */}
                            <IoBookmark
                                className='size-7'
                                color={isBookmarked ? "#EDAFFF" : "white"} // Conditional color change
                            />
                        </button>

                        {/* Content Below Image */}
                        <div className="flex flex-col items-center mt-12">



                            {/* Job Title */}
                            <div className="text-center mt-4">
                                <h3 className="text-4xl font-bold">I will create shopify store, build shopify website design, shopify dropshipping websit</h3>
                            </div>

                            <div className='w-full h-80 mt-8'>
                                <img
                                    src={home1}
                                    alt='Banner Image'
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className="mt-10 w-full">
                                <h3 className="text-3xl font-bold mb-4">About this gig</h3>
                                <div className=''>
                                    <p className='text-[#848484] text-l mt-6 px-12 pr-96'>
                                        Hello! I'm a passionate Frontend Developer with a keen interest in building user-friendly and
                                        visually appealing web applications. With extensive experience in React, I have contributed
                                        to numerous personal and team projects, focusing on delivering high-quality code and intuitive user experiences.
                                        My journey in web development has been marked by active participation in hackathons, where
                                        I have excelled at developing innovative solutions under tight deadlines.
                                    </p>
                                </div>

                            </div>

                            {/* Skills Section */}
                            <div className="mt-10 w-full">
                                <h3 className="text-3xl font-bold mb-4">Highlights</h3>
                                <div className="space-y-4">
                                    {/* Feature 1 */}
                                    <div className="border border-purple-400 rounded-md py-2 px-4">
                                        Unique Shopify Store Design
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="border border-purple-400 rounded-md py-2 px-4">
                                        Live Chat Integration
                                    </div>

                                    {/* Add more features similarly */}
                                    <div className="border border-purple-400 rounded-md py-2 px-4">
                                        Responsive Web Design
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
                <div className='col-span-1'>
                    <div className='col-span-1 flex justify-center'>
                        <div className='bg-white rounded-lg shadow-md p-6 w-64'>
                            <h3 className='text-xl font-semibold text-center mb-4'>Project Package</h3>
                            <div className='text-gray-500 text-sm'>
                                <p className='mb-2'>Startup Package</p>
                                <p className='text-green-600 font-semibold text-lg'>₹7,027</p>
                            </div>
                            <div className='mt-4 text-gray-500 text-sm'>
                                <p className='mb-2'>Duration</p>
                                <p className='font-semibold text-black text-lg'>3-day delivery</p>
                            </div>
                            <button className='bg-pink-200 text-black mt-6 py-2 px-4 rounded-lg w-full'>
                                Contact me
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Mygig