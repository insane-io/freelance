import React, { useState } from 'react';

const Modal = ({ modal, toggleModal, addExperience }) => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        country: '',
        startDate: { month: '', year: '' },
        endDate: { month: '', year: '' },
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

    const handleDateChange = (e, field, dateType) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [field]: { ...formData[field], [dateType]: value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExperience = {
            company: formData.company,
            startDate: `${formData.startDate.month}/${formData.startDate.year}`,
            endDate: formData.currentlyWorking ? 'Present' : `${formData.endDate.month}/${formData.endDate.year}`,
        };
        addExperience(newExperience);
        toggleModal();
    };

    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true"
            className={`fixed inset-0 z-50 flex justify-center items-center ${modal ? '' : 'hidden'} overflow-auto`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
                        <h2 className="text-2xl font-bold">Add Work Experience</h2>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="block w-full p-2.5 border rounded-lg"
                                placeholder="Ex: Software Engineer"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Company *</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="block w-full p-2.5 border rounded-lg"
                                placeholder="Ex: Microsoft"
                                required
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="block w-full p-2.5 border rounded-lg"
                                    placeholder="Ex: London"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-700">Country</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="block w-full p-2.5 border rounded-lg">
                                    <option value="" disabled>Select Country</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    {/* Add more countries */}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="currentlyWorking"
                                    checked={formData.currentlyWorking}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                I am currently working in this role
                            </label>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-700">Start Date *</label>
                                <div className="flex space-x-2">
                                    <select
                                        value={formData.startDate.month}
                                        onChange={(e) => handleDateChange(e, 'startDate', 'month')}
                                        className="w-1/2 p-2.5 border rounded-lg">
                                        <option value="" disabled>Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        {/* Add more months */}
                                    </select>
                                    <select
                                        value={formData.startDate.year}
                                        onChange={(e) => handleDateChange(e, 'startDate', 'year')}
                                        className="w-1/2 p-2.5 border rounded-lg">
                                        <option value="" disabled>Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        {/* Add more years */}
                                    </select>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-700">End Date *</label>
                                <div className="flex space-x-2">
                                    <select
                                        value={formData.endDate.month}
                                        onChange={(e) => handleDateChange(e, 'endDate', 'month')}
                                        className="w-1/2 p-2.5 border rounded-lg">
                                        <option value="" disabled>Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        {/* Add more months */}
                                    </select>
                                    <select
                                        value={formData.endDate.year}
                                        onChange={(e) => handleDateChange(e, 'endDate', 'year')}
                                        className="w-1/2 p-2.5 border rounded-lg">
                                        <option value="" disabled>Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        {/* Add more years */}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="block w-full p-2.5 border rounded-lg"
                                placeholder="Describe your role and responsibilities"
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
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                            >
                                Add Experience
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
