import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Marriage DAO coming soon to your state!
        </p>
        <a
          className="App-link"
          href="https://www.daohouse.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built at DAO House
        </a>
      </header>
    </div>
  );
}

export default App;
