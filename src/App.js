import Header from "./component/Header";
import Cards from "./component/Cards";
import AddMovie from "./component/AddMovie";
import Details from "./component/Details";
import { Route,Routes } from "react-router-dom";
import { createContext,  useState, } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";

const Appstate= createContext();
function App() { 
  const [login,setLogin]=useState(false)
  const [userName,setUsername]=useState("");
 
  return (
    <Appstate.Provider value={{login,userName,setLogin,setUsername}}>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/addMovie" element={<AddMovie/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/login/" element={<Login/>}/>
      <Route path="/signup/" element={<Signup/>}/>
      </Routes>
     
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
