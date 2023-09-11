import React from "react";

import { Button, Img, List, Text } from "components";
import DAODefineAProcesdao from "components/DAODefineAProcesdao";

const DAOdefinebPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col items-center mb-[92px] w-full">
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
            <div className="bg-black-900_01 flex flex-col items-start justify-start mt-8 p-8 sm:px-5 rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Minimum approval
                      </Text>
                      <Text
                        className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Minimum approval is the amount of addresses in the
                        authorized list that must approve a proposal for it to
                        pass.
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
                      <div className="flex sm:flex-1 flex-col font-raleway gap-2 items-end justify-start w-auto sm:w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          1 of 1 addresses
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
                    </div>
                    <Button className="bg-orange-300_7f capitalize cursor-pointer font-inter min-w-[636px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                      This approval threshold might be too high to reach
                      regularly. Consider setting something lower.
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1094px] mt-[63px] w-auto">
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

export default DAOdefinebPage;
