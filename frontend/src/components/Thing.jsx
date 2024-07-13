import React, { useState, useEffect } from 'react';
import web3 from '../web3';
import identityContract from '../identity';

function Thing() {
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
      await identityContract.methods.registerUser(name, email).send({
        from: account,
        gas: 450000
        });  // Ensure 'from' is set
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

    <div className="text-white flex w-full justify-center items-center mb-[150px] mr-10  ">
       <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
       <div className="flex-1 flex flex-col justify-start items-start">
        <h2 className='text-white text-3xl sm:text-5xl mt-[100px] p-5 eth-card'>Register User</h2>
        </div>
        </div>

        <div className=" flex flex-col justify-start items-center br-5 mt-[100px]">
        <input
        className='gradient-bg-welcome white-glassmorphism w-[300px] bg-black rounded-[10px] '
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className='gradient-bg-welcome  bg-black w-[300px] white-glassmorphism mt-5 mb-5  rounded-[10px] '
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <button
        onClick={registerUser}
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
  Register
</button>
</div>
       <div>
        <h2>User Information</h2>
        <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700" onClick={getUser}>Get User Info</button>
        {userInfo.isRegistered && (
          <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Registered: {userInfo.isRegistered.toString()}</p>
          </div>
       
         )} </div>
    </div>
  )
}

export default Thing
