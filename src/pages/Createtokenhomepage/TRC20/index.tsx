import React, { useEffect, useState } from "react";
import TronWeb from "tronweb"; // Import TronWeb


declare global {
    interface Window {
      tronWeb?: any; // Replace 'any' with the appropriate type if known
    }
  }

function TokenDeploymentForm() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState<number>(0); // Set the initial value as a number
  const [decimals, setDecimals] = useState<number>(0); // Set the initial value as a number

  const [tronWeb, setTronWeb] = useState(null);

  const initializeTronWeb = async () => {
    try {
      const tronWebInstance = new TronWeb({
        fullHost: "https://api.nileex.io",
        solidityNode: "https://api.nileex.io",
        eventServer: "https://api.nileex.io",
      });

      if (tronWebInstance && tronWebInstance.ready) {
        setTronWeb(tronWebInstance);
        console.log("TronWeb initialized successfully");
      } else {
        console.log("TronWeb not ready yet. Please try again.");
      }
    } catch (error) {
      console.error("Error initializing TronWeb:", error);
    }
  };

  const handleInitializeTronWeb = () => {
    initializeTronWeb();
  };
  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {

  
        e.preventDefault();


    
   

    try {
      // Deploy the TRC20 token contract
      const contract = await tronWeb.transactionBuilder.createSmartContract(
        {
          abi: [
            {
              "inputs": [],
              "name": "last_completed_migration",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "completed",
                  "type": "uint256"
                }
              ],
              "name": "setCompleted",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ], // Replace with your token's ABI
          bytecode: 0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005057600080fd5b50d3801561005d57600080fd5b50d2801561006a57600080fd5b506103418061007a6000396000f3fe608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b506004361061005b5760003560e01c8063445df0ac146100605780638da5cb5b1461007e578063fdacd5761461009c575b600080fd5b6100686100b8565b6040516100759190610238565b60405180910390f35b6100866100be565b60405161009391906101fd565b60405180910390f35b6100b660048036038101906100b1919061018f565b6100e2565b005b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016790610218565b60405180910390fd5b8060018190555050565b600081359050610189816102f4565b92915050565b6000602082840312156101a5576101a46102a0565b5b60006101b38482850161017a565b91505092915050565b6101c581610264565b82525050565b60006101d8603383610253565b91506101e3826102a5565b604082019050919050565b6101f781610296565b82525050565b600060208201905061021260008301846101bc565b92915050565b60006020820190508181036000830152610231816101cb565b9050919050565b600060208201905061024d60008301846101ee565b92915050565b600082825260208201905092915050565b600061026f82610276565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f546869732066756e6374696f6e206973207265737472696374656420746f207460008201527f686520636f6e74726163742773206f776e657200000000000000000000000000602082015250565b6102fd81610296565b811461030857600080fd5b5056fea26474726f6e582212204f83884f343485fd7bf024f52a65465a363d87571b1fea2a87818d807411db8d64736f6c63430008060033, // Replace with your token's bytecode
        },
        tronWeb.address.fromHex("TJ49rBdrWWu7dre7Z3Nnwumse6GUgooL46"), // Replace with your address
        {
          name: name,
          symbol: symbol,
          decimals: Number(decimals),
          totalSupply: Number(supply) * Math.pow(10, Number(decimals)),
        }
      );

      await tronWeb.trx.waitForContractDeploy(contract.transaction.txID);
console.log("contract.transaction.txID",contract.transaction.txID)

      alert(`Token deployed at address: ${contract.address}`);
    } catch (error) {
        console.log("error ",error.message)

      alert(`Error deploying token: ${error.message}`);
    }
  };

  return (
    <div>
              <button onClick={handleInitializeTronWeb}>Initialize TronWeb</button>

      <h1>TRC20 Token Deployment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Symbol:</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Total Supply:</label>
          <input
            type="number"
            value={supply}
            onChange={(e) => setSupply(Number(e.target.value))} // Convert input to a number
            required
          />
        </div>
        <div>
          <label>Decimals:</label>
          <input
            type="number"
            value={decimals}
            onChange={(e) => setDecimals(Number(e.target.value))} // Convert input to a number
            required
          />
        </div>
        <button type="submit">Deploy Token</button>
      </form>
    </div>
  );
}

export default TokenDeploymentForm;
