import React from 'react'
import { Link } from 'react-router-dom'
import img from "../Assets/6009864.png"

const Card = ({data}) => {
    return (
        <div className="max-w-sm w-4/5 bg-white border border-gray-200 rounded-lg shadow">
            <Link to="#">
                <img className="rounded-t-lg w-full h-60" src={img} alt="" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold text-blue-400'>300 views</h1>
                    <h1 className='text-2xl font-bold text-green-400'>$4.55</h1>
                </div>
            </div>
        </div>

    )
}

export default Card
