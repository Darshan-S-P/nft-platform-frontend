import React from 'react';
import EthereumInteraction from './Components/EthereumInteraction'; // Update the import path as per your project structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My NFT Platform!</h1>
        <EthereumInteraction />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
