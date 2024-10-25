import './App.css';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import Director_message from './Components/Director_message';
import Devandra_sir_message from './Components/Devendra_sir_message';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Heroes />
      <Director_message />
      <Devandra_sir_message />
      <Cards />
    </div>
  );
}

export default App;
