import React, { useState, useEffect } from 'react';
import MetaPass from './assets/metapass.png'

function Home(){
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('MetaMask is not installed. Please install it to use this app.');
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);
  
  return (
      <div className='flex w-screen h-screen justify-center items-center flex-col'>
        <div className='bg-slate-600 rounded-xl bg-opacity-45 p-6 flex flex-col justify-center items-center'>
            <img src={MetaPass} className='w-96'></img>
            <h1 className='text-white text-3xl py-8 font-robo'>LOGIN</h1>
            {error && <p className='text-red-800'>{error}</p>}
            {account ? (
            <div>
                <p className='text-white font-robo md:text-xl xs:text-center'>Connected Account: <br className='md:hidden'></br>{account}</p>
            </div>
            ) : (
            <button onClick={connectMetaMask} className='bg-slate-500 text-white w-52 border-solid rounded-lg p-4 font-robo text-xl'>CONNECT METAMASK</button>
            )}
            <button className='bg-slate-500 w-52 border-solid rounded-md p-4 my-8 font-robo text-xl'>CONTINUE</button>
      </div>
      </div>
  );
};

export default Home;