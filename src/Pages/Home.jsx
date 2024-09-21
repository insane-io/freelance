import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import landing from '../Assets/landing.png';

const Home = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    const handleGetStarted = () => {
        navigate('/verify1');  // Redirect to the verify1 page
    };

    return (
        <>
            <div className='grid grid-cols-2 m-24'>
                <div className='col-span-1 mt-24 px-10'>
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-4xl font-bold'>
                            Data-driven student engagement and learning outcomes
                        </h1>
                        <p className='text-lg mt-2'>
                            Giving you the tools to support students on their learning journey
                        </p>
                        <button
                            className='bg-purple-400 hover:scale-110 transition-all w-1/3 text-white text-2xl py-2 font-bold px-4 rounded-xl mt-4'
                            onClick={handleGetStarted}  // Handle button click
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className='col-span-1 mx-24'>
                    <img src={landing} alt="Landing" className='w-120 h-120' />
                </div>
            </div>
        </>
    );
};

export default Home;
