import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import ReachOut from './Components/ReachOut';

function App() {
  return (
    <div className="App">
        <Header/>
        <Heroes/>
        <Footer/>
        <ReachOut/>
    </div>
  );
}

export default App;
