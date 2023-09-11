import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DAODefineAProcesdao from "components/DAODefineAProcesdao";
import LaunchpadRadiobutton from "components/LaunchpadRadiobutton";

const DAOdefineaPage: React.FC = () => {
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
        <div className="flex flex-col items-center mb-[117px] w-full">
          <DAODefineAProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1288px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start px-4 py-2 w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32WhiteA700"
              >
                Select governance settings
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16WhiteA700e5"
                >
                  These settings determine how voting works in your DAO. Read
                  best practices for governance settings in this guide.
                </Text>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col items-start justify-start mt-8 p-8 sm:px-5 rounded-lg w-[1280px] md:w-full">
              <div className="flex flex-col items-start justify-start w-[1216px] md:w-full">
                <div className="flex flex-col gap-12 items-end justify-end w-[1216px] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Support threshold
                      </Text>
                      <Text
                        className="leading-[160.00%] max-w-[1216px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          Support threshold is the percentage of tokens or that
                          are required to vote &quot;Yes&quot; for a proposal to
                          be approved, calculated based on total tokens that
                          voted
                        </>
                      </Text>
                    </div>
                    <div className="border-solid border-white-A700_19 border-y flex md:flex-col flex-row font-inter md:gap-10 gap-24 items-center justify-center py-4 w-full">
                      <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-auto">
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
                      <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-4 items-center justify-start w-auto sm:w-full">
                        <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[61px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          yes
                        </Button>
                        <div className="flex flex-col font-inter items-center justify-center pb-4 w-auto sm:w-full">
                          <Text
                            className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                            size="txtInterRegular12"
                          >
                            20%
                          </Text>
                          <div className="h-2 overflow-hidden relative w-full">
                            <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-light_blue_500  rounded-[4px]"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[55px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          no
                        </Button>
                      </div>
                    </div>
                    <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[254px] py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                      Proposal will be approved by majority
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Minimum participation
                      </Text>
                      <Text
                        className="leading-[160.00%] max-w-[1216px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          Minimum participation is the percentage of the token
                          supply that must vote on a proposal for the vote to be
                          valid. Make sure you set this at a low level that your
                          DAO can meet, so you don&#39;t lock your voting
                          process.
                        </>
                      </Text>
                    </div>
                    <div className="border-solid border-white-A700_19 border-y flex md:flex-col flex-row font-inter md:gap-10 gap-24 items-center justify-center py-4 w-full">
                      <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-auto">
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
                              alt="grid_One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col font-raleway gap-2 items-end justify-start w-auto sm:w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          of 6 tokens
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                          <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[61px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            yes
                          </Button>
                          <div className="flex flex-col font-inter items-center justify-center pb-4 w-auto sm:w-full">
                            <Text
                              className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                              size="txtInterRegular12"
                            >
                              <>&gt;1</>
                            </Text>
                            <div className="h-2 overflow-hidden relative w-full">
                              <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                              <div
                                className="h-full absolute bg-light_blue_500  rounded-[4px]"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[55px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            no
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Minimum duration
                      </Text>
                      <Text
                        className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                        size="txtRalewayRomanRegular16"
                      >
                        Minimum duration is the shortest length of time a
                        proposal can be open for voting. You can extend the
                        duration for each proposal but not shorten it
                      </Text>
                    </div>
                    <List
                      className="border-solid border-white-A700_19 border-y sm:flex-col flex-row font-raleway md:gap-10 gap-24 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-4 w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-center w-auto md:w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Minutes
                        </Text>
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
                      </div>
                      <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-center w-auto md:w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Hours
                        </Text>
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
                      </div>
                      <div className="flex flex-1 md:flex-1 flex-col gap-2 items-start justify-center w-auto md:w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Days
                        </Text>
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
                      </div>
                    </List>
                    <Button className="bg-orange-300_7f capitalize cursor-pointer font-inter min-w-[995px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                      We recommend a minimum duration of at least one day so
                      members have time to vote. You can always lengthen the
                      duration when posting a proposal.
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Early execution
                      </Text>
                      <Text
                        className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                        size="txtRalewayRomanRegular16"
                      >
                        Allow proposal execution before the vote ends if the
                        requirements are met and the vote outcome cannot be
                        changed by more voters participating
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                      <Input
                        name="radiobuttonOne"
                        placeholder="yes"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                        suffix={
                          <Img
                            className="h-4 ml-[35px] my-px"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                      ></Input>
                      <LaunchpadRadiobutton
                        className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                        tokenholders="no"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Vote change
                      </Text>
                      <Text
                        className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                        size="txtRalewayRomanRegular16"
                      >
                        This setting allows voters to change their vote during
                        the voting period. If you enabled early execution, this
                        setting is automatically turned off.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                      <Input
                        name="radiobuttonOne_One"
                        placeholder="yes"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                        suffix={
                          <Img
                            className="h-4 ml-[35px] my-px"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                      ></Input>
                      <LaunchpadRadiobutton
                        className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                        tokenholders="no"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1101px] mt-[65px] w-auto">
              <Button
                className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]"
                onClick={() => navigate("/daodefinetokenholder")}
              >
                back
              </Button>
              <Button
                className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[75px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/daoresulta")}
              >
                done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOdefineaPage;
