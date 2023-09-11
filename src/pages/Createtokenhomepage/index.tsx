import React, { useState } from "react";
import { Button, Input } from "components";
import { contractExecute } from './contractExecute';

const CreatetokenhomepagePage: React.FC = () => {
  const [tokenData, setTokenData] = useState({
    tokenSymbol: "",
    tokenSupply: "",
    tokenDecimal: "",
    tokenName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const newValue = e.target.value;
    setTokenData((prevTokenData) => ({
      ...prevTokenData,
      [fieldName]: newValue,
    }));
  };

  const handleDeploy = () => {
    // Call the contractExecute function to deploy the contract
    contractExecute(
      tokenData.tokenName,
      tokenData.tokenSymbol,
      tokenData.tokenSupply,
      tokenData.tokenDecimal
    );
  };

  return (
    <>
      <Input
        name="tokenSymbol"
        placeholder="ex. shiba"
        value={tokenData.tokenSymbol}
        onChange={(e) => handleInputChange(e, "tokenSymbol")}
      />
      <Input
        name="tokenSupply"
        placeholder="token supply"
        value={tokenData.tokenSupply}
        onChange={(e) => handleInputChange(e, "tokenSupply")}
      />
      <Input
        name="tokenName"
        placeholder="6"
        value={tokenData.tokenName}
        onChange={(e) => handleInputChange(e, "tokenName")}
      />
      <Input
        name="tokenDecimal"
        placeholder="6"
        value={tokenData.tokenDecimal}
        onChange={(e) => handleInputChange(e, "tokenDecimal")}
      />
      <Button onClick={handleDeploy}>Deploy</Button>
    </>
  );
};

export default CreatetokenhomepagePage;