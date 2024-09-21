import axios from 'axios';
import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { MyContext } from '../Context/MyContext';

const Verify = () => {
  const [permit, setPermit] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    webcamPhoto: null,
    adhaarPhoto: null,
    qualification: null,
  });

  const { status } = useContext(MyContext);

  const webcamRef = useRef(null);

  // Helper function to convert base64 image to File object
  const base64ToFile = (dataUrl, filename) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  // Capture Webcam Photo
  const captureWebcamPhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const webcamFile = base64ToFile(imageSrc, 'webcamPhoto.jpg');
    setFormData({ ...formData, webcamPhoto: webcamFile });
  };

  // Handle Aadhaar Photo Upload
  const handleAdhaarPhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, adhaarPhoto: file });
  };

  // Handle Qualification File Upload
  const handleQualificationChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, qualification: file });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    
    // Ensure all files are mapped correctly
    if (formData.webcamPhoto) {
      formDataToSend.append('webcam_photo', formData.webcamPhoto);
    }
    
    if (formData.adhaarPhoto) {
      formDataToSend.append('adhaar_card', formData.adhaarPhoto);
    }
    
    if (formData.qualification) {
      formDataToSend.append('degree_certificate', formData.qualification);
    }

    try {
      const res = await axios.post("http://13.60.236.4:8000/user/upload_docs/", formDataToSend, {
        headers: {
          Authorization: localStorage.getItem('access_token')
            ? `Bearer ${localStorage.getItem('access_token')}`
            : null,
          'Content-Type': 'multipart/form-data',
          accept: 'application/json',
        },
      });
      console.log(res);
      navigate('/');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <>
      {!permit ? (
        <div className="flex justify-center flex-col mx-[34rem] my-20">
          <h1 className="text-2xl">Do you want to verify your account?</h1>
          <button
            className="bg-purple-400 py-2 px-6 rounded-xl my-3 text-xl"
            onClick={() => setPermit(true)}
          >
            Verify
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">User Information Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Take a photo using Webcam
              </label>
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="border rounded mb-4"
              />
              <button
                type="button"
                onClick={captureWebcamPhoto}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Capture Photo
              </button>
            </div>

            {/* Aadhaar Photo Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Aadhaar Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAdhaarPhotoChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer focus:outline-none"
              />
            </div>

            {/* Qualification File Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Qualification Document (PDF/Image)
              </label>
              <input
                type="file"
                accept="application/pdf, image/*"
                onChange={handleQualificationChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Verify;
