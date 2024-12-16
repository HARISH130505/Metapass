import React, { useState, useEffect } from 'react';
import MetaPass from './assets/metapass.png'
import { Link } from 'react-router-dom';

function Login(){
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
            <h1 className='text-white text-3xl py-8 '>LOGIN</h1>
            {error && <p className='text-red-800'>{error}</p>}
            {account ? (
            <div>
                <p className='text-white  md:text-xl xs:text-center'>Connected Account: <br className='md:hidden'></br>{account}</p>
            </div>
            ) : (
            <button onClick={connectMetaMask} className='bg-slate-600 text-white w-72 border-solid rounded-lg p-4  text-xl'>CONNECT METAMASK</button>
            )}
            <Link to="/file">
                <button className='w-72 px-6 py-3 mt-5 text-white text-xl bg-slate-600 rounded-xl'>CONTINUE</button>
            </Link>
      </div>
      </div>
  );
};

export default Login;