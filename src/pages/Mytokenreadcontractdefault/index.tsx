import React from "react";

import { Button, Input, List, Text } from "components";

const MytokenreadcontractdefaultPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto py-28 w-full">
        <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start px-20 md:px-5 w-auto sm:w-full">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
              size="txtRalewayRomanSemiBold48"
            >
              token Setting
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                <div className="flex flex-col items-center justify-start max-w-7xl mx-auto py-2 w-full">
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start p-2.5 rounded-lg w-auto">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        create token
                      </Text>
                    </div>
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[97px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      my token
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1327px] mb-[307px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full">
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[412px] sm:w-full">
              <Text
                className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                cDX explorer
              </Text>
              <div className="flex flex-col gap-4 items-end justify-end w-auto">
                <div className="bg-black-900_01 flex flex-col items-start justify-start w-[348px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        enter token address
                      </Text>
                      <Input
                        name="frame370927"
                        placeholder="enter token address"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="border border-solid border-white-A700_19 pl-4 pr-3 py-[11px] rounded-lg w-full"
                      ></Input>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[89px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                  search
                </Button>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-[891px] p-8 sm:px-5 rounded-lg w-full">
              <Text
                className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                token info
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] px-4 py-2 w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    token name
                  </Text>
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    jilly77
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] px-4 py-2 w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    token symbol
                  </Text>
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    jilly77
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] px-4 py-2 w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    token decimal
                  </Text>
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    6
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] px-4 py-2 w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    token supply
                  </Text>
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    1.000.000
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start mt-16 w-auto sm:w-full">
            <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[180px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
              read contract
            </Button>
            <Button className="capitalize cursor-pointer font-semibold min-w-[184px] py-3 rounded-lg text-center text-white-A700_99 text-xl tracking-[1.00px]">
              write contract
            </Button>
          </div>
          <div className="bg-black-900 flex flex-col items-start justify-start max-w-7xl mt-8 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Allowance
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  burn
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Balance of
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Decimals
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer flex-1 font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  From
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Name
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Owner
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Paused
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Symbol
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Total Supply
                </Text>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                  check detail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MytokenreadcontractdefaultPage;
