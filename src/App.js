import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About_Top_Eductional_Outreach from './Components/about_top_Eductional_outreach';
import About_Mid_Eductional_Outreach from './Components/about_mid_Eductional_outreach';


function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <Routes>

          <Route exact path="/about/Education_Outreach" element={ //educational outreach
            <>
              <About_Top_Eductional_Outreach />
              <About_Mid_Eductional_Outreach />
              {/* <Bottom1 /> */}
              {/* <Cards config={conf2} /> */}
            </>
          } />

        </Routes>
      </Router>
    </>
  );
}

export default App;
