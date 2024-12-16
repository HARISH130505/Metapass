import Login from "./Login";
import User from "./User";
import File from "./file"
import Save from "./Save"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Preview from "./preview";
import About from "./About";

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
                  <Route path="preview" element={<Preview/>}/>
                  <Route path="save" element={<Save/>}/>
               </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;