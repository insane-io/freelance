import React from 'react'
import { Link } from 'react-router-dom'
import img from "../Assets/6009864.png"

const Card = ({data}) => {

    console.log(data)
    return (
        <div className="max-w-sm w-4/5 bg-white border border-gray-200 rounded-lg shadow">
            <Link to="/video/1">
                <img className="rounded-t-lg w-full h-60" src={data.thumbnail} alt="" />
            </Link>
            <div className="p-5">
                <Link to="/video/1">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.title}</h5>
                </Link>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold text-blue-400'>300 views</h1>
                    <h1 className='text-2xl font-bold text-green-400'>$4.55</h1>
                </div>
            </div>
        </div>

    )
}

export default Card
