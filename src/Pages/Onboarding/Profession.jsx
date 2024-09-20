import React, { useContext, useState } from 'react';
import { MyContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/undraw_professional_card_otb4 1.svg"

const Choose_Profession = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const { onboarding, setOnboarding } = useContext(MyContext);
    
    const handleNext = () => {
        setOnboarding(prevState => ({
            ...prevState,
            role: role
        }));
        navigate("/skills");
    }

    const professions = ["Software Engineer", "Teacher", "UI/UX Designer", "Physics Researcher"];

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-semibold'>Great, So what is your profession?</h1>
                <p className='text-gray-500 mt-2'>Don't worry you can change it later</p>
            </div>

            <div className='w-2/5'>
                <div className='relative'>
                    <input 
                        type="text" 
                        className='w-full py-3 px-4 border rounded-xl shadow-sm focus:outline-none' 
                        placeholder="So" 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <div className='absolute top-12 left-0 w-full bg-white border rounded-xl mt-2 shadow-lg'>
                        {professions.filter(p => p.toLowerCase().includes(role.toLowerCase())).map((profession, index) => (
                            <div 
                                key={index}
                                onClick={() => setRole(profession)} 
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${role === profession ? "bg-gray-200" : ""}`}
                            >
                                {profession}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-7 flex justify-end w-2/6'>
                <button 
                    onClick={handleNext} 
                    className='py-2 px-8 bg-blue-400 text-white rounded-lg' 
                    disabled={!role} 
                >
                    Next
                </button>
            </div>
            <div className='absolute right-10 bottom-10'>
                <img src={img} alt="Illustration" className='w-48' />
            </div>
        </div>
    );
}

export default Choose_Profession;
