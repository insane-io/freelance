import React, { useEffect, useState } from 'react';
import home1 from '../Assets/home1.png';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Adminverify = () => {
  const [candidate, setCandidate] = useState({
    name: 'John Doe',
    email: 't3@example.com',
    documents: [
      { docName: 'ID Proof', verified: null, content: home1 },
      { docName: 'Resume', verified: null, content: 'This is the Resume document' },
    ],
  });

  const params = useParams()

  const {id} = params

  console.log(id)

  const [formData, setFormData] = useState({
    email: 't3@example.com',
    is_verified: null, 
    status: null, 
  });

  useEffect(()=>{
    async function getData(){
      try {
        const res = axios.get("http://13.60.236.4:8000/user/get_unverified_docs/")
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleOpenModal = (document) => {
    setSelectedDocument(document);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDocument(null);
  };

  const handleVerifyDocument = (status) => {
    // const updatedDocument = { ...selectedDocument, verified: status };

    // // Update the candidate state with the updated document verification
    // setCandidate((prevCandidate) => ({
    //   ...prevCandidate,
    //   documents: prevCandidate.documents.map((doc) =>
    //     doc.docName === updatedDocument.docName ? updatedDocument : doc
    //   ),
    // }));

    // handleCloseModal();
  };
  const allDocumentsVerified = candidate.documents.every((doc) => doc.verified === true);
  const handleSave = async (event) => {
    // event.preventDefault();
    // setFormData((prev) => ({
    //   ...prev,
    //   is_verified: allDocumentsVerified ? true : false, 
    //   status: 1, 
    // }));

    // try {
    //   const res = await axios.post("http://127.0.0.1:8000/user/update_status/", {
    //     email: formData.email,
    //     is_verified: allDocumentsVerified ? "True" : "False", 
    //     status: 1,
    //   }, {
    //     headers: {
    //       Authorization: localStorage.getItem('access_token')
    //         ? 'Bearer ' + localStorage.getItem('access_token')
    //         : null,
    //       'Content-Type': 'application/json',
    //       accept: 'application/json',
    //     },
    //   });

    //   console.log('API Response:', res.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Candidate: {candidate.name}</h1>
      <p className="text-xl mb-8">Email: {candidate.email}</p>

      <h2 className="text-2xl font-semibold mb-4">Documents</h2>
      <div className="w-full max-w-4xl">
        {candidate.documents.map((document, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 mb-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
            onClick={() => handleOpenModal(document)}
          >
            <span>{document.docName}</span>
            <span
              className={`text-sm ${document.verified === true ? 'text-green-500' : document.verified === false ? 'text-red-500' : 'text-gray-500'}`}
            >
              {document.verified === null ? 'Pending' : document.verified ? 'Verified' : 'Not Verified'}
            </span>
          </div>
        ))}
      </div>

      {isModalOpen && selectedDocument && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <h3 className="text-xl font-bold mb-4">{selectedDocument.docName}</h3>
            <img src={selectedDocument.content} className="mb-6" />

            <div className="flex justify-between">
              <button
                className={`px-4 py-2 rounded-md ${selectedDocument.verified === true ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleVerifyDocument(true)}
              >
                Verify
              </button>
              <button
                className={`px-4 py-2 rounded-md ${selectedDocument.verified === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleVerifyDocument(false)}
              >
                Not Verify
              </button>
            </div>

            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={handleCloseModal}>
              ✖
            </button>
          </div>
        </div>
      )}
      {allDocumentsVerified && (
        <div className="mt-8 flex space-x-4">
          <button onClick={handleSave} className="px-6 py-3 bg-green-500 text-white rounded-lg">
            Approve
          </button>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg">
            Disapprove
          </button>
        </div>
      )}
    </div>
  );
};

export default Adminverify;
