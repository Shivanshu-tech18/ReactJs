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
import StudentCard from "./StudentCard";

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

// function App(){
//     const[name,setName]=useState("");
//     return(
//       <div className="Name">
//         <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>Enter Your Name
//         <div className="Showing">
//           <h1>Here is the name </h1>
//           <h2>{name}</h2>
//         </div>
//       </div>
//     );
// }
// function App(){
//   const students=[
//     {id:1,name:"Shivanshu",course:"Btech CSE",year:4},
//     {id:2,name:"Suchita",course:"Btech CYS",year:4},
//     {id:3,name:"Shrishti",course:"Btech CSE Hindi",year:4},
//     {id:4,name:"Rohit",course:"Btech CSE",year:4},
//     {id:5,name:"Himanshi",course:"Btech IOT",year:4}

//   ];
//   return (
//     <div >
//       {
//         students.map((student)=>(
//           <StudentCard 
//           key={student.id} 
//           name={student.name}
//           course={student.course}
//           year={student.year}
//           />
//         ))
//       }
//     </div>
//   );
// }
function App(){
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  // if(isLoggedIn){
  //   return(
  //     <div className="login">
  //         <h1>Welcom Shivanshu Tripathi</h1>
  //         <button onClick={(e)=>setIsLoggedIn(!isLoggedIn)}>Logout</button>
  //     </div>
  //   );
  // }
  //   return(
  //     <div className="login">
  //       <h1>Please click login</h1>
  //       <button onClick={(e)=>setIsLoggedIn(!isLoggedIn)}>Login </button>
  //     </div>
  //   );
  return(
    <div>
    <h1>{isLoggedIn ? "Welcome Shivanshu" : "Please click login"}</h1>
    
    <button onClick={(e)=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
    
  );
}
export default App;