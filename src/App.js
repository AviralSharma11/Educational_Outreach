import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import IITI from './Components/IITI';
import Engagements_and_Cooperations from "./Components/Engagments_and_cooperations";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/iit-indore" element={<IITI />} /> 

          <Route path="/Cooperation_&_Engagements" element={<Engagements_and_Cooperations />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
