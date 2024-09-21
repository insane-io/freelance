import React, { useContext, useEffect, useState } from 'react'
import home1 from '../Assets/unverified.png'
import pending from "../Assets/pending.png"
import { MyContext } from '../Context/MyContext'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'
import axios from 'axios'
import { UserSquare } from 'phosphor-react'
import verify1 from '../Assets/verify1.png'

const Verify1 = () => {
    const navigate = useNavigate()
    const { verified } = useContext(MyContext)
    const [data,setData] = useState([])

    useEffect(()=>{
        async function getData(){
            try {
                const res = await axios.get("http://13.60.236.4:8000/user/get_teacher_video/",{
                    headers: {
                        Authorization: localStorage.getItem('access_token')
                            ? 'Bearer ' + localStorage.getItem('access_token')
                            : null
                    }}
                )
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])
  return (
    <>
            {
                !verified ? (
                    <>
                        <div className='mx-64 flex my-32 gap-16'>
                            <img src={verify1} alt="" className='size-120' />
                            <div className='flex  gap-8 flex-col justify-center'>
                                <h1 className='text-6xl font-bold'>Account Verification</h1>
                                <p className='text-lg text-gray-400'>Join a community of changemakers in education—verify your account today and start shaping the future of learning!</p>
                                <button onClick={() => navigate("/verify")} className='bg-purple-400 hover:scale-110 transition-all  text-white text-2xl py-2 px-4 w-1/3 rounded-xl'>Verify Now</button>
                            </div>
                        </div>
                    </>
                ) :  (
                    <>
                        <div className='mx-40'>
                            <div className='grid grid-cols-3'>
                                <h1 className='text-5xl col-span-3 mb-8'>DashBoard</h1>
                                <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>21 Minutes</h1>
                                    <h1>Watch Hours</h1>
                                </div>
                                <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>Rs. 4520</h1>
                                    <h1>Earned</h1>
                                </div> <div className='bg-blue-400 text-white w-4/5 h-40 border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <h1 className='text-4xl'>1554</h1>
                                    <h1>Views</h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 mt-5 gap-5'>
                                {
                                    data.map((d)=>(
                                        <Card data={d}/>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ) 
            }

        </>
  )
}

export default Verify1