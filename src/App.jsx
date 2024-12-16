import Home from "./Home";
import Nav from "./Nav";
import User from "./User";

function App(){
    return(
        <div className= "text-white w-screen h-screen bg-[url('./assets/bg101.jpg')] bg-cover">
            <Home/>
            {/* <Nav/>
            <User/> */}
        </div>
    );
}
export default App;