import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function EthereumInteraction() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    async function connectToMetaMask() {
      if (window.ethereum) {
        // MetaMask is installed
        const web3Instance = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Accounts now exposed
          setWeb3(web3Instance);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    }
    connectToMetaMask();
  }, []);

  return (
    <div>
      <h2>Ethereum Interaction</h2>
      {web3 ? (
        <p>Connected to Ethereum network</p>
      ) : (
        <p>Not connected to Ethereum network</p>
      )}
    </div>
  );
}

export default EthereumInteraction;
