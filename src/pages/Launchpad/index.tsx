import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LaunchpadRadiobutton from "components/LaunchpadRadiobutton";
import axios from 'axios';
import e from "express";
import ChainSelectionModal from './ChainSelectionModal';





  const LaunchpadPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
    const navigate = useNavigate();

    const projectNameRef = useRef(null);
    const projectDescriptionRef = useRef (null);

    const [selectedChains, setSelectedChains] = useState([]);
    const [currentChain, setCurrentChain] = useState("");
  
    const chains = [
      "Codex",
      "Tron",
      "BSC",
      "Juno",
      "Terra",
      "Oasis"
    ];
  
    const handleChainChange = (event) => {
      setCurrentChain(event.target.value);
    };
  
    const addChain = () => {
      if (currentChain && !selectedChains.includes(currentChain)) {
        setSelectedChains([...selectedChains, currentChain]);
        setCurrentChain("");
      }
    };
  
    const removeChain = (chainToRemove) => {
      const updatedChains = selectedChains.filter((chain) => chain !== chainToRemove);
      setSelectedChains(updatedChains);
    };



    const [userHasToken, setUserHasToken] = useState("");
    const [tokenAddress, setTokenAddress] = useState("");
  

    const [selectedCurrencies, setSelectedCurrencies] = useState([]);
    const [currentCurrency, setCurrentCurrency] = useState("");
    const currencyOptions = [
      "Ecosystem Native token",
      "Ecosystem Native Stable coin (if any)",
      "USDC",
      "USDT",
      "Other",
    ];
  
    const handleCurrencyChange = (event) => {
      setCurrentCurrency(event.target.value);
    };
  
    const addCurrency = () => {
      if (currentCurrency && !selectedCurrencies.includes(currentCurrency)) {
        setSelectedCurrencies([...selectedCurrencies, currentCurrency]);
        setCurrentCurrency(""); // Clear the current currency input
      }
    };
  
    const removeCurrency = (currencyToRemove) => {
      const updatedCurrencies = selectedCurrencies.filter(
        (currency) => currency !== currencyToRemove
      );
      setSelectedCurrencies(updatedCurrencies);
    };
    const handleUserHasTokenChange = (event) => {
      setUserHasToken(event.target.value);
      // Clear token address when user selection changes
      setTokenAddress("");
    };
  
    const handleTokenAddressChange = (event) => {
      setTokenAddress(event.target.value);
    };
  
    const handleCreateTokenClick = () => {
      // Handle the logic for creating a token or redirecting to a link here
      // You can use the values of userHasToken and tokenAddress for this logic
      console.log("Create Token Clicked");
    };
  





    const [daoAddress, setDaoAddress] = useState("");
    const [walletAddresses, setWalletAddresses] = useState([""]);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectDescription, setNewProjectDescription] = useState('');
    const [newLogoFile, setNewLogoFile] = useState(null); // State for the logo file

    
    const [selectedDaoOption, setSelectedDaoOption] = useState("");
    const [selectedDashboardOption, setSelectedDashboardOption] = useState("");
    const [selectedIncubationOption, setSelectedIncubationOption] = useState("");
    const [selectedMilestoneOption, setSelectedMilestoneOption] = useState("");
  
    const handleDaoOptionChange = (event) => {
      setSelectedDaoOption(event.target.value);
    };
  
    const handleIncubationOptionChange = (event) => {
      setSelectedIncubationOption(event.target.value);
    };
  
    const handleDashboardOptionChange = (event) => {
      setSelectedDashboardOption(event.target.value);
    };
  
    const handleMilestoneOptionChange = (event) => {
      setSelectedMilestoneOption(event.target.value);
    };
  
      const [logoName, setLogoName] = useState<string | null>(null);


    
    const handleLogoFileChange = (event) => {
      const file = event.target.files[0];
    
      if (!file) {
        console.error("No file selected.");
        return;
      }
      setNewLogoFile(file);
      setLogoName(file.name);
    
    
      const allowedTypes = ["image/svg+xml", "image/png", "image/jpeg"];
      const maxSize = 200 * 1024; // 200 KB
    
      if (!allowedTypes.includes(file.type)) {
        console.error("Invalid file format. Please choose an SVG, PNG, or JPEG file.");
        return;
      }
    
      if (file.size > maxSize) {
        console.error("File size exceeds the limit (200 KB). Please choose a smaller file.");
        return;
      }
    
      setNewLogoFile(file);
    };
  
    const updateLogo = () => {
      if (!newLogoFile) {
        console.error("Please select a valid logo file.");
        return;
      }
  
      const formData = new FormData();
      formData.append('logo', newLogoFile);
  
      axios
        .post('http://localhost:3004/api/set-logo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensure this header is set correctly
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log('Logo updated successfully');
          }
        })
        .catch((error) => {
          console.error('Error updating logo:', error);
        });
    };
  
    const handleProjectNameChange = (event) => {
      setNewProjectName(event.target.value);
    };
  
    const handleProjectDescriptionChange = (event) => {
      setNewProjectDescription(event.target.value);
    };
  
    const updateProjectDescription = () => {
      if (!newProjectDescription) {
        console.error('Please enter a new project description.');
        return;
      }
  
      axios
        .post('http://localhost:3004/api/set-project-description', { projectDescription: newProjectDescription })
        .then((response) => {
          if (response.status === 200) {
            console.log('Project description updated successfully');
          }
        })
        .catch((error) => {
          console.error('Error updating project description:', error);
        });
    };
  
    const updateProjectName = () => {
      if (!newProjectName) {
        console.error('Please enter a new project name.');
        return;
      }
  
      axios
        .post('http://localhost:3004/api/set-project-name', { projectName: newProjectName })
        .then((response) => {
          if (response.status === 200) {
            console.log('Project name updated successfully');
          }
        })
        .catch((error) => {
          console.error('Error updating project name:', error);
        });
    };
  
    const handleDaoAddressChange = (event) => {
      setDaoAddress(event.target.value);
    };
  
    const handleWalletAddressChange = (index, event) => {
      const updatedAddresses = [...walletAddresses];
      updatedAddresses[index] = event.target.value;
      setWalletAddresses(updatedAddresses);
    };
  
    const handleAddWalletAddress = () => {
      setWalletAddresses([...walletAddresses, ""]);
    };
  
    const handleRemoveWalletAddress = (index) => {
      if (walletAddresses.length > 1) {
        const updatedAddresses = [...walletAddresses];
        updatedAddresses.splice(index, 1);
        setWalletAddresses(updatedAddresses);
      }
    };



    const handleSubmit = () => {

      if (projectNameRef.current) {
        const projectName = projectNameRef.current.value;
        setNewProjectName(projectName);
      }

      if (projectDescriptionRef.current) {
        const projectDescription = projectDescriptionRef.current.value;
        setNewProjectDescription(projectDescription);
      }



      let selectedCurrencyValue: any[] = []; // Initialize as an empty array

      // Check if custom currency input is visible, and use it if needed
    
      // Collect all the data from your state variables
      const formData = {
        newLogoFile,
        daoAddress,
        walletAddresses,
        newProjectName,
        newProjectDescription,
        selectedCurrencies, // Use selectedCurrencies here
        userHasToken,
        tokenAddress,
        selectedChains,
        selectedDaoOption,
        selectedIncubationOption,
        selectedDashboardOption,
        selectedMilestoneOption
      };
    
        updateFormData(formData);

      
      // Send the formData to your API using axios or fetch
      axios.post('http://localhost:3004/api//submit-form', formData)
        .then((response) => {
          if (response.status === 200) {
            console.log('Data saved successfully');
            // You can also navigate to the next page here if needed
          }
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    };
  
    const renderFormBasedOnOption = () => {
      if (selectedDaoOption === "dAO") {
        return (
          <>
            <button
                                                             className="common-pointer bg-light_blue-500 cursor-pointer flex items-center justify-center min-w-[600px] md:min-w-full pl-8 pr-[35px] py-2 rounded-lg"
                                                             >
              <a href="http://localhost:3000">
              <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Create DAO
                      </Text></a>
            </button>
            <input
              type="text"
              placeholder="Paste your DAO address"
              value={daoAddress}
              onChange={handleDaoAddressChange}
            />
          </>
        );
      } else if (selectedDaoOption === "Centralised") {
        return (
          <>
            {walletAddresses.map((address, index) => (
              <div key={index}>
               
                <input

                  type="text"
                  
                  placeholder={`Wallet address ${index + 1}`}
                  value={address}
                  onChange={(event) => handleWalletAddressChange(index, event)}
                />
                {index > 0 && (
                  <button onClick={() => handleRemoveWalletAddress(index)}>
                    <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                         Remove
                      </Text> 
                  </button>
                )}
              </div>
            ))}
            <button onClick={handleAddWalletAddress}>
            <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Add Wallet Address
                      </Text> 
              
              
              </button>
          </>
        );
      } else {
        // Handle other options or provide a default
        return null;
      }
    };
  

  
   

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
    
        <div className="flex flex-col items-center max-w-7xl mt-[37px] mx-auto w-full">
          <div className="bg-black-900_01 flex flex-col gap-12 items-start justify-start max-w-2xl p-8 sm:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <div style={{ textAlign: 'center' }}>

              <Text
                className="capitalize text-light_blue-500 text-4xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                LaunchPad Configurations
              </Text>
              </div>

              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="mt-12"> 
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                       Name*
                      </Text>
                      </div>
                      <Input
                        name="Name"
                        placeholder="Insert your project name"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[255px] py-[11px] rounded-lg w-full"
                        ref={projectNameRef} // Attach the ref to the input field

                      ></Input>
                     
                    </div>
                   
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="mt-8"> 
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Logo
                      </Text>
                      </div>
                      <Text
                        className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16"
                      >
                        JPG, PNG, GIF, or SVG of no more than 3MB. We recommend
                        1024x1024px.
                      </Text>
                      <div className="flex flex-col items-left justify-start w-full">
        <input
          type="file"
          accept=".svg, .png, .jpeg, .jpg"
          onChange={handleLogoFileChange}
          className="hidden"
          id="logoInput"
        />
        <label
          htmlFor="logoInput"
          className="cursor-pointer bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col h-24 items-center justify-center p-10 sm:px-5 rounded-lg w-24"
        >
          {/* Optionally, you can display a preview of the selected file here */}
          <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        
                   
          {!newLogoFile && <span>Select Logo</span>}
            {newLogoFile && <span>{logoName}</span>}   </Text>

        </label>
      </div>
      <button onClick={updateLogo}></button>
                        <Img
                          className="h-4 w-[1px]"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                      
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Description
                      </Text>
                      <Input
                        name="description"
                        placeholder="Insert your description"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[55px] py-[51px] rounded-lg w-full"
                        ref={projectDescriptionRef} // Attach the ref to the input field

                      ></Input>

                     
                   

                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      
                    <div className="mt-8"> 
   
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Wallet
                      </Text>
                      
  </div>
                      
 

                      <Input
                        name="language"
                        placeholder="connect  your link/ wallet"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                        value={walletAddresses}
                      ></Input>
                         

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12"> 

            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize text-light_blue-500 text-4xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                Select LaunchPad Settings
              </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="mt-14"> 

                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                      <label>
        <input
          type="radio"
          name="daoOption"
          value="dAO"
          onChange={(event) => setSelectedDaoOption(event.target.value)}
          checked={selectedDaoOption === "dAO"}
        />
         <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        DAO
                      </Text>
      </label>

      <label>
        <input
          type="radio"
          name="daoOption"
          value="Centralised"
          onChange={(event) => setSelectedDaoOption(event.target.value)}
          checked={selectedDaoOption === "Centralised"}
        />
        <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Centralize
                      </Text>
      </label>

      <div>{renderFormBasedOnOption()}</div></div>
    </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="mt-8"> 

                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Incubation Needed
                      </Text>
                      </div>
                      <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <label>
        <input
          type="radio"
          name="incubationOption"
          value="yes"
          onChange={(event) => setSelectedIncubationOption(event.target.value)}
    checked={selectedIncubationOption === "yes"}
        />
         <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Yes
                      </Text>
        
      </label>

      <label>
        <input
          type="radio"
          name="incubationOption"
          value="No"
          onChange={(event) => setSelectedIncubationOption(event.target.value)}
          checked={selectedIncubationOption === "No"}
        />
          <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        No
                      </Text>
      </label>
                      </div>
                    </div>
                   

                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    
                    <div className="mt-8">   <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Generate Dashboard
                      </Text>

                      </div>
                      <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <label>
        <input
          type="radio"
          name="dashboardOption"
          value="yes"
          onChange={(event) => setSelectedDashboardOption(event.target.value)}
    checked={selectedDashboardOption === "yes"}
        />
         <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Yes
                      </Text>
        
      </label>

      <label>
        <input
          type="radio"
          name="dashboardOption"
          value="No"
          onChange={(event) => setSelectedDashboardOption(event.target.value)}
    checked={selectedDashboardOption === "No"}
        />
          <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        No
                      </Text>
      </label>
                      </div></div>
                      

                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="mt-8"> 
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Milestone Needed?
                      </Text>
                      </div>
                      <div className="flex flex-row gap-8 items-center justify-start w-full">
                       
                      <label>
        <input
          type="radio"
          name="milestoneOption"
          value="Yes"
          onChange={(event) => setSelectedMilestoneOption(event.target.value)}
    checked={selectedMilestoneOption === "Yes"}
        />
         <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Yes
                      </Text>
        
      </label>

      <label>
        <input
          type="radio"
          name="milestoneOption"
          value="No"
          onChange={(event) => setSelectedMilestoneOption(event.target.value)}
    checked={selectedMilestoneOption === "No"}
        />
          <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        No
                      </Text>
      </label>
                      </div>
                      </div>

                      <div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
  <label htmlFor="currencyDropdown" className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto">

    
    
    
  </label>



  </div></div>



      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <label className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto">
        <div className="mt-8">        
        <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                         Do you have a token?
                      </Text></div>
         
          
        </label>
        <div className="flex flex-row gap-8 items-center justify-start w-full">

          <label>
            <input
              type="radio"
              name="userHasToken"
              value="Yes"
              checked={userHasToken === "Yes"}
              onChange={handleUserHasTokenChange}
            />
            <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                         Yes
                      </Text>
          </label>
          <label>
            <input
              type="radio"
              name="userHasToken"
              value="No"
              checked={userHasToken === "No"}
              onChange={handleUserHasTokenChange}
            />
            <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                         No
                      </Text>
          </label>
      </div>
      </div>

      {userHasToken === "Yes" && (
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <input
            type="text"
            name="tokenAddress"
            placeholder="Copy your Token address"
            value={tokenAddress}
            onChange={handleTokenAddressChange}
            className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full border border-solid border-white-A700_19 flex px-4 py-[9px] rounded-lg"
          />
        </div>
      )}

      {userHasToken === "No" && (
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <button onClick={handleCreateTokenClick} className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
          <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                         Create Token
                      </Text>
           
            
          </button>
          <input
            type="text"
            name="tokenAddress"
            placeholder="Copy your Token address"
            value={tokenAddress}
            onChange={handleTokenAddressChange}
            className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full border border-solid border-white-A700_19 flex px-4 py-[9px] rounded-lg"
          />
        </div>
      )}
    </div></div>
                    
             
   

        <div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
        <div className="mt-12"> 
        <button onClick={openModal}>Select Chain</button>

{isModalOpen && (
  <ChainSelectionModal onClose={closeModal} />
)}</div>
   

  <select
    id="chainDropdown"
    name="chain"
    value={currentChain}
    onChange={handleChainChange}
    className="bg-blue-800 capitalize cursor-pointer font-semibold min-w-[610px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900"
    >
    <option value="">
    
                         Select a Chain
                      
      </option>
      
    {chains.map((chain, index) => (
      <option key={index} value={chain}>
        {chain}
      </option>
    ))}
  </select>
  <button  onClick={addChain}
    className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[610px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900"
    >
 
                         Add Chain
                     
   
    
  </button>


{/* Display selected chains */}
<div>
  {selectedChains.map((chain, index) => (
    <div key={index} className="flex items-center gap-2">
       <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                       <span> {chain}</span>
                      </Text>
      <button className=" capitalize cursor-pointer font-semibold min-w-[610px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]" onClick={() => removeChain(chain)}>X</button>
    </div>
  ))}
</div>
    </div>


    <div className="flex justify-center flex-col gap-4 items-start justify-start w-full">
  <div className="mt-8"> 
    <label
      htmlFor="currencyDropdown"
      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
    >
      <Text
        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
        size="txtRalewayRomanSemiBold16WhiteA700e5"
      >
        Select Your Currencies
      </Text>
      
    </label>
    <div className="mt-4"> 

    <select
      id="currencyDropdown"
      name="currency"
      value={currentCurrency}
      onChange={handleCurrencyChange}
      className="bg-blue-800 justify-center capitalize cursor-pointer font-semibold min-w-[610px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900"
      >
      <option value="">
      
          Select Currency
       
      </option>
      {currencyOptions.map((currencyOption, index) => (
        <option key={index} value={currencyOption}>
          {currencyOption}
        </option>
      ))}
    </select></div></div>
    <button
      onClick={addCurrency}
      className="bg-light_blue-500 border border-solid border-white-A700_19 capitalize cursor-pointer font-semibold min-w-[610px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900 border-color-white"
      >
     
        Add Currency
    </button></div>  </div>

 
  {selectedCurrencies.length > 0 && (
  <div className="mt-"> 
  <p>Selected Currencies:</p>
      {selectedCurrencies.map((currency, index) => (
        <div key={index}>
          <Text
            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
            size="txtRalewayRomanSemiBold16WhiteA700e5"
          >
            {currency}
          </Text>
          <button onClick={() => removeCurrency(currency)}>
            <Text
              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700e5"
            >
              x
            </Text>
          </button>
        </div>
      ))}
    </div>
  )}
</div>
      
      </div>

      <div className="flex flex-col items-end max-w-7xl mb-[273px] mt-[114px] mx-auto sm:px-5 px-6 w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
              back
            </Button>
            <Button
  className="common-pointer bg-gradient1 capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
  onClick={() => {
    handleSubmit(); // This will submit the form
    navigate("/launchpadresult"); // This will navigate to "/launchpadresult"
  }}
>
  Next
</Button>
          </div>
        </div>
                </div>
              </div>
            </div>
        
   
    
    </>
  );
};

export default LaunchpadPage;

export const formData = {
  newLogoFile: null,
  daoAddress: "",
  walletAddresses: [""],
  newProjectName: "",
  newProjectDescription: "",
  selectedCurrencies: [],
  customCurrency: "",
  userHasToken: "",
  tokenAddress: "",
  selectedChains: [],
  selectedDaoOption: "",
  selectedIncubationOption: "",
selectedDashboardOption: "",
  selectedMilestoneOption: "",
};

export const updateFormData = (data) => {
  Object.keys(data).forEach((key) => {
    if (formData.hasOwnProperty(key)) {
      formData[key] = data[key];
    }
  });
};