// import { detectEthereumProvider } from '@metamask/detect-provider';

// export const checkMetaMaskAvailability = async () => {
//   const provider = await detectEthereumProvider();
//   if (provider) {
//     console.log('MetaMask is installed!');
//     return true;
//   } else {
//     console.log('MetaMask is not installed!');
//     return false;
//   }
// };

export const checkMetaMaskAvailability = () => {
  return Boolean(window.ethereum && window.ethereum.isMetaMask);
};
