import { useEffect, useState } from 'react';
import design from '../Button/button.module.css';
import PropTypes from 'prop-types';

const ConnectBtn = ({ style, content }) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [account, setAccount] = useState(null);


  const handleConnectMetaMask = async () => {
    try {
      if (window.ethereum) {
        // Prompt the user to connect their wallet using the ethereum.request method
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);

        // Check if the user approved the connection
        if (accounts.length > 0) {
          setIsMetaMaskInstalled(true);
        } else {
          alert('Please connect MetaMask to continue.');
        }
      } else {
        alert('Please install MetaMask to continue.');
      }
    } catch (error) {
      alert('Error connecting to the Ethereum wallet');
    }
  };
  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsMetaMaskInstalled(false);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
  }, []);

  return (
    <div>
      {account ? (
       
         <button
         style={style}
         className={design.Button}
         data-aos='zoom-in'
         data-aos-duration='1000'
       >
      {account.slice(0, 5) + "..." + account.slice(38, 42)}

       </button>
      ) : (
        <button
        style={style}
        className={design.Button}
        onClick={handleConnectMetaMask}
        data-aos='zoom-in'
        data-aos-duration='1000'
      >
        {content}
      </button>
      )} 
    </div>

   
  );
};

ConnectBtn.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default ConnectBtn;
