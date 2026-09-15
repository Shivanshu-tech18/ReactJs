import './App.css'
import StudentCard from './StudentCard';
function App() {

  return (
    <>
    <div>

      <StudentCard name="Shivanshu" course="Btech cse" year={4} />
      <StudentCard name="Suchita" course="Btech cys" year={4} />
      <StudentCard name="Rohit" course="Btech cse" year={4} />
    </div>
    </>
  )
}

export default App
