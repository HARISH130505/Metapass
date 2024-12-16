import React from "react";
import MetaPass from "./assets/metapass.png"; 
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="bg-slate-600 rounded-xl bg-opacity-45 px-8">
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-10 z-40">
        <img
          src={MetaPass} 
          alt="MetaPass Logo"
          className="w-60 h-36 mb-8"
        />
        <Link to="/about">
        <button className="bg-slate-600 text-white text-lg font-medium px-8 py-3 rounded-xl mb-8">
          Your Gateway to the Borderless Digital World
        </button>
        </Link>
        <Link to="/login">
        <button className="bg-slate-600 text-white text-lg font-medium px-8 py-3 rounded-xl">
          START
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;

