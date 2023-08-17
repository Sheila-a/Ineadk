import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

// Use the Infura project ID from the environment variable
const infuraProjectId = process.env.REACT_APP_INFURA_PROJECT_ID;
const providerIUrl = `https://mainnet.infura.io/v3/${infuraProjectId}`;
const web3one = new Web3(providerIUrl);

const address = '0x...'; // Replace with the Ethereum address you want to check
web3.eth.getBalance(address, (error, balance) => {
  if (!error) {
    console.log(
      `Balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`
    );
  } else {
    console.error('Error fetching balance:', error);
  }
});
// Rinkeby testnet example
const providerUrl = 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID';
const web3 = new Web3(providerUrl);
