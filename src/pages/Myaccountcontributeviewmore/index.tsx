import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

const MyaccountcontributeviewmorePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="bg-black-900 flex flex-col items-start justify-start mt-8 w-auto md:w-full">
          <div className="bg-black-900 flex sm:flex-col flex-row gap-2.5 items-start justify-start px-20 md:px-5 w-auto md:w-full">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
              size="txtRalewayRomanSemiBold48"
            >
              my account
            </Text>
            <Input
              name="frame371293"
              placeholder="general users"
              className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
              wrapClassName="bg-green-400 px-8 py-[7px] rounded-br-[32px] rounded-tl-[32px] w-[38%] sm:w-full"
            ></Input>
          </div>
          <Img
            className="h-[78px] w-[1440px]"
            src="images/img_frame371143.svg"
            alt="group370743"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-4 items-start justify-start p-8 md:px-5 rounded-lg w-[412px] sm:w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Username
            </Text>
            <div className="flex flex-col gap-4 items-end justify-end w-auto">
              <div className="bg-black-900_01 flex flex-col items-start justify-start w-[348px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Edit username
                    </Text>
                    <Input
                      name="frame370927"
                      placeholder="enter token address"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_99 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_19 pl-4 pr-3 py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                Edited
              </Button>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 md:px-5 rounded-lg w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Account info
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  Github
                </Text>
                <Text
                  className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20Green400"
                >
                  jilly77
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-3/4 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Total points
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    78
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Total Projects
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    77
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      {" "}
                      Total reward
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    1.000.000
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col gap-2 items-start justify-start max-w-7xl mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start px-4 py-2 w-auto">
              <Text
                className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700"
              >
                Account Detail
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Check Points"
            />
            <div className="flex flex-col gap-4 items-start justify-start py-4 w-auto md:w-full">
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl sm:px-5 px-8 py-4 rounded-lg w-full"
                allowancetext="contributed projects"
              />
              <div className="bg-black-900 flex flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-auto md:w-full">
                  <Input
                    name="frame371315"
                    placeholder="name of project"
                    className="capitalize font-bold p-0 placeholder:text-white-A700_e5 sm:px-5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-black-900_01 border-solid pb-[9px] pt-[13px] px-8 w-[17%] md:w-full"
                    type="text"
                  ></Input>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    github account
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    date
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    time
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    prize
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    status
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    marketplace
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    43500 CDX
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    waiting aproval
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    marketplace
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    43500 CDX
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    waiting aproval
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    marketplace
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    43500 CDX
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    waiting aproval
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    marketplace
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    43500 CDX
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    waiting aproval
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    bounty program
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    500 $
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-green-400 tracking-[0.80px] w-[202px]">
                    approved
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    bounty program
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    500 $
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-green-400 tracking-[0.80px] w-[202px]">
                    approved
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    bounty program
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    500 $
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-green-400 tracking-[0.80px] w-[202px]">
                    approved
                  </Button>
                </div>
                <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-end justify-start py-2 rounded-lg w-auto md:w-full">
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    bounty program
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    25/05/2023
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                    04.32
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                    500 $
                  </Button>
                  <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-green-400 tracking-[0.80px] w-[202px]">
                    approved
                  </Button>
                </div>
                <div className="md:h-[244px] h-[58px] py-2 relative w-[1218px] md:w-full">
                  <div className="md:h-[244px] h-[58px] m-auto w-full">
                    <div className="absolute bg-black-900_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-end m-auto py-2 rounded-lg w-auto">
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        25/05/2023
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        04.32
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                        43500 CDX
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-red-500 tracking-[0.80px] w-[202px]">
                        rejected
                      </Button>
                    </div>
                    <div className="absolute h-[42px] inset-y-[0] left-[0] my-auto sm:px-5 px-8 py-2 w-52">
                      <div className="absolute bg-black-900_01 border border-black-900_01 border-solid h-[42px] inset-[0] m-auto w-[98%]"></div>
                      <Text
                        className="absolute bottom-[23%] capitalize inset-x-[0] mx-auto text-base text-white-A700_e5 tracking-[0.80px] w-max"
                        size="txtRalewayRomanBold16"
                      >
                        translate vue to solidity
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold h-max inset-y-[0] left-[17%] my-auto py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                </div>
                <div className="md:h-[244px] h-[58px] py-2 relative w-[1218px] md:w-full">
                  <div className="md:h-[244px] h-[58px] m-auto w-full">
                    <div className="absolute bg-black-900_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-end m-auto py-2 rounded-lg w-auto">
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        25/05/2023
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        04.32
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                        43500 CDX
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-red-500 tracking-[0.80px] w-[202px]">
                        rejected
                      </Button>
                    </div>
                    <div className="absolute h-[42px] inset-y-[0] left-[0] my-auto sm:px-5 px-8 py-2 w-52">
                      <div className="absolute bg-black-900_01 border border-black-900_01 border-solid h-[42px] inset-[0] m-auto w-[98%]"></div>
                      <Text
                        className="absolute bottom-[23%] capitalize inset-x-[0] mx-auto text-base text-white-A700_e5 tracking-[0.80px] w-max"
                        size="txtRalewayRomanBold16"
                      >
                        translate vue to solidity
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold h-max inset-y-[0] left-[17%] my-auto py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                </div>
                <div className="md:h-[244px] h-[58px] py-2 relative w-[1218px] md:w-full">
                  <div className="md:h-[244px] h-[58px] m-auto w-full">
                    <div className="absolute bg-black-900_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-end m-auto py-2 rounded-lg w-auto">
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        25/05/2023
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        04.32
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                        43500 CDX
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-red-500 tracking-[0.80px] w-[202px]">
                        rejected
                      </Button>
                    </div>
                    <div className="absolute h-[42px] inset-y-[0] left-[0] my-auto sm:px-5 px-8 py-2 w-52">
                      <div className="absolute bg-black-900_01 border border-black-900_01 border-solid h-[42px] inset-[0] m-auto w-[98%]"></div>
                      <Text
                        className="absolute bottom-[23%] capitalize inset-x-[0] mx-auto text-base text-white-A700_e5 tracking-[0.80px] w-max"
                        size="txtRalewayRomanBold16"
                      >
                        translate vue to solidity
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold h-max inset-y-[0] left-[17%] my-auto py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                </div>
                <div className="md:h-[244px] h-[58px] py-2 relative w-[1218px] md:w-full">
                  <div className="md:h-[244px] h-[58px] m-auto w-full">
                    <div className="absolute bg-black-900_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-end m-auto py-2 rounded-lg w-auto">
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        25/05/2023
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px] w-[202px]">
                        04.32
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-orange-300 tracking-[0.80px] w-[202px]">
                        43500 CDX
                      </Button>
                      <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold py-[11px] text-base text-center text-red-500 tracking-[0.80px] w-[202px]">
                        rejected
                      </Button>
                    </div>
                    <div className="absolute h-[42px] inset-y-[0] left-[0] my-auto sm:px-5 px-8 py-2 w-52">
                      <div className="absolute bg-black-900_01 border border-black-900_01 border-solid h-[42px] inset-[0] m-auto w-[98%]"></div>
                      <Text
                        className="absolute bottom-[23%] capitalize inset-x-[0] mx-auto text-base text-white-A700_e5 tracking-[0.80px] w-max"
                        size="txtRalewayRomanBold16"
                      >
                        translate vue to solidity
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-bold h-max inset-y-[0] left-[17%] my-auto py-[11px] text-base text-center text-light_blue-500 tracking-[0.80px] w-[202px]">
                    jilly77
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start sm:px-5 px-8 w-full">
                <Button
                  className="common-pointer bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[71px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]"
                  onClick={() =>
                    navigate("/myaccountcontributedprojectsviewmoreone")
                  }
                >
                  see less
                </Button>
              </div>
            </div>
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Reward transaction"
            />
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Deleted Account"
            />
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[87px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default MyaccountcontributeviewmorePage;
