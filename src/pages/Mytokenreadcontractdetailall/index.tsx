import React from "react";

import { Button, Input, List, Text } from "components";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

const MytokenreadcontractdetailallPage: React.FC = () => {
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
                <div className="flex flex-row gap-8 items-center justify-start max-w-7xl mx-auto py-2 w-full">
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
        <div className="flex flex-col items-start justify-start max-w-[1327px] mx-auto md:px-5 w-full">
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
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start mt-1 w-auto sm:w-full">
            <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[180px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
              read contract
            </Button>
            <Button className="capitalize cursor-pointer font-semibold min-w-[184px] py-3 rounded-lg text-center text-white-A700_99 text-xl tracking-[1.00px]">
              write contract
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1330px] mb-[346px] mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full" />
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    owner (address)
                  </Text>
                  <Input
                    name="inputfieldtext"
                    placeholder="owner (address)"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    _spender (address)
                  </Text>
                  <Input
                    name="inputfieldtext_One"
                    placeholder="_spender (address)"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[82px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  query
                </Button>
                <Text
                  className="capitalize italic text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Balance Of"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    account (address)
                  </Text>
                  <Input
                    name="inputfieldtext_Two"
                    placeholder="account (address)"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[82px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  query
                </Button>
                <Text
                  className="capitalize italic text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Decimals"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Numbers of Digits
                  </Text>
                  <Input
                    name="inputfieldtext_Three"
                    placeholder="6"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <Text
                  className="capitalize italic text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
          <div className="md:h-[223px] h-[230px] relative w-full">
            <div className="flex sm:flex-col flex-row gap-8 h-full items-center justify-start ml-9 mt-[72px] w-auto">
              <div className="bg-light_blue-500 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-auto">
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  read contract
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-4 py-2 w-auto">
                <Text
                  className="capitalize text-white-A700_99 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA70099"
                >
                  write contract
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                  <MyTokenReadContractDetailAllAllowence
                    className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                    allowancetext="From "
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Standard token string
                    </Text>
                    <Input
                      name="inputfieldtext_Four"
                      placeholder="0xicdffsnfggglmssmsmofm1234"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Name"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Contract Name
                  </Text>
                  <Input
                    name="inputfieldtext_Five"
                    placeholder="0xicdffsnfggglmssmsmofm1234"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                allowancetext="Owner"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  Owner address
                </Text>
                <Input
                  name="inputfieldtext_Six"
                  placeholder="0xicdffsnfggglmssmsmofm1234"
                  className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                  wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Paused"
                />
                <Text
                  className="capitalize text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16Bluegray100"
                >
                  <span className="text-blue_gray-100 tracking-[0.40px] font-epilogue text-left font-normal">
                    False{" "}
                  </span>
                  <span className="text-blue_gray-100 tracking-[0.40px] font-epilogue text-left font-normal italic">
                    bool
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Symbol"
                />
                <Text
                  className="capitalize text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16Bluegray100"
                >
                  xxx
                </Text>
                <Text
                  className="capitalize italic text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  string
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col gap-4 items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Total Supply"
                />
                <Text
                  className="capitalize text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16Bluegray100"
                >
                  7777777777
                </Text>
                <Text
                  className="capitalize italic text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MytokenreadcontractdetailallPage;
