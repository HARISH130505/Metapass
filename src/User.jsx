import { Link } from 'react-router-dom';
import Nav from './Nav';
import React,{useState} from 'react';
function User(){
    const [fn,setFn]=useState("");
    const [ln,setLn]=useState("");
    const [passno,setPassno]=useState("");
    const [dob,setDob]=useState("");
    const [pob,setPob]=useState("");

    function handleFn(e){
        setFn(e.target.value)
    }
    function handleLn(e){
        setLn(e.target.value)
    }
    function handlePassno(e){
        setPassno(e.target.value)
    }
    function handleDob(e){
        setDob(e.target.value)
    }
    function handlePob(e){
        setPob(e.target.value)
    }
    
    async function handleSubmit(e) {

        e.preventDefault();

        if (!fn || !ln || !passno || !dob || !pob) {
            alert("Please fill in all fields.");
            return;
        }

        const formData = { fn, ln, passno, dob, pob };

        try {
            const response = await fetch("https://pass-backend-pink.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Data submitted successfully!");
                setFn("");
                setLn("");
                setPassno("");
                setDob("");
                setPob("");
            } else {
                alert("Failed to submit data.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    }
    return(
        <div>
            <Nav/>
        <div className="text-white flex justify-center items-center flex-col my-10">
            <div className='bg-slate-600 rounded-xl bg-opacity-45 flex flex-col justify-center items-center py-4'>
            <h1 className='text-4xl font-semibold text-white'>User Details</h1>
            <div className="flex flex-col justify-center items-center lg:flex-row space-x-20">
                    <ul className="text-left font-robo p-4 md:text-xl mt-8 text-white">
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>First Name:</span>
                            <input type="text" value={fn} placeholder="Enter First Name" onChange={handleFn} className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'></input>
                        </li>
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Last Name:</span>
                            <input type="text" value={ln} placeholder="Enter Last Name" onChange={handleLn}  className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'></input>
                        </li>
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Passport Number:</span>
                            <input type="text" value={passno} placeholder="Enter Passport number" onChange={handlePassno}  className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'></input>
                        </li>
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Date of Birth:</span>
                            <input type="date" value={dob} onChange={handleDob}  className='rounded-md p-2 bg-transparent border-solid border-2  border-slate-400'></input>
                        </li>
                        <li className='py-2 grid grid-cols-2 gap-0'>
                            <span className='font-semibold text-gray-300'>Place Of Birth:</span>
                            <select value={pob} onChange={handlePob}  className='rounded-md p-2 bg-transparent border-solid border-2 border-slate-400'>
                                <option value={""} className='text-black'>Select Country</option>
                                <option value={"India"}  className='text-black'>India</option>
                                <option value={"USA"}  className='text-black'>USA</option>
                                <option value={"UAE"}  className='text-black'>UAE</option>
                                <option value={"Russia"}  className='text-black'>Russia</option>
                            </select>
                        </li>
                    </ul>
            </div>
                <div className='flex justify-between'>
                    <button className='w-40 px-6 py-3 m-5 text-white bg-slate-600 rounded-xl' onClick={handleSubmit} type='submit'>Save Details</button>
                    <Link to="/display">
                    <button className='w-40 px-6 py-3 m-5 text-white bg-slate-600 rounded-xl'>Show Details</button>
                    </Link>
                </div>
                
                
            </div>
            </div>
        </div>
    );
}
export default User;