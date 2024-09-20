import React, { useState } from 'react';
import plus from "../../Assets/plus.png";
import Modal from '../../Components/Modal';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [experiences, setExperiences] = useState([
        {
            company: 'Google',
            startDate: '27/8/2022',
            endDate: '2/3/2023',
        },
    ]);

    const toggleModal = () => {
        setModal(!modal);
    };

    const addExperience = (newExperience) => {
        setExperiences([...experiences, newExperience]);
    };

    return (
        <div className='flex justify-center my-20 mx-60'>
            <div className='h-[28rem] w-5/6'>
                <h1 className='text-4xl'>If you have relevant work experience, add it here.</h1>
                <p>Freelancers who add their experience are twice as likely to win work. But if you're just starting out, you can still create a great profile. Just head on to the next page.</p>
                <div className='grid grid-cols-3 my-5 gap-5'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='border-2 p-3 rounded-lg'>
                            <h1 className='text-2xl font-semibold'>{exp.company}</h1>
                            <h1 className='text-lg'>{exp.startDate} to {exp.endDate}</h1>
                        </div>
                    ))}
                    <button className=' h-48 border-dotted border-gray-500 flex flex-col justify-center items-center border-2 rounded-lg text-xl' onClick={toggleModal}>
                        <img src={plus} alt="" className='size-6' />
                        Add Experience
                    </button>
                </div>

                <Modal modal={modal} toggleModal={toggleModal} addExperience={addExperience} />
            </div>
            <button onClick={() => navigate("/")} className='rounded-full absolute bottom-20 py-2 px-10 bg-blue-400 text-white hover:bg-blue-500 transition-all cursor-pointer'>Next</button>
        </div>
    );
};

export default Experience;