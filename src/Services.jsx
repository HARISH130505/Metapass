import Nav from "./Nav";
import { Link } from "react-router-dom";
function Services(){
    return(
        <div>
            <Nav/>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex flex-col justify-center items-center bg-slate-600 rounded-xl bg-opacity-45 p-8 mt-16">
                    <h1 className='text-4xl text-center font-bold'>Services</h1>
                    <button className="w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl">Show MetaPass</button>
                    <Link to="/permits">
                       <button className="w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl">Get Permits</button>
                    </Link>
                    <Link to="/collections">
                       <button className="w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl">Show Permits</button>
                    </Link>
                    <Link to="/file">
                        <button className="w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl">Renew MetaPass</button>
                    </Link>
                    <Link to="/login">
                       <button className="w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl">Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Services;