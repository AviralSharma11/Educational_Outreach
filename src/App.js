import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import IITI from './Components/IITI';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iit-indore" element={<IITI />} /> 
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
