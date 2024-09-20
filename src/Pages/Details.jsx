import React from 'react'

const Details = () => {
    return (
        <div className='h-[38rem] flex justify-center items-center'>
            <div className='w-4/5'>
                <div className='mx-80 gap-3 grid grid-cols-3 border-2 p-3 rounded-xl'>
                    <div className='flex col-span-3 justify-center my-5'><h1 className='text-3xl'>Details</h1></div>
                    <div className='col-span-3 my-3'>
                        <h1 className='text-xl font-semibold'>Number</h1>
                        <input type="number" className='w-full border-2 p-2 rounded-xl mt-4' placeholder='Number' />
                    </div>
                    <div className='col-span-1 my-3 py-3'>
                        <h1 className='text-xl  font-semibold'>Gender</h1>
                        <div className='mt-4 flex justify-evenly'>
                            <button className='size-10 border-2 hover:bg-blue-400 transition-all border-blue-400 rounded-full'>M</button>
                            <button className='size-10 border-2 hover:bg-pink-400 transition-all border-pink-400 rounded-full'>F</button>
                        </div>
                    </div>
                    <div className='col-span-1 my-3 py-3'>
                        <h1 className='text-xl font-semibold'>Age</h1>
                        <input type="number" className='mt-4 w-full border-2 p-2 rounded-xl' placeholder='Age' />
                    </div>
                </div>
                <div className='flex justify-center'><button className='bg-blue-400 py-2 px-6 rounded-lg mt-5'>Next</button></div>
            </div>

        </div>
    )
}

export default Details
