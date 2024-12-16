import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SignatureIcon from './SignatureIcon.png'; 

function File() {
  const [passportImage, setPassportImage] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);

  const handlePassportImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.size <= 2097152) { 
      setPassportImage(file);
    } else {
      alert('Passport image size exceeds the limit of 2MB.');
    }
  };

  const handleSignatureImageChange = (event) => {
    const file = event.target.files[0];
    setSignatureImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    if (passportImage && signatureImage) {
      console.log('Passport Image:', passportImage.name);
      console.log('Signature Image:', signatureImage.name);
      setPassportImage(null);
      setSignatureImage(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8">
        <div className=' bg-gray-700 rounded-xl p-6 m-4'>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faUser} className="text-white text-4xl mr-4" />
          <label htmlFor="passport-input" className="block text-sm font-medium text-white">
            UPLOAD FRONT-PAGE OF YOUR EXISTING PASSPORT
          </label>
        </div>
        <input
          type="file"
          id="passport-input"
          className="mt-1 p-2 border border-gray-500 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none"
          onChange={handlePassportImageChange}
          accept="image/*"
        />
        </div>
       <div  className=' bg-gray-700 rounded-xl p-6 m-4'>
        <div className="flex items-center mb-6">
          <img src={SignatureIcon} alt="Signature Icon" className="w-16 h-8 mr-4" />
          <label htmlFor="signature-input" className="block text-sm font-medium text-white">
            UPLOAD AN IMAGE OF YOUR PASSPORT SIGNATURE
          </label>
        </div>
        <input
          type="file"
          id="signature-input"
          className="mt-1 p-2 border border-gray-500 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none"
          onChange={handleSignatureImageChange}
          accept="image/*"
        />
        </div>
      </div>

      <button
        type="submit"
        className="w-1/3  px-6 py-2 mt-10 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none"
        onClick={handleSubmit}
        disabled={!passportImage || !signatureImage}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default File;