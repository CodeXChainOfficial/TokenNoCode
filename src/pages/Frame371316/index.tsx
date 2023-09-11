import React from "react";

import { Button, Input, Text } from "components";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

const Frame371316Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-raleway gap-8 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  checkdetailbutton="check detail"
                />
                <div className="flex flex-col gap-4 items-start justify-start mt-4 w-full">
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
                <div className="flex flex-col gap-4 items-start justify-start mt-4 w-full">
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
                <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[82px] mt-4 py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  query
                </Button>
                <Text
                  className="capitalize italic mt-5 text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Balance Of"
                  checkdetailbutton="check detail"
                />
                <div className="flex flex-col gap-4 items-start justify-start mt-4 w-full">
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
                <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[82px] mt-4 py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  query
                </Button>
                <Text
                  className="capitalize italic mt-5 text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Decimals"
                  checkdetailbutton="check detail"
                />
                <div className="flex flex-col gap-4 items-start justify-start mt-4 w-full">
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
                  className="capitalize italic mt-5 text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  uint256
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="From "
                  checkdetailbutton="check detail"
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
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Name"
                  checkdetailbutton="check detail"
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
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                allowancetext="Owner"
                checkdetailbutton="check detail"
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
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Paused"
                  checkdetailbutton="check detail"
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
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Symbol"
                  checkdetailbutton="check detail"
                />
                <Text
                  className="capitalize mt-[19px] text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16Bluegray100"
                >
                  xxx
                </Text>
                <Text
                  className="capitalize italic mt-6 text-base text-blue_gray-100 tracking-[0.80px] w-auto"
                  size="txtRalewayItalicRegular16"
                >
                  string
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 border border-gray-900_03 border-solid flex flex-col items-start justify-start pb-[41px] pt-[25px] sm:px-5 px-[25px] rounded-lg w-auto md:w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl py-4 rounded-lg w-full"
                  allowancetext="Total Supply"
                  checkdetailbutton="check detail"
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

export default Frame371316Page;
