
import puppetter from '../../../public/images/puppet.gif';

import { useState } from 'react';
import Image from 'next/image';
const ethers = require('ethers');
import abi2 from '../../NFTMarketplace.json';
const Mint = () => {
    const [amount, setAmount] = useState(1); // Initial amount set to 1
    const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to connect/disconnect the wallet
  async function connectWallet() {
    if (!connected) {
      try {
        // Check if there's already a request pending
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          // If there are already accounts connected, set connected to true
          setConnected(true);
          setWalletAddress(accounts[0]);
          return;
        }
  
        // If there's no pending request, proceed to connect the wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const _walletAddress = await signer.getAddress();
        setConnected(true);
        setWalletAddress(_walletAddress);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      // Disconnect the wallet
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }

  const mint = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner();
      const contractAddress = '0x9Ec349681e01e041bd4532d010cB578505C0d186'; //'0xE980bAEc1130E967488510E2647643435D35AFF0'; // Your contract address
      const contractABI = abi2; //abi; // Your contract ABI
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call the mint function of your contract
      const transaction = await contract.mint(1);
      await transaction.wait();
      
      alert('NFT successfully minted!');
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };
    const handleDecrement = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleIncrement = () => {
        if (amount < 10) {
            setAmount(amount + 1);
        }
    };

    const calculatePrice = () => {
        if (amount === 1) {
            return 'Free';
        } else {
            return (amount - 1) * 0.005 + ' ETH';
        }
    };

    return (
        <section className="my-28 flex flex-col md:flex-row items-center justify-center md:justify-between" id="mint">
    <div className="flex flex-col w-full md:gap-4">
        <h1 className="custom-heading text-center md:text-center">Mint</h1>
        <p className="w-full  custom-paragraph text-center md:text-center">
            Welcome to our minting section, where creativity meets craftsmanship
            to produce tokens of timeless value. Step into a realm where 
            imagination knows no bounds and every design tells a unique story.
        </p>

       
        <div className="w-full md:w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
    <div className="md:pr-0 md:w-full md:ml-96">
        <p className="custom-paragraph py-2 text-center md:text-start mb-2">Amount</p>
        <div className="amount-handler bg-lightgray border border-white w-full md:w-52 py-3 px-4 flex items-center justify-center md:justify-between">
            <div className="flex items-center">
                <button
                    onClick={handleDecrement}
                    className={`text-lg ${
                        amount === 1
                            ? 'text-gray-500'
                            : 'text-white'
                    }`}
                >
                    &lt;
                </button>
            </div>
            <div className="flex-1 flex justify-center">
                <p className="text-white text-lg">{amount}</p>
            </div>
            <div className="flex items-center">
                <button
                    onClick={handleIncrement}
                    className={`text-lg ${
                        amount === 10
                            ? 'text-gray-500'
                            : 'text-white'
                    }`}
                >
                    &gt;
                </button>
            </div>
        </div>
    </div>
    <div className="mt-6 md:mt-0 md:mr-96">
        <p className="custom-paragraph py-2 text-center md:text-start">Price</p>
        <div className="bg-lightgray border border-white text-xl w-full md:w-52 py-3 px-2 flex items-center justify-center">
            {calculatePrice()}
        </div>
    </div>
</div>

   


        <button
            onClick={() => alert('Mint not live!')}
            className="mx-auto mt-8 font-righteous bg-blyellow text-base uppercase w-44 h-12 tracking-wider transition duration-200 hover:scale-105 text-black self-center md:self-start"
        >
            Mint
        </button>
    </div>
    


</section>

    );
};

export default Mint;
