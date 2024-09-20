import React, { useContext } from 'react'
import home1 from '../Assets/unverified.png'
import { MyContext } from '../Context/MyContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const { verified } = useContext(MyContext)
    return (
        <>
            {
                !verified ? (
                    <>
                        <div className='mx-64 flex my-32 gap-16'>
                            <img src={home1} alt="" className='size-80' />
                            <div className='flex items-center gap-8 flex-col justify-center'>
                                <h1 className='text-4xl'>Looks Like You are not Verified Yet...</h1>
                                <button onClick={()=>navigate("/verify")} className='bg-orange-400 text-white text-2xl py-2 px-4 rounded-xl'>Verify Now</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )
            }

        </>
    )
}

export default Home
