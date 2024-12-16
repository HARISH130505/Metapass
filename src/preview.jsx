

import React from 'react';

function Preview() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-700 rounded-lg p-8">
        <div className="relative">
          <div className="flex items-center justify-center w-full h-64 bg-gray-500 rounded-lg border-2 border-solid border-black">
          </div>
        </div>

        <button className="w-full bg-purple-500 text-white py-3 rounded-lg mt-4" disabled>
          Mint Your MetaPass
        </button>
      </div>
    </div>
  );
}

export default Preview;
