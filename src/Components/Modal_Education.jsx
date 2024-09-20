import React, { useState } from 'react';

const EducationModal = ({ isOpen, toggleModal, addEducation }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEducation(formData);
        toggleModal(); // Close modal on submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add Education History</h2>
                    <button
                        className="text-gray-700"
                        onClick={toggleModal}
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">School *</label>
                        <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleInputChange}
                            className="block w-full p-2.5 border rounded-lg"
                            placeholder="Ex: Northwestern University"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleInputChange}
                            className="block w-full p-2.5 border rounded-lg"
                            placeholder="Ex: Bachelors"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Field of Study</label>
                        <input
                            type="text"
                            name="fieldOfStudy"
                            value={formData.fieldOfStudy}
                            onChange={handleInputChange}
                            className="block w-full p-2.5 border rounded-lg"
                            placeholder="Ex: Computer Science"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Dates Attended</label>
                        <div className="flex space-x-2">
                            <select
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                className="block w-1/2 p-2.5 border rounded-lg"
                            >
                                <option value="">From</option>
                                {/* Add more date options */}
                            </select>
                            <select
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                className="block w-1/2 p-2.5 border rounded-lg"
                            >
                                <option value="">To (or expected graduation year)</option>
                                {/* Add more date options */}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="block w-full p-2.5 border rounded-lg"
                            placeholder="Describe your studies, awards, etc."
                            rows="4"
                        ></textarea>
                    </div>

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
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EducationModal;
