import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const DAOresultaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
        <Text
          className="capitalize mt-9 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col gap-8 items-center max-w-7xl mt-[37px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-start justify-start py-2 w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              Deploy your DAO
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
              <Text
                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                Double-check that everything is correct before launching your
                organization.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 flex flex-col font-raleway md:gap-10 gap-20 items-start justify-start p-8 sm:px-5 rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          Blockchain
                        </Text>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                          Not changeable
                        </Button>
                      </div>
                      <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                        <Img src="images/img_feedit.svg" alt="feedit" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col font-raleway items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Network
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Blockchain
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Testnet
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Mumbai
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row font-raleway gap-4 items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-auto">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              DAO details
                            </Text>
                            <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[139px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                              Change with a vote
                            </Button>
                          </div>
                          <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                            <Img src="images/img_feedit.svg" alt="feedit_One" />
                          </Button>
                        </div>
                        <div className="flex flex-col font-raleway items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Logo
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                DAD name
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                Summary
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col items-start justify-start px-4 py-1 rounded-lg w-auto">
                                <Text
                                  className="capitalize text-sm text-white-A700 tracking-[0.70px] w-auto"
                                  size="txtRalewayRomanSemiBold14"
                                >
                                  logo.png
                                </Text>
                              </div>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                xxxx
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                xxxx
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-20 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                              <Text
                                className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanSemiBold16WhiteA700"
                              >
                                Voters
                              </Text>
                              <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[167px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                                Changeable with a vote
                              </Button>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Eligible voters
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Token
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Supply
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Distribution
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Proposal creation
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Token holders
                                </Text>
                                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16WhiteA700e5"
                                  >
                                    xx xx{" "}
                                  </Text>
                                  <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[44px] py-1.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                                    new
                                  </Button>
                                </div>
                                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16WhiteA700e5"
                                  >
                                    5xx{" "}
                                  </Text>
                                  <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[71px] py-1.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                                    mintable
                                  </Button>
                                </div>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  See 1 addresses
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Token holders with 5xx
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                            These values are correct
                          </Button>
                        </div>
                        <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                          <Img src="images/img_feedit.svg" alt="feedit" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                              <Text
                                className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanSemiBold16WhiteA700"
                              >
                                Voting parameters
                              </Text>
                              <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[96px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                                Change with
                              </Button>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Support threshold
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Minimum participation
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Minimum duration
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Early execution
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  Vote change
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  <>&gt; 50%</>
                                </Text>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16WhiteA700e5"
                                  >
                                    <>&gt; 50% (&gt;1%)</>
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] uppercase w-auto"
                                    size="txtRalewayRomanMedium16WhiteA700e5"
                                  >
                                    2d/2h/23 m
                                  </Text>
                                </div>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  yes
                                </Text>
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px]"
                                  size="txtRalewayRomanMedium16WhiteA700e5"
                                >
                                  no
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                            These values are correct
                          </Button>
                        </div>
                        <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                          <Img src="images/img_feedit.svg" alt="feedit" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Button className="bg-blue-400_7f capitalize cursor-pointer font-inter min-w-[791px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              Except for the chain you choose and the token you mint, you can
              change all these values later with a vote in your DAO
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-7xl mb-[232px] mt-[102px] mx-auto sm:px-5 px-[23px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Button
              className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[173px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/daoapprovetransactiona")}
            >
              Deploy your DAO{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOresultaPage;
