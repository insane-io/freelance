import axios from 'axios';
import React, { useState } from 'react';

const Modal_Upload = ({ modal, toggleModal, type }) => {
    const [formData, setFormData] = useState({
        video: null,  // Set initial state to null for files
        thumbnail: null,  // Set initial state to null for files
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, type, files, value } = e.target;
        if (type === 'file') {
            // For file inputs, save the actual file
            setFormData({ ...formData, [name]: files[0] });
        } else {
            // For other inputs, save the value
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('video', formData.video); 
        formDataToSend.append('thumbnail', formData.thumbnail);
        formDataToSend.append('description', formData.description); 

        try {
            const res = await axios.post('http://13.60.236.4:8000/user/upload_video/', formDataToSend, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                        ? `Bearer ${localStorage.getItem('access_token')}`
                        : null,
                    'Content-Type': 'multipart/form-data', 
                    accept: 'application/json',
                },
            });
            console.log(res.data);
            toggleModal();
        } catch (error) {
            console.error('Error uploading video:', error.response?.data || error.message);
        }
    };

    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true"
            className={`fixed inset-0 z-50 flex justify-center items-center ${modal ? '' : 'hidden'} overflow-auto`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
                        <h2 className="text-2xl font-bold">
                            {type === 'video' ? 'Upload Video' : 'Upcoming Video Details'}
                        </h2>
                        {type === 'video' ? (
                            <>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Video</label>
                                    <input
                                        type="file"
                                        name="video"
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">ThumbNail</label>
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Video Description *</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        placeholder="Enter Video Description"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Upcoming Video Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        placeholder="Enter Upcoming Video Title"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Details *</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        placeholder="Enter Video Details"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                className="text-gray-700"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal_Upload;
