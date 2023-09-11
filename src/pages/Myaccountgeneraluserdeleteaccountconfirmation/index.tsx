import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

const MyaccountgeneraluserdeleteaccountconfirmationPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col gap-8 items-center justify-start mt-8 w-full">
          <div className="sm:h-[389px] h-[399px] md:h-[663px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-auto sm:w-full">
                    <Text
                      className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                      size="txtRalewayRomanSemiBold48"
                    >
                      my account
                    </Text>
                  </div>
                  <Img
                    className="h-[78px] w-[1440px]"
                    src="images/img_frame371143.svg"
                    alt="group370743"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
                  <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[412px] sm:w-full">
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
                              className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
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
                  <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
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
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
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
                            className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20"
                          >
                            jilly77
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
                            className="capitalize text-light_blue-500 text-xl tracking-[1.00px]"
                            size="txtRalewayRomanSemiBold20"
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
                            className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20"
                          >
                            1.000.000
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-start max-w-[632px] mx-auto p-8 sm:px-5 rounded-[16px] top-[2%] w-full">
              <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
                <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_materialsymbolsdelete.svg"
                      alt="materialsymbols"
                    />
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                      size="txtRalewayRomanSemiBold24"
                    >
                      delete account
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_carbonclosefilled.svg"
                    alt="carbonclosefill"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 items-end justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanRegular16WhiteA700"
                >
                  {" "}
                  Are you certain you wish to proceed with deleting your
                  account?
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[89px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    cancel
                  </Button>
                  <Button className="bg-red-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col gap-2 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
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
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
                allowancetext="Contributed Projects"
              />
              <div className="bg-black-900_01 flex flex-col items-start justify-start py-4 w-auto md:w-full">
                <MyTokenReadContractDetailAllAllowence
                  className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl sm:px-5 px-8 py-4 rounded-lg w-full"
                  allowancetext="Reward transaction"
                />
              </div>
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
                allowancetext="Deleted Account"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[11px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default MyaccountgeneraluserdeleteaccountconfirmationPage;
