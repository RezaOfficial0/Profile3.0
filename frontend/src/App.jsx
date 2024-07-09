import React, { useState, useEffect } from 'react';
import web3 from './web3';
import identityContract from './identity';

function App() {
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState({});


  useEffect(() => {
    async function loadAccount() {
      try {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error loading account:", error);
      }
    }
  
    loadAccount();

  }, []);

  const registerUser = async () => {
    try {
      await identityContract.methods.registerUser(name, email).send({ from: account });  // Ensure 'from' is set
      setRegistered(true);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const getUser = async () => {
    const user = await identityContract.methods.users(account).call();
    setUserInfo(user);
  };
  return (
    <div>
     <h1>Decentralized Identity Verification</h1>
      <div>
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={registerUser}>Register</button>
      </div>
      <div>
        <h2>User Information</h2>
        <button onClick={getUser}>Get User Info</button>
        {userInfo.isRegistered && (
          <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Registered: {userInfo.isRegistered.toString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
