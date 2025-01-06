import React from 'react';
import indiaFlag from './assets/india.png';
import Nav from './Nav';

function CollectedPermits() {
  return (
    <div>
      <Nav/>
    <div className="flex flex-col items-center justify-center">
      <div className="w-[800px]  flex flex-col justify-center items-center bg-slate-600 rounded-xl bg-opacity-45 p-8">
      <h1 className='text-xl text-center font-bold'>Collected Permits</h1>
      <div className="flex flex-col items-center mt-10">
        <img src={indiaFlag} alt="India Flag" className="w-40 h-40 mb-4 mr-auto" />
        <p className="text-white text-lg mr-96 mb-48">REPUBLIC OF INDIA</p>
      </div>
      <button className="w-1/3 bg-slate-600 text-white px-8 py-3 rounded-md mt-8">RETURN</button>
    </div>
    </div>
    </div>
  );
}

export default CollectedPermits;