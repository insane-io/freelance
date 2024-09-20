import React, { useContext, useState } from 'react';
import { MyContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [skill, setSkill] = useState('');
    const { onboarding, setOnboarding } = useContext(MyContext);

    const AddSkill = () => {
        if (!skill.trim()) return; 
        let isDuplicate = false;
        data.forEach(d => {
            if (d.toLowerCase() === skill.trim().toLowerCase()) {
                isDuplicate = true;
            }
        });

        if (!isDuplicate) {
            setData([...data, skill.trim()]);
        }
        setSkill('');
    };

    const handleNext = () => {
        const updatedOnboarding = {
            ...onboarding, 
            skills: data 
        };
        setOnboarding(updatedOnboarding);
        console.log(updatedOnboarding);
        navigate("/experience")
    }

    const removeSkill = (indexToRemove) => {
        const updatedData = data.filter((_, index) => index !== indexToRemove);
        setData(updatedData);
    };

    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='text-center mb-8 w-5/12'>
                <h1 className='text-4xl font-semibold'>Almost There! What are your skills?</h1>
                <p className='text-gray-500 mt-2'>
                    Your skills show clients what you can offer, and help us choose which jobs to recommend to you.
                    Add or remove the ones we've suggested, or start typing to pick more. It's up to you.
                </p>
            </div>

            <div className='w-2/5'>
                <div className='flex gap-4'>
                    <input
                        type="text"
                        className='w-full py-1 px-4 border rounded-xl shadow-sm focus:outline-none'
                        placeholder="Enter Skills..."
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                    />
                    <button
                        onClick={AddSkill}
                        className='py-1 px-6 bg-blue-400 text-white rounded-lg'
                    >
                        Add Skill
                    </button>
                </div>

                <div className='flex flex-wrap my-5 gap-2'>
                    {data.map((d, index) => (
                        <div key={index} className='flex items-center bg-blue-400 text-white rounded-full px-4 py-2'>
                            <span>{d}</span>
                            <button
                                onClick={() => removeSkill(index)}
                                className='ml-2 text-sm rounded-full w-5 h-5 flex items-center justify-center'
                            >
                                &#10005;
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-7 flex justify-center w-2/6'>
                <button
                    className='py-2 px-8 bg-blue-400 text-white rounded-lg'
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Skills;
