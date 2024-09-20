import React, { useState } from 'react';

const Modal_Upload = ({ modal, toggleModal, type }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        currentlyWorking: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal();  
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
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Video Title *</label>
                                    <input
                                        type="file"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="block w-full p-2.5 border rounded-lg"
                                        placeholder="Enter Video Title"
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
