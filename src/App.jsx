import Login from "./Login";
import User from "./User";
import File from "./file"
import Save from "./Save"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Preview from "./preview";
import About from "./About";
import Services from "./Services";
import CollectedPermits from "./CollectedPermits";
import GetPermits from "./GetPermits";
import Admin from "./Admin";
import Display from "./Display";

function App(){
    return(
        <div className= "text-white w-screen h-screen bg-[url('./assets/bg101.jpg')] bg-cover">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Landing/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="file" element={<File/>}/>
                  <Route path="user" element={<User/>}/>
                  <Route path="display" element={<Display/>}/>
                  <Route path="preview" element={<Preview/>}/>
                  <Route path="save" element={<Save/>}/>
                  <Route path="services" element={<Services/>}/>
                  <Route path="permits" element={<GetPermits/>}/>
                  <Route path="collections" element={<CollectedPermits/>}/>
                  <Route path="admin" element={<Admin/>}/>
               </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;