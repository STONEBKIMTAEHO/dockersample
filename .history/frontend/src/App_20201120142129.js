import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit>
          <input type="text" />
            <button type="submit">send</button>
          </input>
        </form>
      </header>
    </div>
  );
}

export default App;
