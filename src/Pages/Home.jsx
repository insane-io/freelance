import React, { useContext } from 'react'
import home1 from '../Assets/unverified.png'
import pending from "../Assets/pending.png"
import { MyContext } from '../Context/MyContext'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'

const Home = () => {
    const navigate = useNavigate()
    const { verified } = useContext(MyContext)
    return (
        <>
            {
                verified === -1 ? (
                    <>
                        <div className='mx-64 flex my-32 gap-16'>
                            <img src={home1} alt="" className='size-80' />
                            <div className='flex items-center gap-8 flex-col justify-center'>
                                <h1 className='text-4xl'>Looks Like You are not Verified Yet...</h1>
                                <button onClick={() => navigate("/verify")} className='bg-purple-400 hover:scale-110 transition-all  text-white text-2xl py-2 px-4 rounded-xl'>Verify Now</button>
                            </div>
                        </div>
                    </>
                ) : verified === 0 ? (
                    <>
                        <div className='mx-64 flex my-32 gap-16'>
                            <img src={pending} alt="" className='size-80' />
                            <div className='flex items-center gap-8 flex-col justify-center'>
                                <h1 className='text-4xl'>Verification Is Pending...</h1>
                                <p>The verification process takes around 2-3 days, meanwhile you can verify if you uploaded </p>
                            </div>
                        </div>
                    </>

                ) : verified === 1 ? (
                    <>
                        <div className='mx-40'>
                            <div className='grid grid-cols-3'>
                                <h1 className='text-5xl col-span-3 mb-8'>DashBoard</h1>
                                <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>21 Minutes</h1>
                                    <h1>Watch Hours</h1>
                                </div>
                                <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>21 Minutes</h1>
                                    <h1>Watch Hours</h1>
                                </div> <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>21 Minutes</h1>
                                    <h1>Watch Hours</h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 mt-5 gap-5'>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                        </div>
                    </>
                ) : null
            }

        </>
    )
}

export default Home
