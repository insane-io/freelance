import React, { useState } from 'react';
import plus from "../../Assets/plus.png";
import Modal from '../../Components/Modal';

const Experience = () => {
    const [modal, setModal] = useState(false); // State to manage modal visibility

    const toggleModal = () => {
        setModal(!modal); // Toggle modal state
    }

    return (
        <div className='flex justify-center my-20 w-3/6 mx-60'>
            <div className='h-[28rem]'>
                <h1 className='text-4xl'>If you have relevant work experience, add it here.</h1>
                <p>Freelancers who add their experience are twice as likely to win work. But if you're just starting out, you can still create a great profile. Just head on to the next page.</p>
                <button
                    className='my-5 h-48 w-80 border-dotted border-gray-500 flex flex-col justify-center items-center border-2 rounded-lg text-xl'
                    onClick={toggleModal} // Show modal when button is clicked
                >
                    <img src={plus} alt="" className='size-6' />
                    Add Experience
                </button>
                    <Modal modal={modal} toggleModal={toggleModal} />
            </div>
            <button className='rounded-full absolute bottom-20 py-2 px-10 bg-blue-400 text-white hover:bg-blue-500 transition-all cursor-pointer'>Next</button>
        </div>
    )
}

export default Experience;
