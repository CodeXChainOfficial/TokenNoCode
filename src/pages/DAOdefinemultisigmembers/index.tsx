import React from "react";

import { Button, Img, List, Text } from "components";
import DAODefineTokenHolderProcesdao from "components/DAODefineTokenHolderProcesdao";

const DAOdefinemultisigmembersPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col items-center mb-[133px] w-full">
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
                  <div className="flex flex-col items-end justify-end w-full">
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
                        <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              Token holders
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_camera_light_blue_500.svg"
                              alt="camera"
                            />
                          </div>
                          <Text
                            className="leading-[160.00%] max-w-[528px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            Tokens act as voting chips. The more tokens you
                            hold, the more weight your vote has. 1 token equals
                            1
                          </Text>
                        </div>
                        <div className="bg-black-900_01 border border-light_blue-500 border-solid flex flex-1 flex-col gap-2 h-full items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              Multisig members
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_camera_light_blue_500.svg"
                              alt="camera"
                            />
                          </div>
                          <Text
                            className="leading-[160.00%] max-w-[528px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            Only multisig members can vote. 1 wallet address
                            equals 1 approval
                          </Text>
                        </div>
                      </List>
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
                    Multisig members
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[1216px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                    size="txtRalewayRomanMedium16"
                  >
                    There is no limit on the number of addresses on your
                    multisig. Addresses can create proposals, create and approve
                    transactions, and suggest changes to the DAO settings after
                    creation.
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start py-4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start w-full">
                    <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between p-2 rounded-[16px] w-full">
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        0x2057237aaF18F6172552BED5733C68433BBA100e
                      </Text>
                      <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[81px] py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                        clear
                      </Button>
                    </div>
                    <Img
                      className="h-12 rounded-lg w-12"
                      src="images/img_frame371164_black_900_01.svg"
                      alt="frame371164"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[128px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      add addres
                    </Button>
                    <Img
                      className="h-12 rounded-lg w-12"
                      src="images/img_frame371164_black_900_01.svg"
                      alt="frame371164_One"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      summary
                    </Text>
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA70099"
                      >
                        total wallet
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                        size="txtInterRegular16"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-400_7f capitalize cursor-pointer font-semibold min-w-[603px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                  Your connected wallet was automatically added to the list. You
                  can remove it if you like.
                </Button>
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
                          className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                          size="txtRalewayRomanMedium16"
                        >
                          Specify who is permitted to create proposals.
                        </Text>
                      </div>
                      <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start p-4 rounded-lg w-full">
                        <List
                          className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-black-900_01 border border-light_blue-500 border-solid flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                            <div className="flex flex-row gap-2 items-center justify-between w-full">
                              <Text
                                className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanSemiBold16WhiteA700"
                              >
                                Multisig members
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_camera_light_blue_500.svg"
                                alt="camera"
                              />
                            </div>
                            <Text
                              className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                              size="txtRalewayRomanSemiBold16WhiteA70099"
                            >
                              Only the addresses added above can create
                              proposals
                            </Text>
                          </div>
                          <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-1 flex-col gap-2 h-full items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                            <div className="flex flex-row gap-2 items-center justify-between w-full">
                              <Text
                                className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanSemiBold16WhiteA700"
                              >
                                Any wallet
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_camera_light_blue_500.svg"
                                alt="camera"
                              />
                            </div>
                            <Text
                              className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                              size="txtRalewayRomanSemiBold16WhiteA70099"
                            >
                              Any wallet can create proposals.
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1094px] mt-16 w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                back
              </Button>
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[79px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOdefinemultisigmembersPage;
