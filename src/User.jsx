import Userico from './assets/user.png'
import { Link } from 'react-router-dom';
import Nav from './Nav';
function User(){
    const Details=[
        {
            cn:'Republic of India',
            passtype:'Ordinary',
            passno:'H3547821',
            name:'Harish J',
            dob:'13-05-2005',
            place:'Chennai',
            country:'India',
            doi:'XX-XX-XXXX',
            doe:'XX-XX-XXXX',
            auth:'Ministry of External Affairs',
        },
    ];
    return(
        <div>
            <Nav/>
        <div className="text-white flex  justify-center items-center flex-col ">
            <div className='bg-slate-600 rounded-xl bg-opacity-45 flex flex-col justify-center items-center py-4'>
            <h1 className='text-4xl font-semibold text-white'>User Details</h1>
            <div className="flex flex-col justify-center items-center lg:flex-row space-x-20">
                <img src={Userico} className='w-32 lg:hidden pt-2'></img>
                {Details.map((det,index)=>(
                    <ul key={index} className="text-left font-robo py-4 md:text-xl mt-8">
                        <li className='py-2'><span className='font-semibold text-gray-300'>Country's Name: </span>{det.cn}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Passport Type:  </span>{det.passtype}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Passport Number: </span>{det.passno}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Holder's Name: </span>{det.name}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Date of Birth: </span> {det.dob}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Place of Birth: </span> {det.place}, {det.country}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Date of Issue: </span> {det.doi}</li>
                        <li className='py-2'><span className='font-semibold text-gray-300'>Date of Expiry: </span> {det.doe}</li>
                    </ul>
                ))}
                <img src={Userico} className='hidden lg:block w-80 object-cover'></img>
            </div>
            <Link to="/preview">
                <button className='w-52 px-6 py-3 mt-5 text-white bg-slate-600 rounded-xl'>Save Details</button>
            </Link>
            </div>
            </div>
        </div>
    );
}
export default User;