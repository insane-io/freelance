import React, { useState } from 'react';
import video from "../Assets/video.png";
import upcomming from "../Assets/upcomming.png";
import stream from "../Assets/stream.png";
import { useNavigate } from 'react-router-dom';
import Modal_Upload from '../Components/Modal_Upload';

const Upload = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [modal, setModal] = useState(false);

    const handleClick = (value) => {
        setType(value);
        setModal(true);  // Open the modal when a button is clicked
    };

    const toggleModal = () => {
        setModal(!modal);  // Toggle modal visibility
    };

    return (
        <div className='flex justify-center mt-10 gap-20'>
            <button onClick={() => handleClick("video")} className='border-2 transition-all hover:border-blue-400 flex-col hover:scale-110 flex justify-center items-center size-60 rounded-2xl'>
                <img src={video} alt="" className='size-10' />
                Upload Video
            </button>
            <button onClick={() => handleClick("upcomming")} className='border-2 transition-all flex hover:border-green-400 flex-col hover:scale-110 justify-center items-center size-60 rounded-2xl'>
                <img src={upcomming} alt="" className='size-10' />
                Upload Details Of Upcomming Video
            </button>
            <button onClick={() => navigate("stream")} className='border-2 transition-all flex hover:border-red-400 flex-col hover:scale-110 justify-center items-center size-60 rounded-2xl'>
                <img src={stream} alt="" className='size-10' />
                Start A Live Stream
            </button>
            {modal && <Modal_Upload modal={modal} toggleModal={toggleModal} type={type} />}
        </div>
    );
};

export default Upload;
