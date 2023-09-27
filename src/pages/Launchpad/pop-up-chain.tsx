import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, List, Text } from "components";
import DAOHOMEGENERATORProcesdao from "components/DAOHOMEGENERATORProcesdao";
import { useDispatch, useSelector } from 'react-redux';
import { toggleChain } from '../actions';
import { RootState } from '../store'; // Import RootState
import ChainSelectionModal from './ChainSelectionModal'; // Import the ChainSelectionModal component






const DAOHOMEGENERATOR = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedChains = useSelector((state: RootState) => state.selectedChains);


  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const chains = [
    'codex mainnet',
    'tron mainnet',
    'ethereum mainnet',
    'polygon mainnet',
    'arbitrum nova',
    'fantom opera mainnet',
    'kava',
    'moonbeam mainnet',
    'moonriver',
    'optimism',
    'Arthera',
    'arbitrum mainnet',
    'avalanche mainnet',
    'BSC Mainnet',
    'cello',
    'cronos mainnet',
    'Polkadot',
    'Kusama',
    'harmony',
    'Chainlink',
    'Osmosis',
    'Cosmos',
  ];

  // Define an array of image URLs corresponding to each chain
 const chainImages = [
  'images/img_frame370829.png', // Cosmos
  'images/img_frame371062.png', // Arbritrum Mainnet
  'images/img_frame371062_48x48.png', // Etherium Mainnet
  'images/img_frame371062_1.png', // Polygon Mainnet
  'images/img_frame371062_2.png', // Arbritrum Nova
  'images/img_frame371062_3.png', // Fantom Opera Mainnet
  'images/img_frame371062_4.png', // Kava
  'images/img_frame371062_5.png', // Moonbeam Mainnet
  'images/img_frame371062_6.png', // Moonriver
  'images/img_frame371062_7.png', // Optimism
  'images/img_image406.png', // Arthera
  'images/img_frame371062_8.png', // Arbritrum Mainnet
  'images/img_frame371062_9.png', // Avalanche Mainnet
  'images/img_frame371062_10.png', // BSC Mainnet
  'images/img_frame371062_11.png', // Cello
  'images/img_frame371062_12.png', // Cronos Mainnet
  'images/img_image402.png', // Polkadot
  'images/img_image403.png', // Kusama
  'images/img_frame371062_13.png', // Harmony
  'images/img_image404.png', // Chainlink
  'images/img_image405.png', // Osmosis
  'images/img_image407.png', // Cosmos
];



const handleChainClick = (chain: string) => {
  dispatch(toggleChain(chain)); // Dispatch the action to toggle a chain
};


const isAtLeastOneChainSelected = () => selectedChains.length > 0;

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] justify-end mx-auto py-[114px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] mr-[1016px] mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          Name Service
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-start w-full">
            <DAOHOMEGENERATORProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
            <div className="flex flex-col gap-4 items-center justify-start max-w-[1256px] mt-24 mx-auto md:px-5 py-2 w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32"
              >
                select blockchain
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="leading-[160.00%] max-w-[1256px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanRegular16"
                >
                  <span className="text-white-A700_e5 font-raleway text-left font-normal">
                    The chain you choose is where your tokens and assets are
                    stored. If you already have a token, choose the chain your
                    token is minted on. This cannot be changed later. For help
                    selecting your chain, read our guide on choosing the
                  </span>
                  <span className="text-light_blue-500 font-raleway text-left font-normal">
                    {" "}
                    best blockchain for your Name Service.
                  </span>
                </Text>
              </div>
            </div>
           
            <div className="flex flex-col items-start justify-start max-w-[1094px] md:ml-[0] ml-[68px] mt-10 md:px-5 w-full">
            <Text
  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
  size="txtRalewayRomanSemiBold16"
>
  {/* Display the selected chains */}
  Selected Chain<Text
  className="capitalize text-base text-blue-400_7f tracking-[0.80px] w-auto"
  size="txtRalewayRomanSemiBold16"
>{selectedChains.join(", ")}</Text> 
</Text>
            </div>
            <div className="bg-black-900 flex flex-col items-start justify-start max-w-[1428px] mx-auto md:px-5 hover:bg-blue_gray-900 ">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1428px] md:px-10 px-20 sm:px-5 py-2 w-full">
                    <div className="flex flex-row gap-8 items-center justify-start py-2 w-full">
                    <button onClick={openModal}>Select Chain</button>

{isModalOpen && (
  <ChainSelectionModal onClose={closeModal} />
)}

                      <Button className="bg-blue-400_7f capitalize cursor-pointer font-semibold min-w-[98px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue_gray-900 ">
                        Testnet
                      </Button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        {chains.map((chain, index) => (
          <div
            key={index}
            className={`bg-${selectedChains.includes(chain) ? 'blue-400_7f' : 'black-900_01'} flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full`}
            onClick={() => handleChainClick(chain)} 
          >
            <Img
              className="h-8 md:h-auto object-cover w-8"
              src={chainImages[index]}
              alt={`frame${index}`}
            />
            <Text
              className={`capitalize text-white-A700 text-xl tracking-[1.00px] w-auto ${
                selectedChains.includes(chain) ? 'text-blue' : ''
              }`}
              size="txtRalewayRomanSemiBold20"
            >
              {chain}
            </Text>
          </div>
        ))}
        {!isAtLeastOneChainSelected() && <p>Please select at least one chain.</p>}
      </div>
    </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[1182px] mt-[100px] md:px-5 w-auto">
             
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1074px] mt-[162px] w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                back
              </Button>
              <Button
                className="common-pointer bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/NameService")} // Call the handleChainClick function
                >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOHOMEGENERATOR;
