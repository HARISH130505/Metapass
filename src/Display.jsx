import Userico from "./assets/user.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";
function Display() {
    const [Details, setDetails] = useState([]);
  
    useEffect(() => {
      fetch("https://pass-backend-pink.vercel.app/users")
        .then(response => response.json())
        .then((data) => {
          if (data.length > 0) {
            setDetails(data[data.length - 1]);
          }
        })
        .catch(err => console.error('Error fetching user details:', err));
    }, []);

  return (
    <div>
      <Nav />
      <div className="text-white flex  justify-center items-center flex-col ">
        <div className="bg-slate-600 rounded-xl bg-opacity-45 flex flex-col justify-center items-center py-4">
          <h1 className="text-4xl font-semibold text-white">User Details</h1>
          <div className="flex flex-col justify-center items-center lg:flex-row space-x-20">
            <img src={Userico} className="w-32 lg:hidden pt-2"></img>
              <ul className="text-left font-robo py-4 md:text-xl mt-8">
                <li className="py-2">
                  <span className="font-semibold text-gray-300">
                    Passport Number:{" "}
                  </span>
                  {Details.passno}
                </li>
                <li className="py-2">
                  <span className="font-semibold text-gray-300">
                    Holder's First Name:{" "}
                  </span>
                  {Details.fn}
                </li>
                <li className="py-2">
                  <span className="font-semibold text-gray-300">
                    Holder's Last Name:{" "}
                  </span>
                  {Details.ln}
                </li>
                <li className="py-2">
                  <span className="font-semibold text-gray-300">
                    Date of Birth:{" "}
                  </span>{" "}
                  {Details.dob}
                </li>
                <li className="py-2">
                  <span className="font-semibold text-gray-300">
                    Place of Birth:{" "}
                  </span>{" "}
                  {Details.pob}
                </li>
              </ul>
            <img
              src={Userico}
              className="hidden lg:block w-80 object-cover"
            ></img>
          </div>
          <Link to="/services">
            <button className="w-52 px-6 py-3 mt-5 text-white bg-slate-600 rounded-xl">
              Save Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Display;
