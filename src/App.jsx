import { useState } from "react";
import Financial from "./Componets/Financial.jsx"
import Sidebar from "./Componets/Sidebar.jsx"
function App() {
  const [toggle , setToggle] = useState(0);
  return (
    <div className='dashbord'>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <Financial toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App
