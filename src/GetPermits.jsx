import React,{useState} from "react";
import Nav from "./Nav";
function GetPermits(){
    const [cop,setCop]=useState("");
    const [net,setNet]=useState("");
    function handleCop(e){
       setCop(e.target.value)
    }
    function handleNet(e){
        setNet(e.target.value)
    }
    return(
        <div>
        <Nav/>
        <div className="flex flex-col items-center justify-center">
            <div className="w-fit flex flex-col justify-center items-center bg-slate-600 rounded-xl bg-opacity-45 p-8 mt-28">
                <h1 className='text-xl text-center font-bold'>Collected Permits</h1>
                <ul className="text-left font-robo p-4 md:text-xl mt-8 text-white">
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Country of Permit:</span>
                            <select value={cop} onChange={handleCop}  className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'>
                                <option value={""} className='text-black'>Select Country</option>
                                <option value={"India"}  className='text-black'>India</option>
                                <option value={"USA"}  className='text-black'>USA</option>
                                <option value={"UAE"}  className='text-black'>UAE</option>
                                <option value={"Russia"}  className='text-black'>Russia</option>
                            </select>
                        </li>
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Network:</span>
                            <select value={net} onChange={handleNet}  className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'>
                                <option value={""} className='text-black'>Select Network</option>
                                <option value={"Ethereum"}  className='text-black'>Ethereum</option>
                                <option value={"Binance"}  className='text-black'>Binance</option>
                                <option value={"Bitcoin"}  className='text-black'>Bitcoin</option>
                                <option value={"Polygon"}  className='text-black'>Polygon</option>
                            </select>
                        </li>
                </ul>
                <button className='w-52 px-6 py-3 mt-5 text-white bg-slate-600 rounded-xl'>Save Details</button>
            </div>
        </div>
    </div>);
}
export default GetPermits;