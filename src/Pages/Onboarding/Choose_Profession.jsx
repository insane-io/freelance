import React, { useContext, useState } from 'react'
import client from "../../Assets/6009864.png"
import freelancer from "../../Assets/2751651.png"
import { MyContext } from '../../Context/MyContext'
import { useNavigate } from 'react-router-dom'

const Choose_Profession = () => {

    const navigate = useNavigate()

    const { setUrl, role, setRole } = useContext(MyContext)

    const handleNext = () => {
        if (role === "client") {
            setUrl("http://127.0.0.1:8000/user/register/client/")
        } else if (role === "freelancer") {
            setUrl("http://127.0.0.1:8000/user/register/freelancer/")
        }
        navigate("/details")
    }

    return (
        <div className='flex flex-col justify-center items-center h-[34rem]'>
            <div>
                <h1 className='text-4xl mb-10'>Choose Your Role</h1>
            </div>
            <div className='flex flex-row gap-10'>
                <div
                    onClick={() => setRole("freelancer")}
                    className={`border-2 rounded-xl size-60 flex justify-center items-center gap-2 hover:border-blue-400 ${role === "freelancer" ? "border-blue-400" : ""} transition-all cursor-pointer`}
                >
                    <img src={client} alt="Freelancer" className='size-10' />
                    <h1 className='text-2xl'>Freelancer</h1>
                </div>
                <div
                    onClick={() => setRole("client")}
                    className={`border-2 rounded-xl size-60 flex justify-center items-center gap-2 hover:border-blue-400 ${role === "client" ? "border-blue-400" : ""} transition-all cursor-pointer`}
                >
                    <img src={freelancer} alt="Client" className='size-10' />
                    <h1 className='text-2xl'>Client</h1>
                </div>
            </div>
            <div className='mt-7 flex justify-end w-2/6'>
                <button
                    onClick={handleNext}
                    className='py-2 px-8 bg-blue-400 rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Choose_Profession
