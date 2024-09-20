import React from 'react'
import home1 from '../Assets/home1.png'

const Home = () => {
    return (
        <>
            <div className='grid grid-cols-3 items-center p-32'>
                <div className='col-span-2 '>
                    <p className='text-4xl '>
                        <span className='text-6xl font-bold'>Building Bridges</span>
                        <br/>
                        <span className='text-7xl font-normal text-[#6C6C6C]'>Between You And</span>
                        <br/>
                        
                        <span className='text-7xl font-normal text-[#6C6C6C]'>Clients</span>
                        <br/>
                        
                    </p>
                    <p className='mt-7 pr-60 text-[#747474]'>Business ideas at the right price. Challenge everything. Keeping advertising standards high. Research based advertising for the bulls.</p>
                    <button className='bg-[#DF73FF] text-white text-lg font-semibold px-9  py-3 mt-5 rounded-lg'>Get Started</button>
                    
                    
                </div>
                <div className='col-span-1'>
                    <img src={home1} className='w-full h-auto' />
                </div>
            </div>

        </>
    )
}

export default Home
