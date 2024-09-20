import React, { useState } from 'react';
import plus from "../../Assets/plus.png";
import Modal from '../../Components/Modal';
import { useNavigate } from 'react-router-dom';

const Education = () => {

    const navigate = useNavigate()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className='flex justify-center my-20 mx-60'>
            <div className='h-[28rem] '>
                <h1 className='text-4xl'>Clients like to know what you know - add your education here.</h1>
                <p>You don't have to have a degree. Adding any relevant education helps make your profile more visible.</p>
                <div className='grid grid-cols-3 my-5 gap-5'>
                    <div className='border-2 p-3 rounded-lg'>
                        <h1 className='text-2xl font-semibold'>Google</h1>
                        <h1 className='text-lg'>27/8/2022 to 2/3/2023</h1>
                    </div>
                    <button className=' h-48 border-dotted border-gray-500 flex flex-col justify-center items-center border-2 rounded-lg text-xl' onClick={toggleModal} >
                        <img src={plus} alt="" className='size-6' />
                        Add Experience
                    </button>
                </div>

                {/* <Modal modal={modal} toggleModal={toggleModal} /> */}
                {/* <Modal_Education/> */}
            </div>
            <button onClick={()=>navigate("/education")} className='rounded-full absolute bottom-20 py-2 px-10 bg-blue-400 text-white hover:bg-blue-500 transition-all cursor-pointer'>Next</button>
        </div>
    )
}

export default Education;
