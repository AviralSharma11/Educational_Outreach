<<<<<<< HEAD
import './App.css';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import Director_message from './Components/Director_message';
import Devandra_sir_message from './Components/Devendra_sir_message';
import Cards from './Components/Cards';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import IITI from './Components/IITI';
>>>>>>> 40092716f9648170540d66fbecab621ec6ee583a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <Heroes />
      <Director_message />
      <Devandra_sir_message />
      <Cards />
=======
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iit-indore" element={<IITI />} /> 
        </Routes>
      </Router>    
>>>>>>> 40092716f9648170540d66fbecab621ec6ee583a
    </div>
  );
}

export default App;
