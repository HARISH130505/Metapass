import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SignatureIcon from './SignatureIcon.png'; 
import Nav from './Nav';
import { Link } from 'react-router-dom';

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


  return (
    <div>
      <Nav/>
    <div className="flex flex-col justify center items-center mt-10">
      <div className="w-full flex flex-col  justify-center items-center max-w-md p-8 bg-slate-600 rounded-xl bg-opacity-45">
        <div className=' bg-gray-700 rounded-xl p-6 m-4'>
        <div className="flex items-center mb-6">
          <PersonIcon className="text-white  mr-4"/>
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
        <Link to="/user">
        <button className="w-52 px-6 py-3 mt-5 text-white bg-slate-600 rounded-xl">CONTINUE</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default File;