import Pre from './assets/pre.png'
import Nav from './Nav';
function Save(){

    return(
        <div>
            <Nav/>
        <div className='flex w-screen justify-center items-center flex-col my-12'>
        <div className='flex flex-col justify-center items-center bg-slate-600 rounded-xl bg-opacity-45 p-6'>
            <img src={Pre} className='w-80'></img>
              <button className='w-full bg-slate-600 text-white py-3 rounded-lg mt-4'> <a href='https://portfolio.metamask.io/'>Save Your MetaPass</a></button>
            
        </div>
        </div>
        </div>
    );
}
export default Save;