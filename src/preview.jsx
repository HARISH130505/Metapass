import Nav from "./Nav";
import { Link } from "react-router-dom";
function Preview() {
  return (
    <div>
      <Nav/>
    <div className="flex flex-col items-center justify-center my-20">
      <div className="w-full max-w-md bg-slate-600 rounded-xl bg-opacity-45 p-8 ">
        <div className="relative">
          <div className="flex items-center justify-center w-full h-64 bg-gray-500 rounded-lg border-2 border-solid border-black">
          </div>
        </div>
        <Link to="/save">
        <button className="w-full bg-slate-600 text-white py-3 rounded-lg mt-4" >
          Mint Your MetaPass
        </button>
        </Link>                                                                                                                                                                                 
      </div>
    </div>
    </div>
  );
}

export default Preview;
