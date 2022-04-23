import React from 'react';
import './App.css';
// third-web wallet connection
import { ConnectMetamaskButtonComponent } from './components/ConnectWallet';
import { ethers } from 'ethers';
// Gnosis Safe Core SDK 
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import Safe, { SafeFactory, SafeAccountConfig } from '@gnosis.pm/safe-core-sdk';

const createSafe = async (addresses: any) => {
  const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })
  //  TODO: should be a check for minimum of 5 benefactors before creation
  const owners = addresses;
  const threshold = 2
  const safeAccountConfig: SafeAccountConfig = {
    owners,
    threshold,
  }

  const safeSdk: Safe = await safeFactory.deploySafe({ safeAccountConfig });

  const newSafeAddress = await safeSdk.getAddress()
  console.log(newSafeAddress);

}

const web3Provider = window.ethereum;
const provider = new ethers.providers.Web3Provider(web3Provider);

const owner1 = provider.getSigner(0);

const ethAdapterOwner1 = new EthersAdapter({
  ethers,
  signer: owner1
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => createSafe(['0x00f4349CC7fE6DE11bCDd00f0455b16cB35878AA','0x0f8135a0eAaDa858C44E674E7fD3A4bb1D083157',])}>Create Safe</button>
      <ConnectMetamaskButtonComponent/>
        <p>
        </p>
       
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;