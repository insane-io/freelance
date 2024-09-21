import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import axios from 'axios';
import { MyContext } from "../Context/MyContext"
import { useNavigate } from 'react-router-dom';

const Freeprofile = () => {
    const [data, setData] = useState([])
    const { verified, setLogin, setVerified, setStatus } = useContext(MyContext)
    const navigate = useNavigate()

    console.log("verified", verified)

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get("http://13.60.236.4:8000/user/profile/teacher/", {
                    headers: {
                        Authorization: localStorage.getItem('access_token')
                            ? 'Bearer ' + localStorage.getItem('access_token')
                            : null
                    }
                })
                setData(res.data)
                localStorage.setItem("is_verified", res.data.is_verified)
                setVerified(res.data.is_verified)
                console.log(res.data)
                setStatus(res.data.status)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const LogOut = () => {
        localStorage.clear();
        navigate('/login')
        setLogin(false)
    }
    return (
        <div className="mt-24 flex items-center justify-center py-8">
            <div className="relative bg-[#F0F0F0] w-full rounded-lg shadow-md mx-16 p-6 pt-16">
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white">
                        <img
                            src={`https://api.dicebear.com/9.x/identicon/svg?seed=${data.user?.first_name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-12">
                    <h2 className="text-2xl font-semibold mt-1">{data.user?.first_name} {data.user?.last_name}</h2>
                    {
                        verified === true ? (
                            <>
                                <div className="flex items-center mt-2">
                                    <div className="flex items-center">
                                        <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                                        <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                                        <span className="text-purple-400"><FaStar className="size-8" color="#A855F7" /></span>
                                        <span className="text-gray-300"><FaStar className="size-8" color="#D1D5DB" /></span>
                                        <span className="text-gray-300"><FaStar className="size-8" color="#D1D5DB" /></span>
                                    </div>
                                    <span className="ml-2 text-2xl font-bold text-gray-600">3</span>
                                    {/* <BiSolidCommentDetail className='ml-8 size-8 mr-2' color="#A855F7" />89 */}
                                </div>;
                                <button onClick={LogOut} className='bg-red-400 py-2 px-6 rounded-xl my-5'>Logout</button>

                                <div className="mt-10 w-full flex justify-between">
                                    <h3 className="text-5xl font-bold mb-4">Latest Videos</h3>
                                    <button className='bg-purple-400 text-xl px-5 rounded-xl text-white'>See All</button>
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
                            </>
                        ) : (
                            <>
                                <h1 className='text-3xl mt-5'>This is an unverified Account, Please Verify</h1>
                                <button onClick={() => navigate("/verify")} className='bg-purple-400 text-white px-6 py-2 text-xl mt-5 rounded-xl'>Verify</button>
                                <button onClick={LogOut} className='bg-red-400 py-2 px-6 rounded-xl my-5'>Logout</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Freeprofile;
