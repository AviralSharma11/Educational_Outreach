import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import IITI_page from "./Components/IITI_page";
import Engagements_and_Cooperations from "./Components/Engagments_and_cooperations";
import OurPeople from "./Components/OurPeople";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/iit-indore" element={<IITI_page/>} /> 

          <Route path="/our_people" element={<OurPeople/>} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
