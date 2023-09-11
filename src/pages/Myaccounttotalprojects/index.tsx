import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

const MyaccounttotalprojectsPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="h-[399px] sm:h-[465px] md:h-[705px] mt-8 md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-black-900 flex sm:flex-col flex-row gap-2.5 items-start justify-start md:px-10 px-20 sm:px-5 w-auto md:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                    size="txtRalewayRomanSemiBold48"
                  >
                    my account
                  </Text>
                  <Button className="bg-blue-400 capitalize cursor-pointer font-semibold min-w-[150px] py-[7px] rounded-br-[32px] rounded-tl-[32px] text-base text-center text-white-A700 tracking-[0.80px]">
                    developer
                  </Button>
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
                          className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20Green400"
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
            </div>
          </div>
          <div className="absolute bg-blue_gray-900_cc flex flex-col items-center justify-start p-2.5 right-[6%] rounded-lg top-[18%] w-[413px] sm:w-full">
            <Text
              className="leading-[160.00%] max-w-[393px] md:max-w-full text-white-A700 text-xs tracking-[0.60px]"
              size="txtRalewayRomanSemiBold12WhiteA700"
            >
              The total projects indicate the number of projects you have
              contributed to within the space. It reflects the breadth of your
              involvement and showcases your experience and expertise in various
              project collaborations.
            </Text>
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
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[338px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default MyaccounttotalprojectsPage;
