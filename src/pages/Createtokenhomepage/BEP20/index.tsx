import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import MyTokenContractABI from './myToken.json';
import axios from 'axios'; // Import Axios for making HTTP requests
import { ethers } from 'ethers';
import EthereumTx from 'ethereumjs-tx';



const infuraRpcUrl = 'https://mainnet.infura.io/v3/5f3224c8075b407fa38911977320235b';

declare global {
  interface Window {
    ethereum?: any; // Replace 'any' with the appropriate type if known
  }
}

const CreatetokenhomepageBNB: React.FC = () => {


  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [decimal, setDecimal] = useState('');
  const [deploymentHash, setDeploymentHash] = useState('');
  const [deployedTokens, setDeployedTokens] = useState([]);
  const [deployedTokenCount, setDeployedTokenCount] = useState<number>(0);
  const [deploymentStatus, setDeploymentStatus] = useState<string>('');
  const [selectedRpcUrl, setSelectedRpcUrl] = useState<string>('https://data-seed-prebsc-1-s1.bnbchain.org:8545');


  const [selectedMainnetNetwork, setSelectedMainnetNetwork] = useState('BNB Smart Chain');
  const [selectedTestnetNetwork, setSelectedTestnetNetwork] = useState('BNB test-net');
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null); // Declare web3 using useState
  const [chainId, setChainId] = useState<string>(''); // Add state for chainId



const networkOptions = {
      mainnet: {
        label: 'Mainnet',
        options: [
          {
            label: 'BNB Smart Chain',
            chainId: '0x38', // Ethereum Mainnet
            rpcUrl: 'https://binance.llamarpc.com',
          },
        ],
      },
      testnet: {
        label: 'Testnet',
        options: [
          {
            label: 'BNB test-net',
            chainId: '0x61', // Goerli Testnet

            rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
          },
          
        ],
      },
    };
    
    useEffect(() => {
      const web3Instance = new Web3(selectedRpcUrl);
      setWeb3(web3Instance);
    
      // Request account access
      if (window.ethereum) {

        window.ethereum
          .enable()
          .then((accounts) => {
            if (accounts.length > 0) {
              const address = accounts[0];
              setUserAddress(address);
              console.log('User Address:', address);
            } else {
              console.error('No accounts found.');
            }
          })
          .catch((error) => {
            console.error('Error fetching user address:', error);
          });
      }
    }, [selectedRpcUrl]);
  



   

   

  
      // Handle mainnet network change
      const handleMainnetNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedMainnetNetwork = e.target.value;
        const newSelectedMainnetRpcUrl = networkOptions.mainnet.options.find(option => option.label === newSelectedMainnetNetwork)?.rpcUrl;
        const newSelectedMainnetCHainId = networkOptions.mainnet.options.find(option => option.label === newSelectedMainnetNetwork)?.chainId;
      
        setSelectedMainnetNetwork(newSelectedMainnetNetwork);
  
        if (newSelectedMainnetRpcUrl) {
          setSelectedRpcUrl(newSelectedMainnetRpcUrl);
          console.log('selectedRpcUrl:', newSelectedMainnetRpcUrl);
          console.log('selectedNetwork:', newSelectedMainnetNetwork);

          connectToNetwork(newSelectedMainnetCHainId);

        }
      };
  
      // Handle testnet network change
      const handleTestnetNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedTestnetNetwork = e.target.value;
        const newSelectedTestnetRpcUrl = networkOptions.testnet.options.find(option => option.label === newSelectedTestnetNetwork)?.rpcUrl;
        setSelectedTestnetNetwork(newSelectedTestnetNetwork);

        const newSelectedTestnetchainID =networkOptions.testnet.options.find(option => option.label === newSelectedTestnetNetwork)?.chainId;
      
  
  
        if (newSelectedTestnetRpcUrl) {
          setSelectedRpcUrl(newSelectedTestnetRpcUrl);
          console.log('selectedRpcUrl:', newSelectedTestnetRpcUrl);
          console.log('selectedNetwork:', newSelectedTestnetNetwork);
          setChainId(newSelectedTestnetNetwork); // Set the chainId based on the selected network

          connectToNetwork(newSelectedTestnetchainID);

        }
      };

      const connectToBSC = async () => {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x61' }] // Pass the desired chainId to switch to as an object inside an array
          });
    
          // Network switch was successful
          console.log('Switched to the desired network.');
          
          // You can add additional logic here to handle the switched network
          // For example, you can update the user interface or perform network-specific tasks.
        } catch (error) {
          // Handle errors, e.g., user rejected the request or the network switch failed
          console.error('Error switching network:', error);
          window.ethereum.request({
method: "wallet_addEthereumChain",
params: [{
  chainId: "0x61",
  rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
  chainName: "BSC Testnet",
  nativeCurrency: {
    name: "BSC",
    symbol: "BSC",
    decimals: 18
  },
  blockExplorerUrls: ["https://polygonscan.com/"]
}]
});
        }}


        const connectToBSCMain = async () => {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }] // Pass the desired chainId to switch to as an object inside an array
            });
      
            // Network switch was successful
            console.log('Switched to the desired network.');
            
            // You can add additional logic here to handle the switched network
            // For example, you can update the user interface or perform network-specific tasks.
          } catch (error) {
            // Handle errors, e.g., user rejected the request or the network switch failed
            console.error('Error switching network:', error);
            window.ethereum.request({
  method: "wallet_addEthereumChain",
  params: [{
    chainId: "0x38",
    rpcUrls: ["https://binance.llamarpc.com"],
    chainName: "BSC Smart Cain",
    nativeCurrency: {
      name: "BSC",
      symbol: "BSC",
      decimals: 18
    },
    blockExplorerUrls: ["https://polygonscan.com/"]
  }]
  });
          }}
      
      
      
      

      const connectToNetwork = async (chainId: string) => {
        if (window.ethereum) {
          try {
            // Request to switch to the desired network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId }] // Pass the desired chainId to switch to
            });
      
            // Network switch was successful
            console.log('Switched to the desired network.');
            const rcpUrls = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545';
            console.log('rpcUrls:', rcpUrls);
            console.log('chainId:', chainId);
            
            // You can add additional logic here to handle the switched network
            // For example, you can update the user interface or perform network-specific tasks.
          } catch (error) {
            // Handle errors, e.g., user rejected the request or the network switch failed
            console.error('Error switching network:', error);
            window.ethereum.request({
  method: "wallet_addEthereumChain",
  params: [{
    chainId: "0x61",
    rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
    chainName: "BSC Testnet",
    nativeCurrency: {
      name: "BSC",
      symbol: "BSC",
      decimals: 18
    },
    blockExplorerUrls: ["https://polygonscan.com/"]
  }]
});
          }
        } else {
          // Ethereum provider not available (e.g., MetaMask not installed)
          console.error('Ethereum provider not available.');
        }
      };
      
    
 



  useEffect(() => {

    axios.get('http://localhost:3004/api/tokenCount')
    .then((response) => {
      if (response.status === 200) {
        setDeployedTokenCount(response.data.count);
      } else {
        console.error('Failed to fetch token count:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error fetching token count:', error);
    });

  
  }, []);
        const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8'; // Replace with your contract address



   

     

   const MyTokenContractData = "60806040523480156200001157600080fd5b506040516200190e3803806200190e833981810160405281019062000037919062000306565b8360009081620000489190620005f7565b5082600190816200005a9190620005f7565b50600260009054906101000a900460ff1660ff16600a6200007c919062000861565b82620000899190620008b2565b60038190555080600260006101000a81548160ff021916908360ff160217905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050620008fd565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001638262000118565b810181811067ffffffffffffffff8211171562000185576200018462000129565b5b80604052505050565b60006200019a620000fa565b9050620001a8828262000158565b919050565b600067ffffffffffffffff821115620001cb57620001ca62000129565b5b620001d68262000118565b9050602081019050919050565b60005b8381101562000203578082015181840152602081019050620001e6565b60008484015250505050565b6000620002266200022084620001ad565b6200018e565b90508281526020810184848401111562000245576200024462000113565b5b62000252848285620001e3565b509392505050565b600082601f8301126200027257620002716200010e565b5b8151620002848482602086016200020f565b91505092915050565b6000819050919050565b620002a2816200028d565b8114620002ae57600080fd5b50565b600081519050620002c28162000297565b92915050565b600060ff82169050919050565b620002e081620002c8565b8114620002ec57600080fd5b50565b6000815190506200030081620002d5565b92915050565b6000806000806080858703121562000323576200032262000104565b5b600085015167ffffffffffffffff81111562000344576200034362000109565b5b62000352878288016200025a565b945050602085015167ffffffffffffffff81111562000376576200037562000109565b5b62000384878288016200025a565b93505060406200039787828801620002b1565b9250506060620003aa87828801620002ef565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040957607f821691505b6020821081036200041f576200041e620003c1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200044a565b6200049586836200044a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620004d8620004d2620004cc846200028d565b620004ad565b6200028d565b9050919050565b6000819050919050565b620004f483620004b7565b6200050c6200050382620004df565b84845462000457565b825550505050565b600090565b6200052362000514565b62000530818484620004e9565b505050565b5b8181101562000558576200054c60008262000519565b60018101905062000536565b5050565b601f821115620005a757620005718162000425565b6200057c846200043a565b810160208510156200058c578190505b620005a46200059b856200043a565b83018262000535565b50505b505050565b600082821c905092915050565b6000620005cc60001984600802620005ac565b1980831691505092915050565b6000620005e78383620005b9565b9150826002028217905092915050565b6200060282620003b6565b67ffffffffffffffff8111156200061e576200061d62000129565b5b6200062a8254620003f0565b620006378282856200055c565b600060209050601f8311600181146200066f57600084156200065a578287015190505b620006668582620005d9565b865550620006d6565b601f1984166200067f8662000425565b60005b82811015620006a95784890151825560018201915060208501945060208101905062000682565b86831015620006c95784890151620006c5601f891682620005b9565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200076c57808604811115620007445762000743620006de565b5b6001851615620007545780820291505b808102905062000764856200070d565b945062000724565b94509492505050565b6000826200078757600190506200085a565b816200079757600090506200085a565b8160018114620007b05760028114620007bb57620007f1565b60019150506200085a565b60ff841115620007d057620007cf620006de565b5b8360020a915084821115620007ea57620007e9620006de565b5b506200085a565b5060208310610133831016604e8410600b84101617156200082b5782820a905083811115620008255762000824620006de565b5b6200085a565b6200083a84848460016200071a565b92509050818404811115620008545762000853620006de565b5b81810290505b9392505050565b60006200086e826200028d565b91506200087b836200028d565b9250620008aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000775565b905092915050565b6000620008bf826200028d565b9150620008cc836200028d565b9250828202620008dc816200028d565b91508282048414831517620008f657620008f5620006de565b5b5092915050565b611001806200090d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610b3e565b60405180910390f35b6100d060048036038101906100cb9190610bf9565b61028e565b6040516100dd9190610c54565b60405180910390f35b6100ee6103ee565b6040516100fb9190610c7e565b60405180910390f35b61011e60048036038101906101199190610c99565b6103f4565b60405161012b9190610c54565b60405180910390f35b61013c6107c3565b6040516101499190610d08565b60405180910390f35b61016c60048036038101906101679190610d23565b6107d6565b6040516101799190610c7e565b60405180910390f35b61018a6107ee565b6040516101979190610b3e565b60405180910390f35b6101ba60048036038101906101b59190610bf9565b61087c565b6040516101c79190610c54565b60405180910390f35b6101ea60048036038101906101e59190610d50565b610a89565b6040516101f79190610c7e565b60405180910390f35b6000805461020d90610dbf565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610dbf565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590610e3c565b60405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103dc9190610c7e565b60405180910390a36001905092915050565b60035481565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045b90610e3c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ca90610e3c565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054c90610ea8565b60405180910390fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b90610f14565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106639190610f63565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106b99190610f97565b9250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461074c9190610f63565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107b09190610c7e565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b600180546107fb90610dbf565b80601f016020809104026020016040519081016040528092919081815260200182805461082790610dbf565b80156108745780601f1061084957610100808354040283529160200191610874565b820191906000526020600020905b81548152906001019060200180831161085757829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e390610e3c565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561096e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096590610ea8565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109bd9190610f63565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a139190610f97565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a779190610c7e565b60405180910390a36001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ae8578082015181840152602081019050610acd565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b1082610aae565b610b1a8185610ab9565b9350610b2a818560208601610aca565b610b3381610af4565b840191505092915050565b60006020820190508181036000830152610b588184610b05565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b9082610b65565b9050919050565b610ba081610b85565b8114610bab57600080fd5b50565b600081359050610bbd81610b97565b92915050565b6000819050919050565b610bd681610bc3565b8114610be157600080fd5b50565b600081359050610bf381610bcd565b92915050565b60008060408385031215610c1057610c0f610b60565b5b6000610c1e85828601610bae565b9250506020610c2f85828601610be4565b9150509250929050565b60008115159050919050565b610c4e81610c39565b82525050565b6000602082019050610c696000830184610c45565b92915050565b610c7881610bc3565b82525050565b6000602082019050610c936000830184610c6f565b92915050565b600080600060608486031215610cb257610cb1610b60565b5b6000610cc086828701610bae565b9350506020610cd186828701610bae565b9250506040610ce286828701610be4565b9150509250925092565b600060ff82169050919050565b610d0281610cec565b82525050565b6000602082019050610d1d6000830184610cf9565b92915050565b600060208284031215610d3957610d38610b60565b5b6000610d4784828501610bae565b91505092915050565b60008060408385031215610d6757610d66610b60565b5b6000610d7585828601610bae565b9250506020610d8685828601610bae565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dd757607f821691505b602082108103610dea57610de9610d90565b5b50919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000610e26600f83610ab9565b9150610e3182610df0565b602082019050919050565b60006020820190508181036000830152610e5581610e19565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000610e92601483610ab9565b9150610e9d82610e5c565b602082019050919050565b60006020820190508181036000830152610ec181610e85565b9050919050565b7f416c6c6f77616e63652065786365656465640000000000000000000000000000600082015250565b6000610efe601283610ab9565b9150610f0982610ec8565b602082019050919050565b60006020820190508181036000830152610f2d81610ef1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f6e82610bc3565b9150610f7983610bc3565b9250828203905081811115610f9157610f90610f34565b5b92915050565b6000610fa282610bc3565b9150610fad83610bc3565b9250828201905080821115610fc557610fc4610f34565b5b9291505056fea2646970667358221220fe9a069252be6bc77ce2f401e9835fee4680407eb2e7de6c0cd22a27e01ebe3964736f6c63430008120033"; 

   const convertToAbiItemArray = (abi: any) => {
    if (Array.isArray(abi)) {
      return abi;
    } else if (abi && typeof abi === "object") {
      return [abi];
    }
    return [];
  };
      const abiArray = convertToAbiItemArray(MyTokenContractABI);
      console.log('abiArray2:', abiArray);

  

      const [tokenAddresses, setTokenAddresses] = useState([]);
      const [tokenInfo, setTokenInfo] = useState([]);
      
    
      useEffect(() => {

    


        // Retrieve the list of token addresses associated with your wallet
        const addresses = ['0x4eC6a5AAb9D8E6369b53c2880598106E59a78d10']; // Replace with your actual addresses
    
        // Set the list of token addresses
        setTokenAddresses(addresses);
    
       
    
        // Create instances of token contracts and fetch token information
        const fetchTokenInfo = async () => {
          const tokenInfoArray = [];
          const convertToAbiItemArray = (abi: any) => {
            if (Array.isArray(abi)) {
              return abi;
            } else if (abi && typeof abi === "object") {
              return [abi];
            }
            return [];
          };
          for (const address of addresses) {
            const abiArray = convertToAbiItemArray(MyTokenContractABI);
            const tokenContract = new web3.eth.Contract(abiArray, address);
    
            // Query token information
            const name = await tokenContract.methods.name().call();
            const symbol = await tokenContract.methods.symbol().call();
            const balance = await tokenContract.methods.balanceOf(userAddress).call();

            // Add token info to the array
            tokenInfoArray.push({ address, name, symbol, balance });
          }
    
          // Set the token information
          setTokenInfo(tokenInfoArray);
        };
    
        fetchTokenInfo();
      }, []);

  const handleCreateToken = async () => {

    setDeploymentStatus('Pending');

    const rcpUrls = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545';

    
    
      // Rest of your code remains the same...

  
   
      if (!tokenName || !tokenSymbol || !initialSupply || !decimal) {
        console.error('Please provide valid values for tokenName, tokenSymbol, initialSupply, and decimal.');
        return;
      }


  

      
    
     

        alert(`Deploying Token:
        Name: ${tokenName}
        Symbol: ${tokenSymbol}
        Initial Supply: ${initialSupply}
        Sender Address: ${userAddress}`);
    
  
      // Replace MyTokenContractData with the bytecode of the compiled MyToken.sol contract
     

    // Explicitly specify the type of arguments as string[]
    const contractArguments: any[] = [tokenName, tokenSymbol, initialSupply, decimal];

    console.log('contractArguments:', contractArguments);


      const web3Instance = new Web3(selectedRpcUrl);
      setWeb3(web3Instance);
    
      // Request account access
      if (window.ethereum) {
        const accounts = await window.ethereum.enable();

        window.ethereum
          .enable()
          .then((accounts) => {
            if (accounts.length > 0) {
              const address = accounts[0];
              setUserAddress(address);
              console.log('User Address stage 2:', address);
            } else {
              console.error('No accounts found. (step2)');
            }
          })
          .catch((error) => {
            console.error('Error fetching user address:', error);
          });
      }
    


      console.log('Arrived');

     
        // Create the contract instance
    

          try{


  const yourTokenContract = new web3.eth.Contract(abiArray, contractAddress);
  // Now you can interact with the contract

  
            console.log('yourTokenContract:', yourTokenContract);
    
          // Convert nonce to hexadecimal
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const userAddress = accounts[0]; // Get the user's address
        
          console.log('accounts:', accounts);
          console.log('userAddress:', userAddress);
          const contractData = yourTokenContract.deploy({
            data: MyTokenContractData,
            arguments: contractArguments,
          });
          const gasEstimate = await web3.eth.estimateGas({
            data: contractData.encodeABI(),
            from: userAddress,
          });
          console.log('gasEstimate:', gasEstimate);
          const gasLimit = web3.utils.toHex(gasEstimate + 100000); // Add 100,000 gas as a buffer
          const gasPriceGwei = '10'; // Set the desired gas price in Gwei
          const gasPrice = web3.utils.toWei(gasPriceGwei, 'gwei'); // Convert Gwei to Wei
          

        
        // Prepare the transaction object
        const contract = new web3.eth.Contract(abiArray);
        console.log('contract:', contract);

  const deployData = contract.deploy({
    data: MyTokenContractData,
    arguments: contractArguments,
  }).encodeABI();
  console.log('deployData:', deployData);

  console.log('rpcUrls:', rcpUrls);
  console.log('chainId:', chainId);

  

  const nonce = await web3.eth.getTransactionCount(userAddress);
  console.log('nonce:', nonce);

        const rawTx = {
          nonce: web3.utils.toHex(nonce),
          gasPrice: web3.utils.toHex(gasPrice),
          gasLimit: web3.utils.toHex(gasLimit),
          data: deployData,
          from: userAddress,
        };
        console.log('rawTx:', rawTx);

          const signedTx = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
              from: userAddress,
              to: null, // For contract deployment, set 'to' as null
              gas: rawTx.gasLimit,
              gasPrice: rawTx.gasPrice,
              nonce: rawTx.nonce,
              data: rawTx.data,
            }],
          });
    
          console.log('Transaction Hash:', signedTx);

        // Send the transaction using MetaMask
        
        async function waitForReceipt(txHash, maxRetries = 60) {
          let retries = 0;
          while (retries < maxRetries) {
            try {
              const receipt = await web3.eth.getTransactionReceipt(txHash);
              if (receipt) {
                return receipt;
              }
              await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
            } catch (error) {
              console.error('Error while waiting for receipt:', error);
              await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
            }
            retries++;
          }
          throw new Error('Transaction not mined within the expected time.');
        }
        
        // After sending the transaction
        const receipt = await waitForReceipt(signedTx, 60); // Wait for a maximum of 60 seconds
        if (receipt && receipt.contractAddress) {
          console.log('Contract deployed at address:', receipt.contractAddress);
        } else {
          console.log('Transaction mined, but contract address not available yet.');
        }

        const newTokenInfo = {
          walletAddress: userAddress,
          tokenName: tokenName,
          tokenSymbol: tokenSymbol,
          initialSupply: initialSupply,
          decimals: decimal,
          tokenAddress: receipt.contractAddress,
          deploymentTxHash: signedTx,
        };
    
       
          setDeployedTokens([...deployedTokens, newTokenInfo]);
          console.log('deployedTokens',deployedTokens );
          console.log('newTokenInfo',newTokenInfo );
  
  
          axios.post('http://localhost:3004/api/tokens', newTokenInfo)
            .then((response) => {
              if (response.status === 201) {
                console.log('Token information saved successfully.');
              } else {
                console.error('Failed to save token information:', response.statusText);
              }
            })
            .catch((error) => {
              console.error('Error saving token information:', error);
            });


            const newCount = deployedTokenCount + 1;
  setDeployedTokenCount(newCount);

  // Update the token count on your API
  axios.post('http://localhost:3004/api/tokenCount', { count: newCount })
    .then((response) => {
      if (response.status === 201) {
        console.log('Token count updated successfully on the API.');
      } else {
        console.error('Failed to update token count:', response.statusText);
      }
    })

    const response = await axios.get(`http://localhost:3004/api/tokens/${userAddress}`);
      if (response.status === 200) {
        // Set the retrieved tokens in your component's state for display
        setDeployedTokens(response.data);
        console.log('Set Deployed Token', response.data);

      } else {
        console.error('Failed to fetch token information:', response.statusText);
      }


      const fetchDeployedTokens = async (address: string) => {
        try {
          const response = await axios.get(`http://localhost:3004/api/tokens/${address}`);
          if (response.status === 200) {
            setDeployedTokens(response.data);
          } else {
            console.error('Failed to fetch deployed tokens:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching deployed tokens:', error);
        }
      };
        
  
     
          fetchDeployedTokens(userAddress);

        
       
  } catch (error) {
    console.error('Error deploying contract:', error);
  }



 
}




  


  return (
 
    <div>

<div>
<button onClick={connectToBSCMain}>Connect to BSC MainNet</button>

      </div>

      <div>
      <button onClick={connectToBSC}>Connect to BSC Testnet</button>

      </div>





            <p>Total Deployed Tokens: {deployedTokenCount}</p>
  {/* Display the deployment status */}
  <p>Deployment Status: {deploymentStatus}</p>

{/* Display transaction hash if available */}
{deploymentHash && (
  <p>Transaction Hash: {deploymentHash}</p>
)}
      <input
        type="text"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
        placeholder="Token Name"
      />
      <input
        type="text"
        value={tokenSymbol}
        onChange={(e) => setTokenSymbol(e.target.value)}
        placeholder="Token Symbol"
      />
      <input
        type="number"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
        placeholder="Initial Supply"
      />

<input
        type="number"
        value={decimal}
        onChange={(e) => setDecimal(e.target.value)}
        placeholder="Initial Decimal"
      />
      <button onClick={handleCreateToken}>Create Token</button>
    

       
   <h2>Your Token Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Token Address</th>
            <th>Token Name</th>
            <th>Token Symbol</th>
            <th>Decimal</th>
            <th>Supply</th>
            <th>Deployment Hash</th>
          </tr>
        </thead>
        <tbody>
        {deployedTokens.map((token, index) => (
    <tr key={index}>
      <td>{token.tokenAddress}</td>
      <td>{token.tokenName}</td>
      <td>{token.tokenSymbol}</td>
      <td>{token.decimals}</td>
      <td>{token.initialSupply}</td>
      <td>{token.deploymentTxHash}</td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
};




export default CreatetokenhomepageBNB;