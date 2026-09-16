// import './App.css'
// import StudentCard from './StudentCard';
// function App() {

//   return (
//     <>
//     <div>

//       <StudentCard name="Shivanshu" course="Btech cse" year={4} />
//       <StudentCard name="Suchita" course="Btech cys" year={4} />
//       <StudentCard name="Rohit" course="Btech cse" year={4} />
//     </div>
//     </>
//   )
// }

// export default App

import {useState} from "react"
import './App.css'

// function App(){
//   const[count,setCount]=useState(0);
//   return(
//     <div className="counter">

//     <button onClick={()=>setCount(count+1)}>Increases</button>
//     <button onClick={()=>setCount(count-1)}>Decrease</button>
//     <button onClick={()=>setCount(count-count)}>Reset</button>
//     <br />
//     <h1>{count}</h1>
//     </div>
//   );
// }

function App(){
    const[name,setName]=useState("");
    return(
      <div className="Name">
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>Enter Your Name
        <div className="Showing">
          <h1>Here is the name </h1>
          <h2>{name}</h2>
        </div>
      </div>
    );
}
export default App;