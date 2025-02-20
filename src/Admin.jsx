import MetaPass from "./assets/metapass.png"; 
function Admin(){
    return(
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="bg-slate-600 rounded-xl bg-opacity-45 px-8">
                <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-10 z-40">
                        <img
                          src={MetaPass} 
                          alt="MetaPass Logo"
                          className="w-60 h-36 mb-8"
                        />
                        <div className="flex space-x-6">
                            <button className="bg-slate-600 text-white text-lg font-medium px-8 py-3 rounded-xl mb-8">Approve</button>
                            <button className="bg-slate-600 text-white text-lg font-medium px-8 py-3 rounded-xl mb-8">Reject</button>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;