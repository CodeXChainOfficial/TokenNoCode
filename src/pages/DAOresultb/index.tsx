import React from "react";

import { Button, Img, List, Text } from "components";

const DAOresultbPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col items-start justify-center mx-auto p-20 md:px-10 sm:px-5 w-full">
        <Text
          className="capitalize mt-9 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col font-raleway gap-8 items-center max-w-7xl mt-[37px] mx-auto w-full">
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
          <List
            className="bg-black-900_01 flex flex-col gap-20 items-start p-8 sm:px-5 rounded-lg w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                            Blockchain
                          </Text>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                            Not changeable
                          </Button>
                        </div>
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
                    <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                      <Img src="images/img_feedit.svg" alt="feedit" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                            DAO details
                          </Text>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[139px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                            Change with a vote
                          </Button>
                        </div>
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
                              ENS Subdomain
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
                              xxxx.dao.ath{" "}
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
                    <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                      <Img src="images/img_feedit.svg" alt="feedit" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                              Multisig members
                            </Text>
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
                              Multisig members
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
            <div className="flex flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[167px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                            Changeable with a vote
                          </Button>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanMedium16WhiteA700e5"
                            >
                              Minimum approval
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanMedium16WhiteA700e5"
                            >
                              1of1authorized add
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
        <Button className="bg-blue-400_7f capitalize cursor-pointer font-inter min-w-[795px] md:min-w-full mt-8 py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
          Except for the chain you choose and the token you mint, you can change
          all these values later with a vote in your DAO.
        </Button>
        <div className="flex flex-col font-raleway items-end max-w-7xl mb-[188px] mt-[29px] mx-auto md:pl-10 sm:pl-5 pl-[1097px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[183px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
              Deploy your DAO ›
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOresultbPage;
