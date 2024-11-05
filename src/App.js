import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import IITIPage from "./Components/IITIPage";
import OurPeoplePage from "./Components/OurPeoplePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/iit-indore" element={<IITIPage/>} /> 

          <Route path="/our_people" element={<OurPeoplePage/>} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
