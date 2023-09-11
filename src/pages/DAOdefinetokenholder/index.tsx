import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DAODefineTokenHolderProcesdao from "components/DAODefineTokenHolderProcesdao";
import LaunchpadRadiobutton from "components/LaunchpadRadiobutton";

const DAOdefinetokenholderPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col items-center mb-[147px] w-full">
          <DAODefineTokenHolderProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1288px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start px-4 py-2 w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32WhiteA700"
              >
                Define membership
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="leading-[160.00%] max-w-[1256px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanMedium16WhiteA700e5"
                >
                  <span className="text-white-A700_e5 font-raleway text-left font-medium">
                    Decide the type of voting your DAO uses. You can change
                    these settings with a vote. For help deciding which type of
                    governance is best for you,{" "}
                  </span>
                  <span className="text-light_blue-500 font-raleway text-left font-medium">
                    read this guide.
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-12 items-start justify-start max-w-7xl mt-8 p-8 sm:px-5 rounded-lg w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-12 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Who can participate in governance?
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <LaunchpadRadiobutton
                          className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                          votingtext="To act as voting chips. The more tokens you hold, the more weight your vote has take qual"
                        />
                        <LaunchpadRadiobutton
                          className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 h-full items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                          tokenholders="Multisig members"
                          votingtext="Only mulai member can vote wallet address equals approval"
                        />
                      </List>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Mint your token
                        </Text>
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                          size="txtRalewayRomanRegular16"
                        >
                          Define the token details and distribute tokens to a
                          core team and DAO treasury. For more on token minting
                          best practices, read this guide
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Name
                        </Text>
                        <Input
                          name="inputfieldtext"
                          placeholder="name"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                          type="text"
                        ></Input>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          The full name of the token. Example Uniwap
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Symbol
                        </Text>
                        <Input
                          name="inputfieldtext_One"
                          placeholder="symbol"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        ></Input>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          The abbreviation of the token. Example UNI
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Distribute tokens
                  </Text>
                  <Text
                    className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                    size="txtRalewayRomanRegular16"
                  >
                    Add the wallets yould like to distribute tokens to you need
                    help distributing token,
                  </Text>
                  <Button className="bg-orange-300_7f capitalize cursor-pointer font-semibold min-w-[677px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                    Your connected wallet was automatically added to the
                    distribution lat. You can remove it if you like.
                  </Button>
                </div>
                <div className="flex flex-col gap-[3px] items-center justify-start w-full">
                  <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col gap-2 items-start justify-start px-4 py-8 rounded-lg w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[82%] md:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        addres
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[486px] text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        tokens
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[279px] text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        allocation
                      </Text>
                    </div>
                    <div className="border-solid border-white-A700_19 border-y flex md:flex-col flex-row md:gap-10 items-center justify-between py-4 w-full">
                      <Button
                        className="border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[285px] px-[31px] py-[17px]"
                        rightIcon={
                          <Img
                            className="h-6 ml-2"
                            src="images/img_file.svg"
                            alt="file"
                          />
                        }
                      >
                        <div className="font-medium font-raleway sm:px-5 text-base text-left text-light_blue-500 tracking-[0.80px]">
                          0x2057237aaF18F6f725
                        </div>
                      </Button>
                      <div className="border border-solid border-white-A700_19 flex flex-col font-inter items-start justify-start px-4 py-2 rounded-lg w-auto">
                        <div className="flex flex-row gap-12 items-center justify-start w-auto">
                          <div className="bg-white-A700_19 flex flex-col h-12 items-center justify-start p-[21px] sm:px-5 rounded-lg w-12">
                            <div className="bg-white-A700 h-px my-0.5 w-[84%]"></div>
                          </div>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtInterSemiBold16"
                          >
                            1
                          </Text>
                          <Button className="bg-white-A700_19 flex h-12 items-center justify-center p-5 rounded-lg w-12">
                            <Img
                              className="h-[7px]"
                              src="images/img_grid.svg"
                              alt="grid"
                            />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-white-A700_33 capitalize cursor-pointer font-inter font-semibold min-w-[109px] py-[19px] rounded-lg text-base text-center text-white-A700_e5 tracking-[0.80px]">
                        100%
                      </Button>
                      <Img
                        className="h-12 w-12"
                        src="images/img_frame371164.svg"
                        alt="frame371164"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[79%] md:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        1 addres
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[473px] text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtInterSemiBold16"
                      >
                        1
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[330px] text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtInterSemiBold16"
                      >
                        100%
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-black-900 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16Black900"
                  >
                    1 Address
                  </Text>
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[124px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      add wallet
                    </Button>
                    <Img
                      className="h-12 rounded-lg w-12"
                      src="images/img_frame371164_black_900_01.svg"
                      alt="frame371164_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Proposal creation
                        </Text>
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                          size="txtRalewayRomanRegular16"
                        >
                          Specify who is permitted to create proposals and what
                          the minimum token requirement is
                        </Text>
                      </div>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Who is eligible?
                      </Text>
                      <div className="border border-solid border-white-A700_19 flex flex-col gap-4 items-start justify-start p-4 rounded-lg w-full">
                        <List
                          className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                          orientation="horizontal"
                        >
                          <LaunchpadRadiobutton
                            className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                            votingtext="Only taken holders with a certain number oftokens are eligible to create proposals."
                          />
                          <LaunchpadRadiobutton
                            className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 h-full items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                            tokenholders="Any wallet"
                            votingtext="Token holders"
                          />
                        </List>
                        <div className="bg-black-900_01 flex flex-col items-start justify-start w-[592px] sm:w-full">
                          <div className="flex flex-col gap-4 items-start justify-start w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Minimum tokens Required
                            </Text>
                            <div className="border-solid border-white-A700_19 border-y flex flex-col font-inter items-center justify-start py-4 w-full">
                              <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                                <div className="flex flex-row sm:gap-12 items-center justify-between w-full">
                                  <div className="bg-white-A700_19 flex flex-col h-12 items-center justify-start p-[21px] sm:px-5 rounded-lg w-12">
                                    <div className="bg-white-A700 h-px my-0.5 w-[84%]"></div>
                                  </div>
                                  <Text
                                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtInterSemiBold16"
                                  >
                                    1
                                  </Text>
                                  <Button className="bg-white-A700_19 flex h-12 items-center justify-center p-5 rounded-lg w-12">
                                    <Img
                                      className="h-[7px]"
                                      src="images/img_grid.svg"
                                      alt="grid_One"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1021px] mt-[65px] w-auto">
              <Button
                className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]"
                onClick={() => navigate("/daodescribe")}
              >
                back
              </Button>
              <Button
                className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/daodefinea")}
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

export default DAOdefinetokenholderPage;
