import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios
import { formData } from '../Launchpad/index';

import { Button, Img, List, Text } from "components";




  const LaunchpadresultPage: React.FC = () => {
    const {
      newProjectName,
      newLogoFile,
      newProjectDescription,
      walletAddresses,
      selectedIncubationOption,
      selectedDashboardOption,
      selectedMilestoneOption,
      selectedCurrencies,
      selectedChains,
      selectedDaoOption,
    } = formData;

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto p-[76px] md:px-10 sm:px-5 w-full">
        <Text
          className="capitalize ml-1 md:ml-[0] mt-[45px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          launchpad
        </Text>
        <div className="flex flex-col gap-7 items-center max-w-[1284px] mt-8 mx-auto pr-1 w-full">
          <div className="flex flex-col gap-4 items-start justify-start py-2 w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              autodeploy your launchpad
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
              <Text
                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                Double-check that everything is correct{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start max-w-7xl w-full">
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row font-raleway gap-4 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    launchpad configuration
                  </Text>
                </div>
                <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                  <Img src="images/img_feedit.svg" alt="feedit" />
                </Button>
              </div>
              <div className="bg-black-900_01 flex md:flex-col flex-row font-raleway md:gap-10 items-start justify-between max-w-[1144px] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    name  :  {newProjectName}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    logo  :   {newLogoFile}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    description : {newProjectDescription}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    wallet.  :    {walletAddresses}
                  </Text>
                </div>
               
              </div>
              <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                These values are correct
              </Button>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row font-raleway gap-4 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    launchpad setting
                  </Text>
                </div>
                <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                  <Img src="images/img_feedit.svg" alt="feedit_One" />
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row font-raleway md:gap-10 gap-40 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    launchpad setting
                  </Text>
                 
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    Incubation : {selectedIncubationOption}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                  Dashboard : {selectedDashboardOption}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                  Milestone :  {selectedMilestoneOption}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                   Currencty: {selectedCurrencies}
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    selected deploy
                  </Text>
                 
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                   - {selectedChains}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                  Status : {selectedDaoOption}
                  </Text>
                
                 
                
                 
                </div>
              </List>
              <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                These values are correct
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-[1284px] mb-36 mt-24 mx-auto md:pl-10 sm:pl-5 pl-[1156px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[128px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
            onClick={() => (window.location.href = "http://localhost:3006")}
            >
              autodeploy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchpadresultPage;
