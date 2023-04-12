import logo from './logo.svg';
import './App.css';
import './wc/wc-button.js';
import WrapButton from './wc/wc-wrap-button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <WrapButton text={'Hola'}></WrapButton> */}
        <wc-button text={"Hola"}></wc-button>
        <WrapButton text={"Hello"}></WrapButton>
      </header>
    </div>
  );
}

export default App;
